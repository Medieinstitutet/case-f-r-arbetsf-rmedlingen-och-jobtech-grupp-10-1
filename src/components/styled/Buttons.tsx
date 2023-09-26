import styled from 'styled-components';
import { DigiButton } from '@digi/arbetsformedlingen-react';
import colors from '../../style/_variables.module.scss';

const { callToAction, secondary, primaryBright, primary } = colors;

export const StyledDigiButton = styled(DigiButton)`
  &&& {
    --digi--button--color--background--primary--default: ${callToAction};
    --digi--button--color--background--primary--hover: ${secondary};

    --digi--button--color--text--primary--default: ${primaryBright};
    --digi--button--color--text--primary--hover: ${primary};
  }
`;
