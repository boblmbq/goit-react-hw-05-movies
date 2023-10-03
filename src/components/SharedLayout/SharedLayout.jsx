import Header from 'components/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback="loading...">
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
