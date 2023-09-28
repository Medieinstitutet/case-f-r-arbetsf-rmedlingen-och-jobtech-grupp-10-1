import { DigiLayoutBlock } from '@digi/arbetsformedlingen-react';
import styled from 'styled-components';
import colors from '../../style/_variables.module.scss';

export const Header = styled(DigiLayoutBlock)`
  &&& {
    --digi--layout-block--background--primary: ${colors.secondary};
  }
`;
