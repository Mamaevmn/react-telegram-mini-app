import React, { useEffect, useState } from 'react';
import { getWeathrData } from '../../utils/api';

import styles from './WeatherScreen.module.css'

function WeatherScreen() {
  const [weather, setWeather] = useState(null);

  const fetchWeather = () => {
    getWeathrData('Saint-Petersburg').then(res => {
      setWeather(res);
    }).catch((error) => console.error('Error fetching weather:', error));
  };

  useEffect(() => {
    fetchWeather()
  }, [])

  return (
    <div>
      <h2>
        Погода в Санкт-Петербурге
      </h2>
      {weather && weather?.current?.temp_c && (
        <div>
          <h3 className={styles.temperature}>
            { weather?.current?.temp_c } °C
          </h3>
        </div>
      )}
    </div>
  );
}

export default WeatherScreen;