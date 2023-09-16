import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import SideBar from './SideBar';

export const Layout = () => {
  return (
    <>
      <Header />
      <SideBar/>
      <Outlet />
      {/* <sidebar>sidebar</sidebar> */}
    </>
  );
};
