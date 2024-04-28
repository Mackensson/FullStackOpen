const CountryList = ({ listOfCountries }) => {
  console.log(listOfCountries);
  return (
    <div>
      {listOfCountries.map((country) => (
        <p key={country.cca2}>{country.name.common}</p>
      ))}
    </div>
  );
};

export default CountryList;
