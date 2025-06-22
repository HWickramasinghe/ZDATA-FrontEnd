import React from 'react';
import InputField from '../components/InputField';

const StepOne = ({ values, errors, handleChange }) => (
  <>
    <InputField
      label="Full Name"
      name="fullName"
      type="text"
      value={values.fullName}
      onChange={handleChange}
      error={errors.fullName}
      placeholder="Enter your full name"
      required={true}
    />

    <InputField
      label="Email"
      name="email"
      type="email"
      value={values.email}
      onChange={handleChange}
      error={errors.email}
      placeholder="Enter your email"
      required={true}
    />

    <InputField
      label="Phone Number"
      name="phone"
      type="text"
      value={values.phone}
      onChange={handleChange}
      error={errors.phone}
      placeholder="+94712345678"
      required={false} // Optional field
    />
  </>
);

export default StepOne;
