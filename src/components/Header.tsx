import {
  LayoutBlockVariation,
  TypographyVariation,
} from '@digi/arbetsformedlingen';
import {
  DigiLayoutBlock,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <DigiLayoutBlock
        afVariation={LayoutBlockVariation.SYMBOL}
        afVerticalPadding={true}
      >
        <DigiTypography afVariation={TypographyVariation.LARGE}>
          <Link to={'/'}>
            <h1 className="headerH1">YrkesOraklet</h1>
          </Link>
        </DigiTypography>
      </DigiLayoutBlock>
    </header>
  );
};
