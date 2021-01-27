import React from 'react';
import styled from 'styled-components';

const DaysWrapper = styled.div`
  color: #b8b8b8;
  margin: 15px 0;
`;

export const Days: React.FC<DaysProps> = ({ day }) => {
  return <DaysWrapper>{day}</DaysWrapper>;
};
