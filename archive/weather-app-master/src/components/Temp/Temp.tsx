import React from 'react';
import styled from 'styled-components';

const TempWrapper = styled.div`
  margin: 18px 0;
  font-size: 14px;
  color: #212529;

  span {
    margin: 0 3px;
  }

  .min {
    font-weight: 700;
  }
`;

export const Temp: React.FC<TempProps> = ({ minTemp, maxTemp }) => {
  return (
    <TempWrapper>
      <span className='min'>{minTemp}&#176;</span>
      <span className='max'>{maxTemp}&#176;</span>
    </TempWrapper>
  );
};
