export const GET_WEATHER = 'GET_WEATHER';
export const SET_LOADING = 'SET_LOADING';

export interface Weather {
  datetime: string;
  description: string;
  weather: { code: number };
  max_temp: number;
  min_temp: number;
}

export interface WeatherState {
  data: Weather[] | null;
  loading: boolean;
}

interface GetWeatherAction {
  type: typeof GET_WEATHER;
  payload: Weather[];
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
}

export type WeatherAction = GetWeatherAction | SetLoadingAction;
