import { useCallback, useState } from 'react';
import { validateEnquiry } from '../utils/validators';
import { buildMailtoUrl } from '../utils/mailto';
import { isEmailConfigured, sendEnquiry } from '../services/emailService';

const INITIAL = {
  name: '',
  company: '',
  email: '',
  phone: '',
  product: '',
  quantity: '',
  message: '',
  _gotcha: '', // honeypot, must stay empty
};

/**
 * status: 'idle' | 'submitting' | 'success' | 'mailto' | 'error'
 * With EmailJS configured (see .env.example) the enquiry is emailed to the company
 * automatically. Without it, the visitor's email app opens (mailto fallback).
 */
export default function useContactForm() {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  }, []);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      if (values._gotcha) return; // bot

      const found = validateEnquiry(values);
      setErrors(found);
      if (Object.keys(found).length > 0) return;

      setStatus('submitting');
      try {
        if (isEmailConfigured) {
          await sendEnquiry(values);
          setValues(INITIAL);
          setStatus('success');
        } else {
          window.location.href = buildMailtoUrl(values);
          setStatus('mailto');
        }
      } catch (err) {
        console.error('Enquiry failed', err);
        setStatus('error');
      }
    },
    [values],
  );

  return { values, errors, status, handleChange, handleSubmit };
}
