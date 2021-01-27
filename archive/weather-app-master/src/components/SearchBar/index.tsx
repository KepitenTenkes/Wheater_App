import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBarWrapper = styled.div<SearchBarProps>`
  width: 100%;
  height: ${props => (props.city ? '30vh' : '100vh')};
  text-align: center;
  background-image: url('https://images.unsplash.com/photo-1559060017-445fb9722f2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  input {
    border: 0;
    height: 38px;
    margin-right: 15px;
    text-align: center;
    border-bottom: 1px solid #17a2b8;
    margin-bottom: 10px;
  }

  input:focus {
    outline: 0;
  }

  .SearchBarChilds {
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
  }

  .SearchBarChilds .formSearchCity {
    display: flex;
  }

  @media (min-width: 1399px) {
    & {
      width: ${({ city }) => (city ? '30%' : '100%')};
      height: 100vh;
    }
  }
`;

export const SearchBar: React.FC<SearchBarProps> = ({ city, searchCity }) => {
  const [value, setValue] = useState(city);

  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    value === '' ? alert('City can not be empty') : searchCity(value);
  };

  return (
    <SearchBarWrapper city={city} searchCity={searchCity}>
      <div className='SearchBarChilds'>
        <h5 className='text-white'>Search weather on your city</h5>

        <form onSubmit={handleFormSubmit}>
          <input
            type='text'
            name='city'
            id='inputSearchCity'
            onChange={onChange}
            placeholder={'Search City...'}
          />
          <button type='submit' className='btn btn-outline-info text-white'>
            Search
          </button>
        </form>
      </div>
    </SearchBarWrapper>
  );
};
