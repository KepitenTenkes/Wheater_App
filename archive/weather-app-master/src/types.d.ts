type SearchBarProps = {
  city: string;
  searchCity: (city: string) => Promise<void>;
};

type TempProps = {
  minTemp: number;
  maxTemp: number;
  description: string;
};

type IconProps = {
  icon: number;
};

type DaysProps = {
  day: any;
};

type LoaderProps = {
  message: string;
};

type WeatherBodyProps = TempProps & IconProps & DaysProps;
