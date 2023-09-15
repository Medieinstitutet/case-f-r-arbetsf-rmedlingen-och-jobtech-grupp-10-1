import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header>header</header>
      <Outlet />
      {/* <sidebar>sidebar</sidebar> */}
    </>
  );
};
