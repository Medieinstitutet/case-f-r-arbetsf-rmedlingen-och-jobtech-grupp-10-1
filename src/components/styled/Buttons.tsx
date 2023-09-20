import styled from 'styled-components';
import { DigiButton } from '@digi/arbetsformedlingen-react';

export const Button = styled(DigiButton)`
  background-color: black;
`;

export const PrimaryButton = styled(Button)`
  background-color: grey;
  padding: 1rem;

  &:hover {
    outline: 2px solid yellow;
    background-color: yellow;
    color: white;
  }
`;
