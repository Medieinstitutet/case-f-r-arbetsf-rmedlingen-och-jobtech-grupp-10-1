import styled from 'styled-components';
import { DigiButton } from '@digi/arbetsformedlingen-react';

export const StyledDigiButton = styled(DigiButton)`
  &&& {
    --digi--button--color--background--primary--default: grey;
    --digi--button--color--background--primary--hover: black;

    --digi--button--color--text--primary--default: black;
    --digi--button--color--text--primary--hover: grey;
  }
`;
/* 
export const PrimaryButton = styled(Button).attrs({ className: 'testing' })`
  background-color: grey;
  --digi--button--color--background--primary--default: grey;
  padding: 1rem;

  &:hover {
    outline: 2px solid yellow;
    background-color: yellow;
    color: white;
  }
`;
 */
