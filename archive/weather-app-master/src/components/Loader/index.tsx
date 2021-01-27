import React from 'react';
import styled from 'styled-components';
import Spinner from '../../assets/Spinner.gif';

const LoaderWrapper = styled.div`
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);

  img {
    width: 100px;
    height: 100px;
  }
`;

export const Loader: React.FC<LoaderProps> = ({ message }) => {
  return (
    <LoaderWrapper className='Loader'>
      <img src={Spinner} alt='Spinner' />
      <h6 className='text-center-mt-3'>{message}</h6>
    </LoaderWrapper>
  );
};
