import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, isEmailJSConfigured } from '../config/emailjs.config';

class EmailService {
  constructor() {
    this.serviceId = EMAILJS_CONFIG.SERVICE_ID;
    this.templateId = EMAILJS_CONFIG.TEMPLATE_ID;
    this.publicKey = EMAILJS_CONFIG.PUBLIC_KEY;
  }

  /**
   * Send email using template parameters object
   * @param {Object} templateParams - Key-value pairs matching your EmailJS template fields
   */
  async sendEmail(templateParams) {
    if (!isEmailJSConfigured()) {
      console.warn(
        '[EmailService] EmailJS is not configured with real API keys. Simulating email send for demonstration.'
      );
      // Simulate network latency for development / demo mode
      await new Promise((resolve) => setTimeout(resolve, 800));
      return {
        status: 200,
        text: 'OK (Simulated Success - Please configure valid VITE_EMAILJS keys in .env)',
        isSimulation: true,
      };
    }

    try {
      const response = await emailjs.send(
        this.serviceId,
        this.templateId,
        templateParams,
        this.publicKey
      );
      return response;
    } catch (error) {
      console.error('[EmailService] Failed to send email via EmailJS:', error);
      throw error;
    }
  }

  /**
   * Send email directly from an HTML form element
   * @param {HTMLFormElement} formElement
   */
  async sendForm(formElement) {
    if (!isEmailJSConfigured()) {
      await new Promise((resolve) => setTimeout(resolve, 800));
      return {
        status: 200,
        text: 'OK (Simulated Form Success)',
        isSimulation: true,
      };
    }

    try {
      const response = await emailjs.sendForm(
        this.serviceId,
        this.templateId,
        formElement,
        this.publicKey
      );
      return response;
    } catch (error) {
      console.error('[EmailService] Failed to send form via EmailJS:', error);
      throw error;
    }
  }
}

export const emailService = new EmailService();
