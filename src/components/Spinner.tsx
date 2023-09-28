import { LoaderSpinnerSize } from '@digi/arbetsformedlingen';
import { StyledDigiLoaderSpinner } from './styled/Spinner';

import './dialog.scss';
import {
  DigiLayoutContainer,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';

export function Spinner() {
  return (
    <>
      <DigiLayoutContainer className="dialog-container">
        <div className="dialog">
          <DigiTypography>
            <StyledDigiLoaderSpinner
              afSize={LoaderSpinnerSize.LARGE}
              afText="Laddar..."
            ></StyledDigiLoaderSpinner>
          </DigiTypography>
        </div>
      </DigiLayoutContainer>
    </>
  );
}
