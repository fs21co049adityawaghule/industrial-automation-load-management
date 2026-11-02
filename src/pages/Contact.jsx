import React, { useState, useRef } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    customerName: '',
    emailAddress: '',
    contactNumber: '',
    message: ''
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [submissionState, setSubmissionState] = useState(null); // null | 'validated-frontend' | 'submitting'
  const fileInputRef = useRef(null);

  // Allowed file extensions
  const allowedExtensions = ['pdf', 'jpg', 'jpeg', 'png', 'doc', 'docx', 'zip'];
  const maxFileSizeBytes = 15 * 1024 * 1024; // 15 MB

  const teamMembers = [
    {
      name: 'ADITYA WAGHULE',
      email: 'waghuleaditya2425@ternaengg.ac.in'
    },
    {
      name: 'SMIKSHA MANE',
      email: 'samikshamane2324@ternaengg.ac.in'
    },
    {
      name: 'ANKITA KUMBHARKAR',
      email: 'ankitakumbharkar2324@ternaengg.ac.in'
    },
    {
      name: 'GITANJALI SALUNKHE',
      email: 'gitanjalisalunkhe2324@ternaengg.ac.in'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileExt = file.name.split('.').pop().toLowerCase();

    if (!allowedExtensions.includes(fileExt)) {
      setErrors((prev) => ({
        ...prev,
        file: `Unsupported format .${fileExt}. Allowed formats: PDF, JPG, PNG, DOC, DOCX, ZIP.`
      }));
      setSelectedFile(null);
      return;
    }

    if (file.size > maxFileSizeBytes) {
      setErrors((prev) => ({
        ...prev,
        file: 'File size exceeds 15MB limit. Please upload a smaller file.'
      }));
      setSelectedFile(null);
      return;
    }

    setErrors((prev) => ({ ...prev, file: null }));
    setSelectedFile(file);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Customer Name validation
    if (!formData.customerName.trim()) {
      newErrors.customerName = 'Customer Name is required.';
    } else if (formData.customerName.trim().length < 2) {
      newErrors.customerName = 'Please enter at least 2 characters for the name.';
    }

    // Email Address validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = 'Email Address is required.';
    } else if (!emailRegex.test(formData.emailAddress.trim())) {
      newErrors.emailAddress = 'Please enter a valid email address (e.g. name@domain.com).';
    }

    // Contact Number validation
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,15}$/;
    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = 'Contact Number is required.';
    } else if (!phoneRegex.test(formData.contactNumber.trim())) {
      newErrors.contactNumber = 'Please enter a valid phone/mobile number (e.g. +91 9876543210).';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details regarding your requirements or query.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmissionState(null);
      return;
    }

    setSubmissionState('submitting');

    setTimeout(() => {
      setSubmissionState('validated-frontend');
    }, 600);
  };

  return (
    <div className="contact-page" style={{ padding: '3.5rem 0' }}>
      <div className="container">
        {/* Page Header */}
        <div className="section-header">
          <span className="badge" style={{ marginBottom: '0.75rem' }}>Communication</span>
          <h2>CONTACT US</h2>
          <p>
            Submit your industrial automation requirements, customization queries, or reach out directly to the engineering team.
          </p>
        </div>

        <div className="contact-grid">
          {/* SECTION 1: CONTACT FORM */}
          <div className="contact-form-card">
            <div style={{ marginBottom: '1.5rem' }}>
              <span className="badge" style={{ marginBottom: '0.5rem' }}>Section 1</span>
              <h3 className="font-tech" style={{ fontSize: '1.5rem', color: '#ffffff' }}>
                PROJECT ENQUIRY & SPECIFICATIONS FORM
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                All fields marked with <span style={{ color: 'var(--accent-red)' }}>*</span> are required.
              </p>
            </div>

            {submissionState === 'validated-frontend' && (
              <div className="form-alert form-alert-info">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                <div>
                  <strong>Frontend Form Validation Passed!</strong>
                  <p style={{ marginTop: '0.4rem', fontSize: '0.85rem', lineHeight: '1.5' }}>
                    Your input was successfully validated on the client side.
                  </p>
                  <div style={{ marginTop: '0.6rem', padding: '0.6rem 0.8rem', background: 'rgba(0, 0, 0, 0.3)', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                    <strong>Backend Configuration Notice:</strong>
                    <br />
                    As this is currently running as a standalone frontend project, form submissions and uploaded attachments are <em>not permanently stored on a server database</em>.
                    To enable permanent live email notifications or database logging, attach an API endpoint (such as an Express.js server, Formspree, or EmailJS integration).
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              {/* Customer Name */}
              <div className="form-group">
                <label className="form-label" htmlFor="customerName">
                  Customer Name <span className="req">*</span>
                </label>
                <input
                  id="customerName"
                  name="customerName"
                  type="text"
                  placeholder="e.g. John Doe or Plant Manager"
                  className={`form-input ${errors.customerName ? 'input-error' : ''}`}
                  value={formData.customerName}
                  onChange={handleInputChange}
                />
                {errors.customerName && <span className="error-text">{errors.customerName}</span>}
              </div>

              {/* Email Address */}
              <div className="form-group">
                <label className="form-label" htmlFor="emailAddress">
                  Email Address <span className="req">*</span>
                </label>
                <input
                  id="emailAddress"
                  name="emailAddress"
                  type="email"
                  placeholder="e.g. client@domain.com"
                  className={`form-input ${errors.emailAddress ? 'input-error' : ''}`}
                  value={formData.emailAddress}
                  onChange={handleInputChange}
                />
                {errors.emailAddress && <span className="error-text">{errors.emailAddress}</span>}
              </div>

              {/* Contact Number */}
              <div className="form-group">
                <label className="form-label" htmlFor="contactNumber">
                  Contact Number <span className="req">*</span>
                </label>
                <input
                  id="contactNumber"
                  name="contactNumber"
                  type="tel"
                  placeholder="e.g. +91 9876543210"
                  className={`form-input ${errors.contactNumber ? 'input-error' : ''}`}
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                />
                {errors.contactNumber && <span className="error-text">{errors.contactNumber}</span>}
              </div>

              {/* Message / Custom Requirements */}
              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  Message / Custom Requirements <span className="req">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Specify relay capacity, load shedding priorities, voltage specifications, or custom questions..."
                  className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
                {errors.message && <span className="error-text">{errors.message}</span>}
              </div>

              {/* File Upload */}
              <div className="form-group">
                <label className="form-label">
                  Attachment / Technical Specification (Optional)
                </label>
                <div
                  className="file-dropzone"
                  onClick={() => fileInputRef.current && fileInputRef.current.click()}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && fileInputRef.current && fileInputRef.current.click()}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    className="file-dropzone-input"
                    accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.zip"
                    onChange={handleFileChange}
                  />
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--electric-blue)', margin: '0 auto 0.5rem' }}>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                    Click to browse or drag file here
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                    Supported formats: PDF, JPG, PNG, DOC, DOCX, ZIP (Max 15MB)
                  </div>
                </div>

                {errors.file && <span className="error-text">{errors.file}</span>}

                {selectedFile && (
                  <div className="file-selected-box">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', overflow: 'hidden' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--cyan-bright)', flexShrink: 0 }}>
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                      </svg>
                      <span style={{ fontWeight: 500, textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                        {selectedFile.name}
                      </span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', flexShrink: 0 }}>
                        ({(selectedFile.size / 1024).toFixed(1)} KB)
                      </span>
                    </div>
                    <button
                      type="button"
                      className="file-remove-btn"
                      onClick={handleRemoveFile}
                      aria-label="Remove selected file"
                      title="Remove file"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '0.5rem', padding: '0.9rem' }}
                disabled={submissionState === 'submitting'}
              >
                {submissionState === 'submitting' ? (
                  <>
                    <svg className="badge-dot" style={{ width: '10px', height: '10px' }}></svg>
                    Validating Submission...
                  </>
                ) : (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                    Submit Enquiry
                  </>
                )}
              </button>
            </form>
          </div>

          {/* SECTION 2: PROJECT TEAM CONTACT DETAILS */}
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <span className="badge" style={{ marginBottom: '0.5rem' }}>Section 2</span>
              <h3 className="font-tech" style={{ fontSize: '1.5rem', color: '#ffffff' }}>
                PROJECT TEAM CONTACT DETAILS
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Direct academic contact points for project demonstrations, inquiries, and technical discussion.
              </p>
            </div>

            <div className="team-contact-list">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="team-contact-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(0, 180, 216, 0.15)', border: '1px solid rgba(0, 180, 216, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--cyan-bright)', fontSize: '0.75rem', fontWeight: 700 }}>
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="team-contact-name">{member.name}</h4>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Project Team Member
                      </span>
                    </div>
                  </div>

                  <a
                    href={`mailto:${member.email}`}
                    className="team-email-link"
                    title={`Send email to ${member.name}`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span>{member.email}</span>
                  </a>
                </div>
              ))}
            </div>

            {/* Academic Institution Card */}
            <div className="tech-card" style={{ marginTop: '1.5rem', background: 'rgba(11, 19, 43, 0.5)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--cyan-bright)' }}>
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
                <h4 className="font-tech" style={{ fontSize: '1.05rem', color: '#ffffff' }}>
                  Institutional Affiliation
                </h4>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5' }}>
                Terna Engineering College &bull; Department of Electronics & Telecommunication Engineering.
                All student emails correspond to official university domains.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
