import React, { useState } from 'react';
import StepOne from './pages/StepOne';
import StepTwo from './pages/StepTwo';
import { validateStep1, validateStep2 } from './utils/validation';
import { registerUser } from './services/registerService';

const App = () => {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    const validationErrors = validateStep1(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateStep2(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      try {
        const payload = {
          fullName: values.fullName,
          email: values.email,
          phone: values.phone,
          password: values.password,
        };
        await registerUser(payload);
        setSubmitted(true);
      } catch (err) {
        alert('Registration failed!');
      } finally {
        setLoading(false);
      }
    }
  };

  if (submitted)
    return (
      <div className="form-container">
        <h2>🎉 Registration Successful!</h2>
      </div>
    );

  return (
    <div className="form-container">
      <h1>Registration Form</h1>
      <h2>Step {step} of 2</h2>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: step === 1 ? '50%' : '100%' }}
        ></div>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 ? (
          <>
            <StepOne values={values} errors={errors} handleChange={handleChange} />
            <button
              type="button"
              onClick={handleNext}
              disabled={Object.keys(validateStep1(values)).length > 0 || loading}
            >
              Next
            </button>
          </>
        ) : (
          <>
            <StepTwo values={values} errors={errors} handleChange={handleChange} />
            <div style={{ display: 'flex', gap: '10px' }}>
              <button type="button" onClick={handleBack} disabled={loading}>
                Back
              </button>
              <button type="submit" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default App;
