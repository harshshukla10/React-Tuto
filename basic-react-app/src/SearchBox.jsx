import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./searchBox.css";
import React, { useState } from "react";



export default function SearchBox({updateInfo}) {
  let [city, setCity] = useState("");
  let API_URL="https://api.openweathermap.org/data/2.5/weather";
  let API_KEY="cc73c619b300742b1bfa720cf2168d89"
  let getWeatherInfo=async()=>{
    let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse=await response.json();
    console.log(jsonResponse);

    let result={
      city:city,
      temp:jsonResponse.main.temp,
      temp_max:jsonResponse.main.temp_max,
      temp_min:jsonResponse.main.temp_min,
      feels_like:jsonResponse.main.feels_like,
      humidity:jsonResponse.main.humidity,
      weather:jsonResponse.weather[0].description,
  
    }
    console.log(result);
    return result;
  };

  let handleChange =  (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log(city);
    setCity("");
    let newInfo =await getWeatherInfo();
    updateInfo(newInfo);
  };

  return (
    <div className="searchBox">
      <h1>Search for the weather!</h1>
      <form onSubmit={handleSubmit}>
        <TextField
         
          label="Enter City"
          variant="outlined"
          required
          value={city}       
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
