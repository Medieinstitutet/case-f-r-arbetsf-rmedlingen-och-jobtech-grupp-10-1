import {
  LayoutBlockContainer,
  LayoutBlockVariation,
  TypographyVariation,
} from '@digi/arbetsformedlingen';
import {
  DigiIconHome,
  DigiLayoutBlock,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <DigiLayoutBlock
        afContainer={LayoutBlockContainer.FLUID}
        afVariation={LayoutBlockVariation.SYMBOL}
        afVerticalPadding={true}
        afMarginBottom={true}
      >
        <DigiTypography afVariation={TypographyVariation.LARGE}>
          <Link to={'/'}>
            <h1 className="headerH1">YrkesOraklet</h1>
          </Link>
          <DigiIconHome />
        </DigiTypography>
      </DigiLayoutBlock>
    </header>
  );
};
