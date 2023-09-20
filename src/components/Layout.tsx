import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { DigiLayoutBlock } from '@digi/arbetsformedlingen-react';
import { LayoutBlockContainer } from '@digi/arbetsformedlingen';
import './Layout.scss';

export const Layout = () => {

  return (
    <div>
      <Header />
      <DigiLayoutBlock
        afContainer={LayoutBlockContainer.STATIC}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div>
          <Outlet />
        </div>
      </DigiLayoutBlock>
    </div>
  );
};
