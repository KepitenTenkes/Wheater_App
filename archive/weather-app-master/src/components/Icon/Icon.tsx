import React from 'react';
import styled from 'styled-components';
import Cloudy from '../../assets/cloudy.svg';
import Rain from '../../assets/rain.svg';
import Snowing from '../../assets/snowing.svg';
import Thermometer from '../../assets/thermometer.svg';

const IconWrapper = styled.div`
  img {
    width: 50px;
    margin: 0 auto;
  }
`;

const renderIcon = (icon: number) => {
  switch (icon) {
    case 801:
      return <img className='icon' src={Cloudy} alt={Cloudy} />;

    case 802:
      return <img className='icon' src={Cloudy} alt={Cloudy} />;

    case 803:
      return <img className='icon' src={Cloudy} alt={Cloudy} />;

    case 200:
      return <img className='icon' src={Rain} alt={Rain} />;

    case 201:
      return <img className='icon' src={Rain} alt={Rain} />;

    case 202:
      return <img className='icon' src={Rain} alt={Rain} />;

    case 600:
      return <img className='icon' src={Snowing} alt={Snowing} />;

    case 601:
      return <img className='icon' src={Snowing} alt={Snowing} />;

    case 602:
      return <img className='icon' src={Snowing} alt={Snowing} />;

    case 610:
      return <img className='icon' src={Snowing} alt={Snowing} />;

    default:
      return <img className='icon' src={Thermometer} alt={Thermometer} />;
  }
};

export const Icon: React.FC<IconProps> = ({ icon }) => {
  return <IconWrapper>{renderIcon(icon)}</IconWrapper>;
};
