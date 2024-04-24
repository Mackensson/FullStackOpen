import { useState, useEffect } from "react";
import Filter from "./Filter";
import Form from "./Form";
import personService from "./services/persons";

const Persons = ({ listOfPersons, onDelete}) => {
  return (
    <div>
      <ul>
        {listOfPersons.map((person, index) => (
          <Person
            key={index}
            name={person.name}
            number={person.number}
            onDelete={() => onDelete(person.id, person.name)}
          ></Person>
        ))}
      </ul>
    </div>
  );
};

const Person = ({ id, name, number, onDelete }) => {
  return (
    <div>
      <li key={id}>
        {name} {number}
        <button onClick={onDelete}>delete</button>
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
    personService
    .getAll()
    .then(jsonData => {
      console.log(jsonData)
      setPersons(jsonData)
    })
  },[]);

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!newName || !newNumber) {
      window.alert("Please enter both name and number");
      return;
    }

    if (
      persons.some((p) => p.name.toLowerCase() === newName.toLowerCase()) &&
      persons.some((p) => p.number === newNumber)
    ) {
      window.alert(
        `${newName} with number ${newNumber} is already added to the phonebook`
      );
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }
        personService
        .create(personObject)
        .then(jsonData => {
          console.log(jsonData, "Added");
          setPersons([...persons, jsonData]);
        })
        setNewName("")
        setNewNumber("")
    }};

    const onDelete = (id, name) => {
      if (window.confirm(`Delete ${name}?`)) {
        personService
          .remove(id)
          .then(jsonData => {
            console.log(jsonData, "Removed");
            const updatedPersons = persons.filter((person) => person.id !== id);
            setPersons(updatedPersons);
          })
      }
    }

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
      <Persons listOfPersons={filteredPersons} onDelete={onDelete}></Persons>
    </div>
  );
};

export default App;