const Filter = ({ text, inputValue, inputOnChange }) => {
  return (
    <div>
      {text} <input value={inputValue} onChange={inputOnChange}></input>
    </div>
  );
};

export default Filter;
