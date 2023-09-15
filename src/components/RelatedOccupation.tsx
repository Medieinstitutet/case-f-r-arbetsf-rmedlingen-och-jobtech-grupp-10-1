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
// import { Link } from 'react-router-dom';

interface IRelatedOccupationProps {
  occupation: IRelatedOccupations;
}

export const RelatedOccupation = ({ occupation }: IRelatedOccupationProps) => {
  const handleClick = (id: string) => {
    console.log(id);
    // <Link to={`/relatedOccupation/${id}`} />;
  };

  return (
    <DigiLayoutContainer afVerticalPadding>
      <DigiTypography afVariation={TypographyVariation.SMALL}>
        <h2>{occupation.occupation_label}</h2>
        <p>Yrkesgrupp: {occupation.occupation_group.occupation_group_label}</p>
        <DigiButton
          afSize={ButtonSize.SMALL}
          afVariation={ButtonVariation.PRIMARY}
          afFullWidth={false}
          onAfOnClick={() => handleClick(occupation.id)}
        >
          Läs mer
        </DigiButton>
      </DigiTypography>
    </DigiLayoutContainer>
  );
};
