const CountryList = ({ listOfCountries, buttonClickEvent }) => {
  console.log(listOfCountries);
  return (
    <div>
      {listOfCountries.map((country) => (
        <div
          key={country.name.common}
          style={{ display: "flex", alignItems: "center" }}
        >
          <p style={{ marginRight: 5 }}>{country.name.common}</p>
          <button onClick={() => buttonClickEvent(country.name.common)}>show</button>
        </div>
      ))}
    </div>
  );
};

export default CountryList;
