'use client';

import { useState, FormEvent } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactForm() {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form
      action="https://formsubmit.co/peathuchu@gmail.com"
      method="POST"
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            {t('contact_form_name')}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-dark text-blue-900"
            placeholder={t('name_required')}
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            {t('contact_form_email')}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-dark text-blue-900"
            placeholder={t('email_required')}
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1">
          {t('contact_form_subject')}
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-dark text-blue-900"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          {t('contact_form_message')}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-dark text-blue-900"
          placeholder={t('message_required')}
        />
      </div>
      
      <div>
        <button
          type="submit"
          className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {t('contact_form_send')}
        </button>
      </div>

      <input type="hidden" name="_next" value="https://pierre-chen.com/contact">
      </input>
      <input type="hidden" name="_captcha" value="false">
      </input>
    </form>
  );
} 