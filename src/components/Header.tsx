import {
  LayoutBlockContainer,
  TypographyVariation,
} from '@digi/arbetsformedlingen';
import { DigiTypography } from '@digi/arbetsformedlingen-react';
import { Link } from 'react-router-dom';
import { Header as StyledHeader } from './styled/Header';

export const Header = () => {
  return (
    <header>
      <StyledHeader
        afContainer={LayoutBlockContainer.FLUID}
        afVerticalPadding={true}
      >
        <DigiTypography afVariation={TypographyVariation.LARGE}>
          <Link to={'/'}>
            <h1 className="headerH1">YrkesOraklet</h1>
          </Link>
        </DigiTypography>
      </StyledHeader>
    </header>
  );
};
