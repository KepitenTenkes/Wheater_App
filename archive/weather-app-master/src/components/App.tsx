import React, { useState } from 'react';

// libs
import styled from 'styled-components';
import Moment from 'react-moment';

// components
import GlobalStyles from '../globalStyles';
import { SearchBar } from './SearchBar';
import WeatherBody from './WeatherBody/WeatherBody';
import { Loader } from './Loader';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { getWeather, setLoading } from 'store/actions/weatherAction';

const WeatherContainer = styled.div<{ city: string }>`
  width: 100%;
  display: ${({ city }) => (city ? undefined : 'none')};
  background: rgb(249, 157, 149);
  background: -moz-linear-gradient(
    90deg,
    rgba(249, 157, 149, 1) 20%,
    rgba(218, 107, 115, 1) 50%,
    rgba(207, 99, 103, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(249, 157, 149, 1) 20%,
    rgba(218, 107, 115, 1) 50%,
    rgba(207, 99, 103, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(249, 157, 149, 1) 20%,
    rgba(218, 107, 115, 1) 50%,
    rgba(207, 99, 103, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f99d95",endColorstr="#cf6367",GradientType=1);

  .cityName {
    display: none;
  }

  @media (min-width: 1399px) {
    width: ${({ city }) => (city ? '70%' : undefined)};
    height: 100vh;
    display: ${({ city }) => (city ? 'flex' : 'none')};
    text-align: center;
    align-items: center;
    justify-content: center;

    .cityName {
      display: block;
      position: absolute;
      top: 100px;
      text-transform: uppercase;
      letter-spacing: 5px;
      color: #fff;
      font-size: 30px;
    }
  }
`;

const App = () => {
  const [city, setCity] = useState<string>('');

  const dispatch = useDispatch();
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const loading = useSelector((state: RootState) => state.weather.loading);

  const searchCity = async (city: string) => {
    setCity(city);
    dispatch(getWeather(city));
    dispatch(setLoading());
  };

  return (
    <>
      <GlobalStyles />
      {loading ? (
        <div>
          <Loader message={'Loading data...'} />
        </div>
      ) : (
        <div className='App'>
          <React.Fragment>
            <SearchBar city={city} searchCity={searchCity} />
          </React.Fragment>
          <WeatherContainer city={city} className='pt-3 pb-3'>
            {city && <h5 className='cityName'>{city}</h5>}
            {weatherData &&
              weatherData.map(weather => {
                return (
                  <WeatherBody
                    day={<Moment format='dddd'>{weather.datetime}</Moment>}
                    icon={weather.weather.code}
                    minTemp={weather.min_temp}
                    maxTemp={weather.max_temp}
                    description={weather.description}
                    key={weather.datetime}
                  />
                );
              })}
          </WeatherContainer>
        </div>
      )}
    </>
  );
};

export default App;
