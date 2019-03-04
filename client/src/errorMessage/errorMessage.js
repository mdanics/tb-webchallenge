import React from "react";
import "./errorMessage.css";

const ErrorMessage = (props) => (
    <div className="error">
        Error: {props.message}
    </div>
);

export default ErrorMessage;
