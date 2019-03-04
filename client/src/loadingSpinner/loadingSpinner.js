import React from "react";
import "./loadingSpinner.css";

const LoadingSpinner = () => (
    // Loading Spinner from - https://loading.io/css/
    <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
    </div>
);

export default LoadingSpinner;
