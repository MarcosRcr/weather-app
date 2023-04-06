import { useState } from "react";

export default function WeatherForm({ onChangeCity }) {
  const [city, setCity] = useState("");

  function onChange(e) {
    const value = e.target.value;
    if (value !== "") {
      setCity(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    onChangeCity(city);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className=" bg-slate-800 text-neutral-100 cursor-pointer border-cyan-400 w-64 h-9 rounded-t hover:text-neutral-400" type="text" onChange={onChange} value="Ingrese la ciudad"/>
    </form>
  );
}
