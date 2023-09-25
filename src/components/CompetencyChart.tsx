import { DigiBarChart } from '@digi/arbetsformedlingen-react';
import { IChartData } from '../models/IChartData';
import { ICompetencies } from '../models/ICompetencies';
import { IOccupationGroup } from '../models/IOccupationGroup';

interface ICompetencyChartProps {
  competencies: ICompetencies[];
  occupationGroup: IOccupationGroup;
}

export const CompetencyChart = ({
  competencies,
  occupationGroup,
}: ICompetencyChartProps) => {
  const competencyData: IChartData = {
    data: {
      xValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      series: [
        {
          yValues: competencies
            .slice(0, 10)
            .map((competency) => competency.percent_for_occupation),
          title: 'Kompetens',
          colorToken: 'blue',
        },
      ],
      xValueNames: competencies
        .slice(0, 10)
        .map(
          (competency) =>
            competency.term.charAt(0).toUpperCase() + competency.term.slice(1)
        ),
    },
    x: 'Kompetens',
    y: 'Procent',
    title: 'Dom 10 mest eftertraktade Kompetenserna',
    subTitle: `Yrkesgrupp: ${occupationGroup.occupation_group_label}`,
    infoText: `Talet står för hur många procent som en viss kompetens utgör inom annonser för ett visst yrke.`,
  };

  return <DigiBarChart afChartData={competencyData} />;
};
