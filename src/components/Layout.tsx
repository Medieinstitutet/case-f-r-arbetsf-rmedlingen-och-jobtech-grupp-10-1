import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import SideBar from './SideBar';
import { useState } from 'react';
import {
  DigiLayoutBlock,
  DigiNavigationSidebarButton,
} from '@digi/arbetsformedlingen-react';

export const Layout = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Header />
      <DigiLayoutBlock>
        <DigiNavigationSidebarButton
          afText="Meny"
          onAfOnToggle={() => setOpen((prev) => !prev)}
        />
        <SideBar open={open} setOpen={setOpen} />
        <Outlet />
      </DigiLayoutBlock>
      {/* <sidebar>sidebar</sidebar> */}
    </>
  );
};
