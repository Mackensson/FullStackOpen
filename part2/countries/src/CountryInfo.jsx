const CountryInfo = ({ country }) => {
  console.log(country);
  return (
    <div>
      <h1>{country.name.common}</h1>
      <Capital listOfCapitals={country.capital}></Capital>
      <p>Area: {country.area}</p>
      <h4>Languages:</h4>
      <Languages listofLanguages={country.languages}></Languages>
      <image style={{ fontSize: 250 }}>{country.flag}</image>
    </div>
  );
};

const Capital = ({ listOfCapitals }) => {
  console.log("Capitals:", listOfCapitals);
  return (
    <div style={{display: "flex"}}>
      <p style={{marginRight: 2}}>Capital: </p>
      {listOfCapitals.map((capital) => (
        <p key={capital}>{capital}</p>
      ))}
    </div>
  );
};

const Languages = ({ listofLanguages }) => {
  console.log("Languages:", listofLanguages);
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

export default CountryInfo;
