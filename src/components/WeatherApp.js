import { useEffect, useState } from "react";
import WeatherForm from "./weatherForm";
import WeatherInfo from "./WeatherInfo";

export default function WeatherApp() {
  const [weather, SetWeather] = useState(null);

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = `Weather | In ${weather?.location.name ?? ""}`;
  }, [weather]);

  async function loadInfo(city = "london") {
    try {
      const request = await fetch(
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
      );

      const json = await request.json();

      SetWeather(json);

      console.log(json);
    } catch (error) {}
  }

  function handleChangeCity(city) {
    SetWeather(null);
    loadInfo(city);
  }

  return (
    <div className="flex flex-col justify-center items-center mt-24">
      <WeatherForm onChangeCity={handleChangeCity} />
      <WeatherInfo weather={weather} />
    </div>
  );
}
