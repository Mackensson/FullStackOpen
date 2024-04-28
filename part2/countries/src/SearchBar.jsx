const SearchBar = ({ text, value, inputOnChange, placeholder }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <h4>{text}</h4>
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
