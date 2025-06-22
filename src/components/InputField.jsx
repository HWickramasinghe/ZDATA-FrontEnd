// src/components/InputField.jsx
import React from 'react';

const InputField = ({ label, type, name, value, onChange, error, placeholder, required }) => (
  <div className="form-group">
    <label htmlFor={name}>
      {label}
      {required && <span className="required-star"> *</span>}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={error ? 'input-error' : ''}
    />
    {error && <p className="error-text">{error}</p>}
  </div>
);

export default InputField;
