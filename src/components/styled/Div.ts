import styled from 'styled-components';

export const StyledChartContainer = styled.div`
  height: 400px;
  max-width: 580px;
`;

export const StyledListRelatedOccupations = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledRelatedOccupation = styled.div`
  margin-bottom: 1rem;
  border-bottom: 1px solid #ccc;
  padding: 1rem;
  width: 80%;
  @media (min-width: 500px) {
    width: 500px;
  }
`;
