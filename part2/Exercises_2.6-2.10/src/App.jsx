import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newNumber, setNewNumber] = useState('')
  const [newName, setNewName] = useState('')
  const [filter, setFilter] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if(persons.some(p => p.name.toLowerCase() === newName.toLowerCase()) && persons.some(p => p.number === newNumber)){
      window.alert(`${newName} with number ${newNumber} is already added to the phonebook`)
    }else{
      setPersons([...persons, { name: newName, number: newNumber}])
      setNewName('')
      setNewNumber('')
    }
  }

  const inputChangeName = (event) => {
    setNewName(event.target.value)
  }

  const inputChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const inputChangeFilter = (event) => {
    setFilter(event.target.value)
  }

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter shown with <input value={filter} onChange={inputChangeFilter}></input>
      </div>
      <h2>Add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={inputChangeName}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={inputChangeNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>
          {filteredPersons.map((person, index) => 
            <li key={index}>{person.name} {person.number}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default App
