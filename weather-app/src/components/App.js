import React from "react";

const App = () => {
  return (
    <div className="App">
      <div className="weatherContainer pt-3 pb-3">
        <WeatherBody day={"Mon"} icon={"Sun"} minTemp={15} maxTemp={25} />
        <WeatherBody day={"Tue"} icon={"Mistake"} minTemp={5} maxTemp={10} />
        <WeatherBody day={"Wed"} icon={"Snowing"} minTemp={0} maxTemp={-5} />
        <WeatherBody day={"Thu"} icon={"Rain"} minTemp={12} maxTemp={14} />
        <WeatherBody day={"Fri"} icon={"Snowing"} minTemp={-10} maxTemp={-22} />
      </div>
    </div>
  );
};

export default App;
