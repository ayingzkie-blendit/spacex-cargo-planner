import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/Alert.css";
const Alert = ({ type, message }) => {
  const [visible, setVisible] = useState(true);

  const messageTypes =
    type === "success"
      ? "Success!"
      : type === "error"
      ? "Error!"
      : type === "warning"
      ? "Warning"
      : null;

  const display = visible ? "block" : "none";

  return (
    <div className={`alert ${type}`} style={{ display: display }}>
      <span
        className="closebtn"
        onClick={(btn) => {
          setVisible(false);
        }}
      >
        &times;
      </span>
      <strong>{messageTypes}</strong>
      {message}
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.oneOf(["success", "error", "warning"]),
  message: PropTypes.string.isRequired,
};

export default Alert;
