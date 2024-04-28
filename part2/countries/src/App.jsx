import { useState, useEffect } from "react";
import countiresAPI from "./services/countriesAPI";
import SearchBar from "./SearchBar";
import CountryInfo from "./CountryInfo";
import CountryList from "./CountryList";

const App = () => {
  const [newSearch, setSearch] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    countiresAPI.getAll().then((jsonData) => {
      console.log("Api Countries:", jsonData);
      setCountries(jsonData.data);
    });
  }, []);

  const inputChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  let filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(newSearch.toLowerCase())
  );

  const showCountryInfo = (countryName) => {
    countiresAPI.getByName(countryName).then((jsonData) => {
      setSearch(jsonData.data.name.common);
    });
  };

  const renderView = () => {
    switch (true) {
      case newSearch.trim() === "":
        return null;
      case filteredCountries.length === 0:
        return <p>No country found.</p>;
      case filteredCountries.length > 10:
        return <p>Too many countries, please specify.</p>;
      case filteredCountries.length === 1:
        return <CountryInfo country={filteredCountries[0]} />;
      case filteredCountries.length > 1 && filteredCountries.length <= 10:
        return (
          <CountryList
            listOfCountries={filteredCountries}
            buttonClickEvent={showCountryInfo}
          ></CountryList>
        );
      default:
        <p>Unexpected behaviour</p>;
    }
  };

  return (
    <div>
      <SearchBar
        text={"Find Countries:"}
        value={newSearch}
        inputOnChange={inputChangeSearch}
        placeholder="Search by name.."
      ></SearchBar>
      {renderView()}
    </div>
  );
};

export default App;
