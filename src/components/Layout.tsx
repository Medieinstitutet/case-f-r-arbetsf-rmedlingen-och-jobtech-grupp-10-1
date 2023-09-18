import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import SideBar from './SideBar';
import { useState } from 'react';
import { DigiLayoutBlock } from '@digi/arbetsformedlingen-react';
import { LayoutBlockContainer } from '@digi/arbetsformedlingen';
import './Layout.scss';

export const Layout = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Header />
      <DigiLayoutBlock afContainer={LayoutBlockContainer.NONE}>
        <SideBar open={open} setOpen={setOpen} />
        <Outlet />
      </DigiLayoutBlock>
    </>
  );
};
