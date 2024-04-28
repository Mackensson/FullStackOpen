const SearchBar = ({ text, value, inputOnChange, placeholder }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <h3>{text}</h3>
      <input
        style={{ marginLeft: 5 }}
        type="text"
        value={value}
        onChange={inputOnChange}
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default SearchBar;
