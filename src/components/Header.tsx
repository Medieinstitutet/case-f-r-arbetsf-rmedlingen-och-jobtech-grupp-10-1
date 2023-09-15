import {
  LayoutBlockVariation,
  TypographyVariation,
} from '@digi/arbetsformedlingen';
import {
  DigiLayoutBlock,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';

export const Header = () => {
  return (
    <header>
      <DigiLayoutBlock
        afVariation={LayoutBlockVariation.SYMBOL}
        afVerticalPadding={true}
      >
        <DigiTypography afVariation={TypographyVariation.LARGE}>
          <h1 className="headerH1">YrkesOraklet</h1>
        </DigiTypography>
      </DigiLayoutBlock>
    </header>
  );
};
