import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  EMAILJS_CONFIG,
  isEmailJSConfigured,
} from '../../../config/emailjs.config';
import TiltCard from './TiltCard';

const FIELD_LIMITS = {
  name: 80,
  email: 254,
  subject: 120,
  message: 2000,
};

const initialValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const inputClass =
  'w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 hover:border-white/30 focus:border-[#0084d1] focus:ring-2 focus:ring-[#0084d1]/25 disabled:cursor-not-allowed disabled:opacity-60';

const validateContact = (values) => {
  const errors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const subject = values.subject.trim();
  const message = values.message.trim();

  if (!name) errors.name = 'Please enter your name.';
  else if (name.length < 2) errors.name = 'Name must be at least 2 characters.';

  if (!email) errors.email = 'Please enter your email address.';
  else if (!emailPattern.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!subject) errors.subject = 'Please add a subject.';
  else if (subject.length < 3) {
    errors.subject = 'Subject must be at least 3 characters.';
  }

  if (!message) errors.message = 'Please write a message.';
  else if (message.length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  }

  Object.keys(FIELD_LIMITS).forEach((field) => {
    if (!errors[field] && values[field].trim().length > FIELD_LIMITS[field]) {
      errors[field] = `Please keep this under ${FIELD_LIMITS[field]} characters.`;
    }
  });

  return errors;
};

const Field = ({ id, label, error, hint, children }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between gap-2">
        <label htmlFor={id} className="text-sm font-medium text-white/90">
          {label}
          <span className="text-[#0084d1]" aria-hidden="true">
            {' *'}
          </span>
        </label>

        {hint && (
          <span className="text-xs tabular-nums text-white/45">{hint}</span>
        )}
      </div>

      {children}

      {error && (
        <p id={`${id}-error`} className="text-xs text-red-300">
          {error}
        </p>
      )}
    </div>
  );
};

const ContactForm = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const formRef = useRef(null);
  const inFlight = useRef(false);

  const isSending = status.type === 'sending';

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        [name]: undefined,
      }));
    }

    if (status.type === 'success' || status.type === 'error') {
      setStatus({ type: 'idle', message: '' });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (inFlight.current) return;

    const nextErrors = validateContact(values);
    setErrors(nextErrors);

    const firstInvalidField = Object.keys(nextErrors)[0];

    if (firstInvalidField) {
      formRef.current?.querySelector(`[name="${firstInvalidField}"]`)?.focus();
      return;
    }

    if (!isEmailJSConfigured()) {
      setStatus({
        type: 'error',
        message:
          'Email service is not configured yet. Please try again later.',
      });
      return;
    }

    inFlight.current = true;
    setStatus({ type: 'sending', message: 'Sending your message...' });

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          name: values.name.trim(),
          email: values.email.trim(),
          subject: values.subject.trim(),
          message: values.message.trim(),
          from_name: values.name.trim(),
          from_email: values.email.trim(),
          reply_to: values.email.trim(),
        },
        {
          publicKey: EMAILJS_CONFIG.PUBLIC_KEY,
        }
      );

      setValues(initialValues);
      setStatus({
        type: 'success',
        message: 'Thanks! Your message has been sent successfully.',
      });
    } catch (error) {
      console.error('EmailJS error:', error);

      setStatus({
        type: 'error',
        message: 'Your message could not be sent. Please try again later.',
      });
    } finally {
      inFlight.current = false;
    }
  };

  return (
    <TiltCard
  maxTilt={2.5}
  className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/40 backdrop-blur before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:content-[''] before:transition-all before:duration-300 hover:before:animate-pulse hover:before:border-[#00c6ff]/90 hover:before:shadow-[inset_0_0_12px_rgba(0,198,255,0.75),0_0_22px_rgba(0,198,255,0.9),0_0_54px_rgba(0,132,209,0.6)]"
>
      <section id="contact-form" className="p-6 sm:p-8">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-white">
            Send us a message
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-white/60">
            We usually reply within two working days.
          </p>
        </div>

        <form
          ref={formRef}
          noValidate
          onSubmit={handleSubmit}
          aria-busy={isSending}
          className="flex flex-col gap-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="name" label="Name" error={errors.name}>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your full name"
                required
                maxLength={FIELD_LIMITS.name}
                value={values.name}
                onChange={handleChange}
                disabled={isSending}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className={inputClass}
              />
            </Field>

            <Field id="email" label="Email" error={errors.email}>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
                maxLength={FIELD_LIMITS.email}
                value={values.email}
                onChange={handleChange}
                disabled={isSending}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={inputClass}
              />
            </Field>
          </div>

          <Field id="subject" label="Subject" error={errors.subject}>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="How can we help?"
              required
              maxLength={FIELD_LIMITS.subject}
              value={values.subject}
              onChange={handleChange}
              disabled={isSending}
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? 'subject-error' : undefined}
              className={inputClass}
            />
          </Field>

          <Field
            id="message"
            label="Message"
            error={errors.message}
            hint={`${values.message.length}/${FIELD_LIMITS.message}`}
          >
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Write your message here..."
              required
              maxLength={FIELD_LIMITS.message}
              value={values.message}
              onChange={handleChange}
              disabled={isSending}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className={`${inputClass} min-h-[9rem] resize-y leading-relaxed`}
            />
          </Field>

          {status.type !== 'idle' && (
            <p
              role="status"
              className={`rounded-xl border px-4 py-3 text-sm ${
                status.type === 'success'
                  ? 'border-green-400/25 bg-green-400/10 text-green-200'
                  : status.type === 'error'
                    ? 'border-red-400/25 bg-red-400/10 text-red-200'
                    : 'border-[#0084d1]/30 bg-[#0084d1]/10 text-blue-100'
              }`}
            >
              {status.message}
            </p>
          )}

          <button
            type="submit"
            disabled={isSending}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0084d1] px-6 text-sm font-semibold text-white transition hover:bg-[#0071b2] hover:shadow-[0_0_28px_-6px_#0084d1] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:self-start"
          >
            {isSending && (
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            )}
            {isSending ? 'Sending...' : 'Send message'}
          </button>
        </form>
      </section>
    </TiltCard>
  );
};

export default ContactForm;