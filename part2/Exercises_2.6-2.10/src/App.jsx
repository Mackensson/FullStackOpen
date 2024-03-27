import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '007-007-1337'}
  ]) 
  const [newNumber, setNewNumber] = useState('')
  const [newName, setNewName] = useState('')

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

  return (
    <div>
      <div>debug: {newName}</div>
      <div>debug: {newNumber}</div>
      <h2>Phonebook</h2>
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
          {persons.map((person, index) => 
            <li key={index}>{person.name} {person.number}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default App
