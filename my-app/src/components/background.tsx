'use client';
import { useState } from 'react';
import './background.css';

export default function Background() {
  const [weather, setWeather] = useState<string | null>(null);

  const fetchWeather = async () => {
    try {
      const res = await fetch('https://wttr.in/Tsukuba?format=j1');
      const data = await res.json();
      const condition = data.current_condition[0].weatherDesc[0].value;
      setWeather(condition);
    } catch (err) {
      console.error('天気取得に失敗:', err);
    }
  };

  const getWeatherClass = () => {
    if (!weather) return 'weather-default';
    if (weather.includes('Sunny')) return 'weather-clear';
    if (weather.includes('cloud') || weather.includes('Cloud')) return 'weather-cloudy';
    if (weather.includes('rain') || weather.includes('Rain')) return 'weather-rainy';
    if (weather.includes('snow') || weather.includes('Snow')) return 'weather-snow';
    return 'weather-default';
  };

  return (
    <div className="relative w-full h-screen">
      {/* ボタンは relative 上で z-index 高くして表示 */}
      <button
        onClick={fetchWeather}
        className="absolute bottom-4 left-4 z-20 px-3 py-2  text-black shadow-md"
      >
        天気で背景を変える
      </button>

      {/* 背景 */}
      <div className={`area fixed inset-0 w-full h-full ${getWeatherClass()} -z-10`}>
        <ul className="circles relative w-full h-full overflow-hidden">
          <li className="circle circle1"></li>
          <li className="circle circle2"></li>
          <li className="circle circle3"></li>
          <li className="circle circle4"></li>
          <li className="circle circle5"></li>
          <li className="circle circle6"></li>
          <li className="circle circle7"></li>
          <li className="circle circle8"></li>
          <li className="circle circle9"></li>
          <li className="circle circle10"></li>
        </ul>
      </div>
    </div>
  );
}
