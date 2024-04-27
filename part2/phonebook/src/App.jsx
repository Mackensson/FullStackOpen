import { useState, useEffect } from "react";
import personService from "./services/persons";
import Filter from "./Filter";
import Form from "./Form";
import Persons from "./Persons";
import Notification from "./Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newNumber, setNewNumber] = useState("");
  const [newName, setNewName] = useState("");
  const [filter, setFilter] = useState("");
  const [notification, setMessage] = useState("");

  useEffect(() => {
    personService.getAll().then((jsonData) => {
      console.log(jsonData);
      setPersons(jsonData);
    });
  }, []);

  const inputChangeName = (event) => {
    setNewName(event.target.value);
  };

  const inputChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const inputChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    // If no data was provided.
    if (!newName || !newNumber) {
      console.log("No data was provided.");
      setMessage("Warning: Please enter both name and number");
      return;
    }

    // If user tries to add duplicate data.
    if (
      persons.some((p) => p.name.toLowerCase() === newName.toLowerCase()) &&
      persons.some((p) => p.number === newNumber)
    ) {
      console.log("Duplicate data was found.");
      setMessage(
        `Warning: ${newName} with number ${newNumber} is already added to the phonebook`
      );
      return;
    }

    // If user wants to update a number of a person.
    if (persons.some((p) => p.name.toLowerCase() === newName.toLowerCase())) {
      if (
        window.confirm(
          `${newName} is already added to the phonebook, replace the old number with a new one?`
        )
      ) {
        const person = persons.find(
          (p) => p.name.toLowerCase() === newName.toLowerCase()
        );
        const updatedPerson = {
          id: person.id,
          name: newName,
          number: newNumber,
        };
        const updatedPersons = persons.filter((p) => p.id !== person.id);
        personService
          .update(person.id, updatedPerson)
          .then((jsonData) => {
            console.log(jsonData, "Updated");
            setPersons([...updatedPersons, jsonData]);
            setMessage(
              `Success: Updated ${newName} with new number ${newNumber}`
            );
          })
          .catch((error) => {
            console.log(error);
            setMessage(`Error:${newName} was already removed from the server.`);
            setPersons([...updatedPersons]);
          });
        setNewName("");
        setNewNumber("");
      }
    }
    // Creating new entry.
    else {
      const personObject = {
        name: newName,
        number: newNumber,
      };
      personService.create(personObject).then((jsonData) => {
        console.log(jsonData, "Added");
        setPersons([...persons, jsonData]);
        setMessage(`Success: Added ${newName} with number ${newNumber}`);
      });
      setNewName("");
      setNewNumber("");
    }
  };

  const onDelete = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      const updatedPersons = persons.filter((p) => p.id !== id);
      personService
        .remove(id)
        .then((jsonData) => {
          console.log(jsonData, "Removed");
          setPersons(updatedPersons);
          setMessage(`Success:${name} was removed from the phonebook`);
        })
        .catch((error) => {
          console.log(error);
          setMessage(`Error:${name} was already removed from the server.`);
          setPersons([...updatedPersons]);
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification
        message={notification}
        setMessage={setMessage}
      ></Notification>
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
