import {
  DigiButton,
  DigiLayoutContainer,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
import { IRelatedOccupations } from '../models/IRelatedOccupations';
import {
  ButtonSize,
  ButtonVariation,
  TypographyVariation,
} from '@digi/arbetsformedlingen';
import { Button, PrimaryButton } from './styled/Buttons';

interface IRelatedOccupationProps {
  occupation: IRelatedOccupations;
  handleClick: (id: string) => void;
}

export const RelatedOccupation = ({
  occupation,
  handleClick,
}: IRelatedOccupationProps) => {
  return (
    <DigiLayoutContainer afVerticalPadding>
      <DigiTypography afVariation={TypographyVariation.SMALL}>
        <h2>{occupation.occupation_label}</h2>
        <p>Yrkesgrupp: {occupation.occupation_group.occupation_group_label}</p>
        <PrimaryButton
          afSize={ButtonSize.SMALL}
          afVariation={ButtonVariation.PRIMARY}
          afFullWidth={false}
          onAfOnClick={() => handleClick(occupation.id)}
        >
          Läs mer
        </PrimaryButton>
      </DigiTypography>
    </DigiLayoutContainer>
  );
};
