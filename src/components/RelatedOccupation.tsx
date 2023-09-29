import { DigiTypography } from '@digi/arbetsformedlingen-react';
import { IRelatedOccupations } from '../models/IRelatedOccupations';
import {
  ButtonSize,
  ButtonVariation,
  TypographyVariation,
} from '@digi/arbetsformedlingen';
import { StyledDigiButton } from './styled/Buttons';
import { StyledRelatedOccupation } from './styled/Div';

interface IRelatedOccupationProps {
  occupation: IRelatedOccupations;
  handleClick: (id: string) => void;
}

export const RelatedOccupation = ({
  occupation,
  handleClick,
}: IRelatedOccupationProps) => {
  return (
    <StyledRelatedOccupation>
      <DigiTypography afVariation={TypographyVariation.SMALL}>
        <h2>{occupation.occupation_label}</h2>
        <p>Yrkesgrupp: {occupation.occupation_group.occupation_group_label}</p>
        <StyledDigiButton
          afSize={ButtonSize.SMALL}
          afVariation={ButtonVariation.PRIMARY}
          afFullWidth={false}
          onAfOnClick={() => handleClick(occupation.id)}
        >
          Läs mer
        </StyledDigiButton>
      </DigiTypography>
    </StyledRelatedOccupation>
  );
};
