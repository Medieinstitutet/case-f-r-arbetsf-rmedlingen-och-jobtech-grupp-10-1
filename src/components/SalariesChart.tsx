import { DigiChartLine } from '@digi/arbetsformedlingen-react';
import { IChartData } from '../models/IChartData';
import { generateQueryValues } from '../services/SCBStatisticsService';

interface ISalariesChartProps {
  averageSalaries: number[];
}

export const SalariesChart = ({ averageSalaries }: ISalariesChartProps) => {
  const salaryData: IChartData = {
    data: {
      xValues: [1, 2, 3, 4, 5],
      series: [
        {
          yValues: averageSalaries,
          title: 'Lön',
        },
      ],
      xValueNames: generateQueryValues(),
    },
    x: 'År',
    y: 'Lön',
    title: 'Löneutveckling',
  };

  return <DigiChartLine afChartData={salaryData} afHeadingLevel="H2" />;
};
