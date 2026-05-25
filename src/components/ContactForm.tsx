import React, { useState, useEffect } from 'react';
import { X, Send, Phone, Mail, CheckCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { submitContactForm } from '../lib/supabase';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    phoneNumber: '',
    service: '',
    additionalInfo: '',
    contactMethod: 'email',
    contactTime: 'morning',
    privacyPolicy: false
  });

  // Set service based on current route
  useEffect(() => {
    setFormData(prev => ({ ...prev, service: 'medical' }));
  }, [location.pathname]);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phoneNumber.replace(/\s+/g, ''))) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }
    if (!formData.privacyPolicy) newErrors.privacyPolicy = 'Please accept the privacy policy';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitError(null);

      try {
        const result = await submitContactForm(formData);
        
        if (!result.success) {
          throw new Error(result.error as string);
        }

        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          onClose();
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            companyName: '',
            phoneNumber: '',
            service: '',
            additionalInfo: '',
            contactMethod: 'email',
            contactTime: 'morning',
            privacyPolicy: false
          });
        }, 2000);
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitError(error instanceof Error ? error.message : 'Failed to submit form. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    
    if (submitError) {
      setSubmitError(null);
    }
  };

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  if (showSuccess) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="success-message">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 text-center animate-fade-in">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-green-500 animate-scale-in" />
            </div>
            <h2 id="success-message" className="text-2xl font-bold text-gray-900">Thank You!</h2>
            <p className="text-gray-600">
              We've received your message and will get back to you soon.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 overflow-y-auto" role="dialog" aria-modal="true" aria-labelledby="contact-form-title">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl my-8">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-lg flex justify-between items-center z-10">
          <h2 id="contact-form-title" className="text-2xl font-bold text-indigo-600">Contact Us</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-gray-100"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[70vh]">
          <form onSubmit={handleSubmit} className="space-y-6">
            {submitError && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md" role="alert">
                {submitError}
              </div>
            )}

            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border ${
                      errors.firstName ? 'border-red-500' : ''
                    }`}
                    aria-required="true"
                    aria-invalid={!!errors.firstName}
                  />
                  {errors.firstName && <p className="mt-1 text-sm text-red-600" role="alert">{errors.firstName}</p>}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border ${
                      errors.lastName ? 'border-red-500' : ''
                    }`}
                    aria-required="true"
                    aria-invalid={!!errors.lastName}
                  />
                  {errors.lastName && <p className="mt-1 text-sm text-red-600" role="alert">{errors.lastName}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Business Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                  aria-required="true"
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600" role="alert">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border ${
                    errors.companyName ? 'border-red-500' : ''
                  }`}
                  aria-required="true"
                  aria-invalid={!!errors.companyName}
                />
                {errors.companyName && <p className="mt-1 text-sm text-red-600" role="alert">{errors.companyName}</p>}
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border ${
                    errors.phoneNumber ? 'border-red-500' : ''
                  }`}
                  aria-required="true"
                  aria-invalid={!!errors.phoneNumber}
                />
                {errors.phoneNumber && <p className="mt-1 text-sm text-red-600" role="alert">{errors.phoneNumber}</p>}
              </div>
            </div>


            {/* Additional Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Additional Information</h3>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                rows={4}
                placeholder="Optional: Please share any questions or additional information..."
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
              />
            </div>

            {/* Contact Preferences */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Contact Preferences</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <fieldset>
                    <legend className="block text-sm font-medium text-gray-700 mb-2">Preferred Contact Method</legend>
                    <div className="mt-2 space-y-3">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="email"
                          checked={formData.contactMethod === 'email'}
                          onChange={handleChange}
                          className="form-radio text-indigo-600 h-5 w-5"
                        />
                        <span className="ml-2 flex items-center text-base">
                          <Mail className="h-4 w-4 mr-1" />
                          Email
                        </span>
                      </label>
                      <br />
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="phone"
                          checked={formData.contactMethod === 'phone'}
                          onChange={handleChange}
                          className="form-radio text-indigo-600 h-5 w-5"
                        />
                        <span className="ml-2 flex items-center text-base">
                          <Phone className="h-4 w-4 mr-1" />
                          Phone
                        </span>
                      </label>
                    </div>
                  </fieldset>
                </div>

                <div>
                  <label htmlFor="contactTime" className="block text-sm font-medium text-gray-700 mb-1">Best Time to Contact</label>
                  <select
                    id="contactTime"
                    name="contactTime"
                    value={formData.contactTime}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
                  >
                    <option value="morning">Morning (9AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 5PM)</option>
                    <option value="evening">Evening (5PM - 8PM)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Privacy Policy */}
            <div className="space-y-4">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  id="privacyPolicy"
                  name="privacyPolicy"
                  checked={formData.privacyPolicy}
                  onChange={handleChange}
                  className={`mt-1 form-checkbox text-indigo-600 h-5 w-5 ${
                    errors.privacyPolicy ? 'border-red-500' : ''
                  }`}
                  aria-required="true"
                  aria-invalid={!!errors.privacyPolicy}
                />
                <span className="ml-2 text-sm text-gray-600">
                  I agree to TSMC's privacy policy and consent to being contacted about my inquiry. *
                </span>
              </label>
              {errors.privacyPolicy && (
                <p className="text-sm text-red-600" role="alert">{errors.privacyPolicy}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
                aria-busy={isSubmitting}
              >
                <Send className="h-5 w-5 mr-2" />
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;