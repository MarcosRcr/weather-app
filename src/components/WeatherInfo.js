export default function WeatherInfo({ weather }) {
  return (
    <div className="flex flex-col bg-amber-400 w-64 p-7 justify-end items-center text-center rounded-b">
      <div>{weather?.location.name}</div>
      <div>{weather?.location.country}</div>
      <div>
        <div>
          <img
            src={`http:${weather?.current.condition.icon}`}
            className=" w-30"
            alt={weather?.current.condition.text}
          />
        </div>
        <div>
          <div>{weather?.current.condition.text}</div>
          <div>{weather?.current.temp_c}°</div>
        </div>
      </div>
    </div>
  );
}
