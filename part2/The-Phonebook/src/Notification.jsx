import { useEffect, useState } from "react";

const Notification = ({ message, setMessage }) => {

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setMessage("");
      }, 4000);
      return () => clearTimeout(timer);
    }
  });

  const [isVisible, setVisible] = useState(false);

  let backgroundColor = "";
  let parts = message.split(":")

  // Set styles based on user action.
  switch (parts[0]) {
    case "Success":
      backgroundColor = "lightgreen";
      break;
    case "Warning":
      backgroundColor = "yellow";
      break;
    case "Error":
      backgroundColor = "lightcoral";
      break;
    default:
      backgroundColor = "lightgrey";
  }

  const defaultStyle = {
    background: backgroundColor,
    color: "black",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };

  if (!isVisible) {
    return null;
  }

  return <div style={defaultStyle}>{parts[1]}</div>;
};

export default Notification;
