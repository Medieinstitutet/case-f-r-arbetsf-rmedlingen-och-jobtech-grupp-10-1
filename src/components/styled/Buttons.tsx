import styled from 'styled-components';
import { DigiButton } from '@digi/arbetsformedlingen-react';
import { primary1, primary2 } from './variables';

export const StyledDigiButton = styled(DigiButton)`
  &&& {
    --digi--button--color--background--primary--default: ${primary1};
    --digi--button--color--background--primary--hover: ${primary2};

    --digi--button--color--text--primary--default: ${primary2};
    --digi--button--color--text--primary--hover: ${primary1};
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
