import React, { useState, useEffect } from "react";

const CountryInfo = ({ country, getWeatherFunc, getWeatherIconFunc }) => {
  console.log("Country:", country);

  const [weatherData, setWeatherData] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);

  useEffect(() => {
    getWeatherFunc(country.capitalInfo.latlng[0], country.capitalInfo.latlng[1])
      .then((jsonData) => {
        setWeatherData(jsonData.data);
      });
  }, []);

  useEffect(() => {
    if (weatherData && weatherData.weather[0]){
    getWeatherIconFunc(weatherData.weather[0].icon)
      .then((jsonData) => {
        console.log(jsonData);
        setWeatherIcon(jsonData.config.url);
      });
  }}, [weatherData]);

  return (
    <div>
      <h1>{country.name.common}</h1>
      <Capital listOfCapitals={country.capital}></Capital>
      <p>Area: {country.area}</p>
      <h4>Languages:</h4>
      <Languages listofLanguages={country.languages}></Languages>
      <image style={{ fontSize: 250 }}>{country.flag}</image>
      {weatherData && <Weather capital={country.capital[0]} weatherObj={weatherData} weatherIcon={weatherIcon}></Weather>}
    </div>
  );
};

const Capital = ({ listOfCapitals }) => {
  return (
    <div style={{ display: "flex" }}>
      <p style={{ marginRight: 2 }}>Capital: </p>
      {listOfCapitals.map((capital) => (
        <p key={capital}>{capital}</p>
      ))}
    </div>
  );
};

const Languages = ({ listofLanguages }) => {
  return (
    <div>
      <ul>
        {Object.keys(listofLanguages).map((languageCode) => (
          <li key={languageCode}>{listofLanguages[languageCode]}</li>
        ))}
      </ul>
    </div>
  );
};

const Weather = ({ capital, weatherObj, weatherIcon }) => {
  const tempCelcius = (weatherObj.main.temp - 273.15).toFixed(2);
  return (
    <div>
      <h2>Weather in {capital}</h2>
      <p>Temperature: {tempCelcius} Celcius</p>
      <img src={weatherIcon} alt="Weather Icon"></img>
      <p>Wind: {weatherObj.wind.speed} m/s</p>
    </div>
  );
};

export default CountryInfo;