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
    <div>
      <Header />
      <DigiLayoutBlock afContainer={LayoutBlockContainer.STATIC}>
          <div>
            <SideBar open={open} setOpen={setOpen} />
            <Outlet />
          </div>
      </DigiLayoutBlock>
    </div>
  );
};
