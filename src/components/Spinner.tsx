import {
  LoaderSpinnerSize,
  TypographyVariation,
} from '@digi/arbetsformedlingen';
import { StyledDigiLoaderSpinner } from './styled/Spinner';
import {
  DigiLayoutContainer,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
import './Spinner.scss';

export function Spinner() {
  return (
    <>
      <DigiLayoutContainer className="spinnerDigiLayoutContainer">
        <div className="spinner">
          <DigiTypography afVariation={TypographyVariation.SMALL}>
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
