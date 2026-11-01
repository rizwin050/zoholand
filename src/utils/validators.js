const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE = /^[+()\d\s-]{8,16}$/;

export function validateEnquiry(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!EMAIL.test(values.email.trim())) errors.email = 'Please enter a valid email address.';
  if (!PHONE.test(values.phone.trim())) errors.phone = 'Please enter a valid phone number.';
  return errors;
}
