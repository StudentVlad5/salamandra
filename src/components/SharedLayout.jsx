import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';

export const SharedLayout = ({catalog, isLoading, error}) => {
  return (
    <>
      <Suspense fallback={'Loading...'}>
        <Header catalog={catalog} isLoading={isLoading} error={error}/>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
