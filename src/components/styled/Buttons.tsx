import styled from 'styled-components';
import { DigiButton } from '@digi/arbetsformedlingen-react';
import { callToAction, primary, primaryBright, secondary } from './variables';

export const StyledDigiButton = styled(DigiButton)`
  &&& {
    --digi--button--color--background--primary--default: ${callToAction};
    --digi--button--color--background--primary--hover: ${secondary};

    --digi--button--color--text--primary--default: ${primaryBright};
    --digi--button--color--text--primary--hover: ${primary};
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
