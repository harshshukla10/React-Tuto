import Card from "@mui/material/Card";
import "./InfoBox.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

export default function InfoBox({info}) {
  let IMG_URL =
    "https://images.unsplash.com/photo-1542923910-f391dea9f674?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
//   let info = {
//     city: "Delhi",
//     feels_like: 24.84,
//     temp: 23.5,
//     humidity: 47,
//     tempMin: 44,
//     tempMax: 48,
//     weather: "haze",
//   };
  return (
    <div className="InfoBox">
      <h1>Weather Info</h1>
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={IMG_URL}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <div>Temperature:{info.temp}&deg;C</div>
              <div>Humidity:{info.humidity}</div>
              <div>Feels Like:{info.feels_like}&deg;C</div>
              <div>Min temp:{info.temp_min}&deg;C</div>
              <div>Max temp:{info.temp_max}&deg;C</div>
              <div>
                Weather:{info.weather} Lorem ipsum dolor sit, amet consectetur
                adipisicing elit.
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
