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
            information om lön, och eftertraktade kompetenser i yrket.
          </p>
        </DigiTypography>
      </DigiLayoutContainer>
      <DigiTypography>
        <RelatedOccupationInput />
      </DigiTypography>
    </DigiLayoutBlock>
  );
};
