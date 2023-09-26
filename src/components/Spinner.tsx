import {
  LoaderSpinnerSize
} from '@digi/arbetsformedlingen';
import { StyledDigiLoaderSpinner } from './styled/Spinner';

import './dialog.scss';
import {
  DigiLayoutContainer
} from '@digi/arbetsformedlingen-react';

export function Spinner() {
  return (
    <>
      <DigiLayoutContainer className="dialog-container">
        <div className="dialog">
          <StyledDigiLoaderSpinner
            afSize={LoaderSpinnerSize.LARGE}
            afText="Laddar..."
          ></StyledDigiLoaderSpinner>
        </div>
      </DigiLayoutContainer>
    </>
  );
}
