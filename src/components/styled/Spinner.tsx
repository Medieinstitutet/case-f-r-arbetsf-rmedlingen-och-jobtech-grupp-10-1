import styled from 'styled-components';
import { DigiLoaderSpinner } from '@digi/arbetsformedlingen-react';
import { spinnerColor } from './variables';

export const StyledDigiLoaderSpinner = styled(DigiLoaderSpinner)`
  svg {
    color: ${spinnerColor};
  }
`;
