import axios from "axios";

const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/";

const getAll = async () => {
  try {
    return await axios.get(`${baseUrl}all`);
  } catch (error) {
    console.log("Error while retrieving all countries", error);
  }
};

const getByName = async (search) => {
  try {
    console.log("Search for:", search);
    return await axios.get(`${baseUrl}name/${search}`);
  } catch (error) {
    console.log("Error while searching for country by name", error);
  }
};

export default { getAll, getByName };
