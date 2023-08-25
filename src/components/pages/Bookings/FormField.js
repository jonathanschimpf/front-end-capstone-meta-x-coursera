import React from 'react';

const FormField = ({ label, htmlFor, hasError, errorMessage, children }) => (
  <div className={`form-field ${hasError ? 'has-error' : ''}`}>
    <label htmlFor={htmlFor}>{label}</label>
    {children}
    {hasError && <div className="error-message">{errorMessage}</div>}
  </div>
);

export default FormField;

