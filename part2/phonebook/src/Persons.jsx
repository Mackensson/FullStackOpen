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

  export default Persons;