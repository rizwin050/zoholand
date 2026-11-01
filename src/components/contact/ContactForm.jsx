import site from '../../config/site';
import { productCategories } from '../../data/products';
import useContactForm from '../../hooks/useContactForm';

function Field({ id, label, required, error, children }) {
  return (
    <div className={`field${error ? ' field--error' : ''}`}>
      <label htmlFor={id}>{label}{required && <span aria-hidden="true"> *</span>}</label>
      {children}
      {error && <p className="field__error" id={`${id}-error`}>{error}</p>}
    </div>
  );
}

const PRODUCT_OPTIONS = [...productCategories.map((p) => p.name), 'Pre-laminated decors', 'Other'];

export default function ContactForm() {
  const { values, errors, status, handleChange, handleSubmit } = useContactForm();
  const busy = status === 'submitting';
  const bind = (name, required) => ({
    id: name, name, value: values[name], onChange: handleChange,
    'aria-required': required || undefined,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  });

  return (
    <form className="enquiry" onSubmit={handleSubmit} noValidate>
      <h2>Send us an enquiry</h2>
      <p className="enquiry__intro">Fill in the details and our team will get back to you within one business day.</p>

      <div className="enquiry__grid">
        <Field id="name" label="Full name" required error={errors.name}>
          <input type="text" autoComplete="name" {...bind('name', true)} />
        </Field>
        <Field id="company" label="Company name">
          <input type="text" autoComplete="organization" {...bind('company')} />
        </Field>
        <Field id="email" label="Email address" required error={errors.email}>
          <input type="email" autoComplete="email" {...bind('email', true)} />
        </Field>
        <Field id="phone" label="Phone number" required error={errors.phone}>
          <input type="tel" autoComplete="tel" {...bind('phone', true)} />
        </Field>
        <Field id="product" label="Product of interest">
          <select {...bind('product')}>
            <option value="">Select a product</option>
            {PRODUCT_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </Field>
        <Field id="quantity" label="Quantity or requirement">
          <input type="text" placeholder="e.g. 500 sheets of 17 mm, 2 containers" {...bind('quantity')} />
        </Field>
      </div>

      <Field id="message" label="Additional details">
        <textarea rows="5" placeholder="Describe your project, application or any specific requirements." {...bind('message')} />
      </Field>

      {/* Honeypot: hidden from people, tempting for bots. */}
      <div className="enquiry__trap" aria-hidden="true">
        <label htmlFor="_gotcha">Leave this empty</label>
        <input type="text" id="_gotcha" name="_gotcha" tabIndex={-1} autoComplete="off" value={values._gotcha} onChange={handleChange} />
      </div>

      <button type="submit" className="btn btn--primary" disabled={busy}>
        {busy ? 'Sending…' : 'Send enquiry'}
      </button>

      <div role="status" aria-live="polite" className="enquiry__status">
        {status === 'success' && <p className="is-success">Thank you. Your enquiry has been sent and we will reply shortly.</p>}
        {status === 'mailto' && (
          <p className="is-success">
            Your email app should have opened with the enquiry filled in. If it did not, write to{' '}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        )}
        {status === 'error' && (
          <p className="is-error">
            Sorry, that did not send. Please try again or email <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        )}
      </div>
    </form>
  );
}
