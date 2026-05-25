import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { X, Send, Phone, Mail, MapPin, CheckCircle, Stethoscope } from 'lucide-react';
import { submitContactForm } from '../lib/supabase';
import { motion } from 'framer-motion';

const Contact = () => {
  const location = useLocation();
  const navigate = useNavigate();
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

  // Set service based on query parameter if available
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceParam = params.get('service');
    
    if (serviceParam) {
      setFormData(prev => ({ ...prev, service: serviceParam }));
    }
  }, [location.search]);

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
    if (!formData.service) newErrors.service = 'Please select a service';
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
          // Navigate to the selected business page after successful submission
          navigate('/tsmc');
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

  // Get business icon based on service
  const getBusinessIcon = (service: string) => {
    return <Stethoscope className="h-5 w-5 text-indigo-600" />;
  };

  // Get business name based on service
  const getBusinessName = (service: string) => {
    return 'TSMC Medical Supply';
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 text-center"
        >
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-green-500 animate-scale-in" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Thank You!</h2>
            <p className="text-gray-600">
              We've received your message and will get back to you soon.
            </p>
            <p className="text-gray-500 text-sm">
              Redirecting you to our products page...
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Contact Us</h1>
          <p className="mt-4 text-xl text-gray-600">We'd love to hear from you. Please fill out the form below.</p>
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Contact Information Sidebar */}
            <div className="bg-gradient-to-b from-indigo-600 to-indigo-700 p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-indigo-200 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="mt-1 text-indigo-100">G/F KAVI Building, 193 E. Rodriguez Jr. Avenue, Bagumbayan,<br /> Quezon City, Philippines</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-indigo-200 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="mt-1 text-indigo-100">+63 2 906 0520</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-indigo-200 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="mt-1 text-indigo-100">inquiries@tsmc.ph</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="font-medium mb-2">Our Businesses</h4>
                <div className="flex items-center">
                  <Stethoscope className="h-5 w-5 text-indigo-200 mr-2" />
                  <span>Medical Equipment & Supplies</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-span-2 p-8">
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
      </div>
    </div>
  );
};

export default Contact;