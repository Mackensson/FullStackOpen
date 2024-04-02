const Form = ({
  newName,
  newNumber,
  onNameChange,
  onNumberChange,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit}>
      Name: <InputField value={newName} onChange={onNameChange}></InputField>
      <br></br>
      Number:{" "}
      <InputField value={newNumber} onChange={onNumberChange}></InputField>
      <br></br>
      <Button></Button>
    </form>
  );
};

const InputField = ({ value, onChange }) => {
  return <input value={value} onChange={onChange}></input>;
};

const Button = () => {
  return <button type="submit">Add</button>;
};

export default Form;
