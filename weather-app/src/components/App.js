import { render } from "@testing-library/react";
import React from "react";
import "./App.css";
import weather from "../apis/api";
import WeatherBody from "./WeatherBody/WeatherBody";
import Loader from "./Loader/Loader";
import SearchBar from "./SearchBar/SearchBar";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      temp: [],
      city: null,
      isLoaded: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoaded: true });
  }

  searchCity = async (city) => {
    await weather
      .get("daily?city=${city}&key=3883f69ab25f46dc92cdf2b5d66a1517")
      .then((res) => {
        const temp = res.data.data;
        const city = res.data.city_name;

        this.setState({
          temp,
          city,
          isLoaded: true,
        });
      });
  };

  render() {
    // Methods

    const minTemp = this.state.temp.map((el) => {
      return parseInt(el.low_temp);
    });

    const maxTemp = this.state.temp.map((el) => {
      return parseInt(el.max_temp);
    });

    const icon = this.state.temp.map((el) => {
      return el.weather.code;
    });

    const description = this.state.temp.map((el) => {
      return el.weather.description;
    });

    //Loader

    if (!this.state.isLoaded) {
      return <Loader msg={"Loading..."} />;
    }

    return (
      <div className="App">
        <React.Fragment>
          <SearchBar city={this.state.city} searchCity={this.searchCity} />
        </React.Fragment>
        <div className="weatherContainer pt-3 pb-3">
          <h5 className="cityName">{this.state.city}</h5>
          <WeatherBody day={"Mon"} icon={"Sun"} minTemp={15} maxTemp={25} />
          <WeatherBody day={"Tue"} icon={"Mistake"} minTemp={5} maxTemp={10} />
          <WeatherBody day={"Wed"} icon={"Snowing"} minTemp={0} maxTemp={-5} />
          <WeatherBody day={"Thu"} icon={"Rain"} minTemp={12} maxTemp={14} />
          <WeatherBody
            day={"Fri"}
            icon={"Snowing"}
            minTemp={-10}
            maxTemp={-22}
          />
        </div>
      </div>
    );
  }
}

export default App;
