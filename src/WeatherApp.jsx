import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city:"delhi",
        feelsLike: 24.86,
        humidity: 24,
        temp: 25.62,
        tempMax: 26.05,
        tempMin: 25.62,
        weather: "haze",
    });

    let updateInfo = (newinfo) => {
        setWeatherInfo(newinfo);
    }
    return(
        <div style={{textAlign:"center"}}><h2>Weather App by Abhishek</h2>
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
        </div>
    );
}