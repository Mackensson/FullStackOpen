import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./Filter";
import Form from "./Form";

const Persons = ({ listOfPersons }) => {
  return (
    <div>
      <ul>
        {listOfPersons.map((person, index) => (
          <Person
            key={index}
            name={person.name}
            number={person.number}
          ></Person>
        ))}
      </ul>
    </div>
  );
};

const Person = ({ id, name, number }) => {
  return (
    <div>
      <li key={id}>
        {name} {number}
      </li>
    </div>
  );
};

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newNumber, setNewNumber] = useState("");
  const [newName, setNewName] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);
  console.log("render", persons.length, "notes");

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      persons.some((p) => p.name.toLowerCase() === newName.toLowerCase()) &&
      persons.some((p) => p.number === newNumber)
    ) {
      window.alert(
        `${newName} with number ${newNumber} is already added to the phonebook`
      );
    } else {
      setPersons([...persons, { name: newName, number: newNumber }]);
      setNewName("");
      setNewNumber("");
    }
  };

  const inputChangeName = (event) => {
    setNewName(event.target.value);
  };

  const inputChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const inputChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        text="Filter shown with: "
        inputValue={filter}
        inputOnChange={inputChangeFilter}
      ></Filter>
      <h2>Add a new</h2>
      <Form
        newName={newName}
        newNumber={newNumber}
        onNameChange={inputChangeName}
        onNumberChange={inputChangeNumber}
        onSubmit={handleSubmit}
      ></Form>
      <h2>Numbers</h2>
      <Persons listOfPersons={filteredPersons}></Persons>
    </div>
  );
};

export default App;
