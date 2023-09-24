import React, { useEffect, Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { RestrictedRoute } from 'routes/RestrictedRoute';
import { SharedLayout } from 'components/SharedLayout';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing, getPermission } from 'redux/auth/selectors';
import LandingPage from 'pages/LandingPage';
import AdminPage from 'pages/AdminPage';
import { Register } from './Auth/Forms/Register';
import { Login } from './Auth/Forms/Login';
import { fetchData } from 'services/APIservice';
import { onFetchError } from 'helpers/Messages/NotifyMessages';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const permission = useSelector(getPermission);

  const [catalog, setCatalog] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    (async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData(`/product`);
        if (!data) {
          return onFetchError('Whoops, something went wrong');
        }
        const listOfGroup = data.map(item => item.product);
        setCatalog(listOfGroup);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return isRefreshing ? (
    <></>
  ) : (
    <HelmetProvider>
      <Suspense fallback={<div>{'Loading...'}</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout catalog={catalog} isLoading={isLoading} error={error}/>}>
            <Route index element={<LandingPage catalog={catalog}/>} />
            <Route path="*" element={<LandingPage catalog={catalog}/>} />
          </Route>
          {permission === 'admin' ? (
            <Route path="admin" element={<AdminPage />} />
          ) : (
            <Route
              path="admin"
              element={
                <RestrictedRoute redirectTo="/admin" component={<Login />} />
              }
            />
          )}

          <Route
            path="register"
            element={
              <RestrictedRoute redirectTo="/admin" component={<Register />} />
            }
          />
          <Route
            path="signin"
            element={
              <RestrictedRoute redirectTo="/admin" component={<Login />} />
            }
          />
        </Routes>
      </Suspense>
    </HelmetProvider>
  );
};
