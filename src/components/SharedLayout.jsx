import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';

export const SharedLayout = ({catalog, group, menu, isLoading, setIsLoading, error}) => {
  return (
    <>
      <Suspense fallback={'Loading...'}>
        <Header catalog={catalog} group={group} menu={menu} isLoading={isLoading} setIsLoading={setIsLoading} error={error}/>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
