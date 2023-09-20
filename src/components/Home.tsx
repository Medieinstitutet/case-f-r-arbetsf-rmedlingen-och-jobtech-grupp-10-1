import {
  DigiLayoutBlock,
  DigiLayoutContainer,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
import RelatedOccupationInput from './RelatedOccupationInput';
import { TypographyVariation } from '@digi/arbetsformedlingen';

export const Home = () => {
  return (
    <DigiLayoutBlock>
      <DigiLayoutContainer afVerticalPadding>
        <DigiTypography afVariation={TypographyVariation.LARGE}>
          <h2>Välkommen till YrkesOraklet.</h2>
          <p>
            Här kan du söka på ett yrke som intresserar dig och få mer
            information, och vilka kompetenser som efterfrågas i yrket.
          </p>
        </DigiTypography>
      </DigiLayoutContainer>
      <DigiLayoutContainer afVerticalPadding>
        <DigiTypography>
          <RelatedOccupationInput />
        </DigiTypography>
      </DigiLayoutContainer>
    </DigiLayoutBlock>
  );
};
