
import React from 'react';
import InputField from '../components/InputField';

const StepTwo = ({ values, errors, handleChange }) => (
  <>
    <InputField label="Password" name="password" type="password" value={values.password} onChange={handleChange} error={errors.password} />
    <InputField label="Confirm Password" name="confirmPassword" type="password" value={values.confirmPassword} onChange={handleChange} error={errors.confirmPassword} />
  </>
);

export default StepTwo;
