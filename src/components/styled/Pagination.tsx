import { DigiNavigationPagination } from '@digi/arbetsformedlingen-react';
import styled from 'styled-components';
import { callToAction } from './variables';

export const StyledDigiNavigationPagination = styled(DigiNavigationPagination)`
  &&& {
    --digi--button--color--background--primary--default: green !important;
    --COLOR--BACKGROUND--DEFAULT: green !important;
  }
`;
