export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(String(email).toLowerCase());
};

export const isValidPhone = (phone) => {
  const phoneRegex = /^[0-9+()\- ]{7,15}$/;
  return phoneRegex.test(String(phone));
};

export const isNotEmpty = (val) => {
  return val !== null && val !== undefined && String(val).trim().length > 0;
};

export const validateContactForm = (formData) => {
  const errors = {};
  if (!isNotEmpty(formData.name)) {
    errors.name = 'Full name is required';
  }
  if (!isNotEmpty(formData.email)) {
    errors.email = 'Email address is required';
  } else if (!isValidEmail(formData.email)) {
    errors.email = 'Please provide a valid email address';
  }
  if (!isNotEmpty(formData.subject)) {
    errors.subject = 'Subject is required';
  }
  if (!isNotEmpty(formData.message)) {
    errors.message = 'Message cannot be empty';
  }
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export const validateRegistrationForm = (formData) => {
  const errors = {};
  if (!isNotEmpty(formData.fullName)) {
    errors.fullName = 'Full name is required';
  }
  if (!isNotEmpty(formData.email)) {
    errors.email = 'Email address is required';
  } else if (!isValidEmail(formData.email)) {
    errors.email = 'Please provide a valid email address';
  }
  if (!isNotEmpty(formData.phone)) {
    errors.phone = 'Phone number is required';
  } else if (!isValidPhone(formData.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }
  if (!isNotEmpty(formData.password)) {
    errors.password = 'Password is required';
  } else if (formData.password.length < 6) {
    errors.password = 'Password must be at least 6 characters long';
  }
  if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
