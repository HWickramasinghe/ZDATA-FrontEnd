// src/utils/validation.js

export const validateStep1 = (values) => {
  const errors = {};

  // Full Name validation
  if (!values.fullName || values.fullName.trim() === '') {
    errors.fullName = 'Full Name is required';
  }

  // Email validation
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Invalid email format';
  }

  // Phone validation (optional)
  if (values.phone) {
    const phoneRegex = /^\+94[1-9][0-9]{8}$/;
    if (!phoneRegex.test(values.phone)) {
      errors.phone = 'Phone must start with +94 and have 9 digits (no leading 0)';
    }
  }

  return errors;
};

export const validateStep2 = (values) => {
  const errors = {};

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Please confirm your password';
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return errors;
};
