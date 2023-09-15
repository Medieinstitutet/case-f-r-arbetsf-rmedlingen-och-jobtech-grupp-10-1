import {
  DigiButton,
  DigiLayoutContainer,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
// import { IRelatedOccupations } from '../models/IRelatedOccupations';
import {
  ButtonSize,
  ButtonVariation,
  TypographyVariation,
} from '@digi/arbetsformedlingen';

// interface IRelatedOccupationProps {
//   occupation: IRelatedOccupations;
// }

export const RelatedOccupation = () => {
  const handleClick = () => {
    console.log('id');
  };

  return (
    <DigiLayoutContainer afVerticalPadding>
      <DigiTypography afVariation={TypographyVariation.SMALL}>
        <h2>occupation_label</h2>
        <p>Yrkesgrupp: occupation_group.occupation_group_label</p>
        <DigiButton
          afSize={ButtonSize.SMALL}
          afVariation={ButtonVariation.PRIMARY}
          afFullWidth={false}
          onAfOnClick={handleClick}
        >
          Läs mer
        </DigiButton>
      </DigiTypography>
    </DigiLayoutContainer>
  );
};
