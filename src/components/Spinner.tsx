import { LoaderSpinnerSize } from '@digi/arbetsformedlingen';
import { StyledDigiLoaderSpinner } from './styled/Spinner';
import { DigiLayoutContainer } from '@digi/arbetsformedlingen-react';
import './Spinner.scss';

export function Spinner() {
  return (
    <>
      <DigiLayoutContainer className="spinnerDigiLayoutContainer">
        <div className="spinner">
          <StyledDigiLoaderSpinner
            afSize={LoaderSpinnerSize.LARGE}
            afText="Laddar..."
          ></StyledDigiLoaderSpinner>
        </div>
      </DigiLayoutContainer>
    </>
  );
}
