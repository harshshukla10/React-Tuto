import Search from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feels_like: 24.84,
    temp: 23.5,
    humidity: 47,
    tempMin: 44,
    tempMax: 48,
    weather: "haze",
  });
  let updateInfo=(newInfo)=>{
    setWeatherInfo(newInfo);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather app by Harsh</h2>
      <Search updateInfo={updateInfo}></Search>
      <InfoBox info={weatherInfo}></InfoBox>
    </div>
  );
}
