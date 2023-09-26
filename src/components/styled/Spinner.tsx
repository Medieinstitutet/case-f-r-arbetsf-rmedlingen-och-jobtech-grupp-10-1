import styled from 'styled-components';
import { DigiLoaderSpinner } from '@digi/arbetsformedlingen-react';
import colors from '../../style/_variables.module.scss';

export const StyledDigiLoaderSpinner = styled(DigiLoaderSpinner)`
  svg {
    color: ${colors.primary};
  }
`;
