import React from "react";

const ErrorForm = ({ alert }) => {
  return (
    <div className="error-card">
      <p>{alert}</p>
    </div>
  );
};

export default ErrorForm;
