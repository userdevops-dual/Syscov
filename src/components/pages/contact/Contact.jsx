// ContactForm.jsx
import React, { useState, useRef } from "react";
import "./contact.css";

const countries = [
  { name: "Pakistan", code: "+92" },
  { name: "United States", code: "+1 (US)" },
  { name: "United Kingdom", code: "+44" },
  { name: "Germany", code: "+49" },
  { name: "India", code: "+91" },
  { name: "Canada", code: "+1 (CA)" },
  { name: "Australia", code: "+61" },
  { name: "France", code: "+33" },
  { name: "Netherlands", code: "+31" },
];

const initialState = {
  firstName: "",
  lastName: "",
  companyName: "",
  role: "",
  email: "",
  countryCode: countries[0].code,
  phone: "",
  headcount: "",
  revenue: "",
  projectStage: "",
  budget: "",
  timeline: "",
  description: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [fileName, setFileName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  function validate(v) {
    const e = {};
    if (!v.firstName.trim()) e.firstName = "Required";
    if (!v.lastName.trim()) e.lastName = "Required";
    if (!v.companyName.trim()) e.companyName = "Required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Invalid email";
    if (!v.phone.trim()) e.phone = "Required";
    if (!v.headcount) e.headcount = "Required";
    if (!v.revenue) e.revenue = "Required";
    if (!v.projectStage) e.projectStage = "Required";
    if (!v.budget) e.budget = "Required";
    if (!v.timeline) e.timeline = "Required";
    if (!v.description.trim()) e.description = "Required";
    return e;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setErrors((p) => ({ ...p, [name]: undefined }));
  }

  function handleFile(e) {
    const f = e.target.files?.[0];
    if (!f) return;
    setFileName(f.name);
  }

  function handleDrop(e) {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (!f) return;
    setFileName(f.name);

    try {
      if (fileInputRef.current) {
        const dt = new DataTransfer();
        dt.items.add(f);
        fileInputRef.current.files = dt.files;
        handleFile({ target: { files: dt.files } });
      }
    } catch (err) {
      console.warn("Could not set input.files programmatically", err);
    }
  }

  // Allow normal browser POST when validation passes.
  function handleSubmit(e) {
    const v = validate(form);
    if (Object.keys(v).length) {
      e.preventDefault();
      setErrors(v);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Let browser submit (don't call preventDefault) so file uploads work.
    setSubmitting(true);
  }

  return (
    <section className="sc-contact-wrap">
      <div className="sc-contact-card">
        <header className="sc-header">
          <h2>Get Started With Our Free Consultation</h2>
          <p className="sc-sub">Fill the form and we’ll review your request. Attachments supported.</p>
        </header>

        <form
          className="sc-form"
          method="POST"
          action="https://formsubmit.co/userme782.dev@gmail.com" /* replace with your email if needed */
          encType="multipart/form-data"
          onSubmit={handleSubmit}
          noValidate
        >
          {/* FormSubmit config - keep these hidden fields only */}
          <input type="hidden" name="_subject" value="New Consultation Request" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          {/* reply-to needs to be named _replyto for formsubmit to use it */}
          <input type="hidden" name="_replyto" value={form.email} />

          <div className="sc-grid">
            <label className="sc-field">
              <span className="sc-label">First Name</span>
              <input name="firstName" type="text" value={form.firstName} onChange={handleChange} required />
              {errors.firstName && <small className="sc-error">{errors.firstName}</small>}
            </label>

            <label className="sc-field">
              <span className="sc-label">Last Name</span>
              <input name="lastName" type="text" value={form.lastName} onChange={handleChange} required />
              {errors.lastName && <small className="sc-error">{errors.lastName}</small>}
            </label>

            <label className="sc-field sc-span-2">
              <span className="sc-label">Company Name</span>
              <input name="companyName" type="text" value={form.companyName} onChange={handleChange} required />
              {errors.companyName && <small className="sc-error">{errors.companyName}</small>}
            </label>

            <label className="sc-field">
              <span className="sc-label">Your Role</span>
              <input name="role" type="text" value={form.role} onChange={handleChange} />
            </label>

            <label className="sc-field">
              <span className="sc-label">Business Email</span>
              <input name="email" type="email" value={form.email} onChange={handleChange} required />
              {errors.email && <small className="sc-error">{errors.email}</small>}
            </label>

            <label className="sc-field">
              <span className="sc-label">Country</span>
              <select name="countryCode" value={form.countryCode} onChange={handleChange}>
                {countries.map((c) => (
                  <option key={`${c.name}-${c.code}`} value={c.code}>
                    {c.name} ({c.code})
                  </option>
                ))}
              </select>
            </label>

            <label className="sc-field">
              <span className="sc-label">Phone</span>
              <div className="phone-input">
                <span className="phone-prefix">{form.countryCode}</span>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="e.g. 3012345678"
                  required
                />
              </div>
              {errors.phone && <small className="sc-error">{errors.phone}</small>}
            </label>

            <label className="sc-field">
              <span className="sc-label">Current Headcount</span>
              <select name="headcount" value={form.headcount} onChange={handleChange} required>
                <option value="">Select</option>
                <option>1-10</option>
                <option>11-50</option>
                <option>51-200</option>
                <option>201-1000</option>
                <option>1000+</option>
              </select>
              {errors.headcount && <small className="sc-error">{errors.headcount}</small>}
            </label>

            <label className="sc-field">
              <span className="sc-label">Annual Revenue</span>
              <select name="revenue" value={form.revenue} onChange={handleChange} required>
                <option value="">Select</option>
                <option>{"< $100k"}</option>
                <option>$100k - $1M</option>
                <option>$1M - $10M</option>
                <option>$10M+</option>
              </select>
              {errors.revenue && <small className="sc-error">{errors.revenue}</small>}
            </label>

            <fieldset className="sc-field sc-span-2">
              <legend className="sc-label">Project Stage</legend>
              <div className="sc-radio-row">
                {["idea", "prototype", "development", "scale"].map((s) => (
                  <label key={s} className="radio-label">
                    <input
                      type="radio"
                      name="projectStage"
                      value={s}
                      checked={form.projectStage === s}
                      onChange={handleChange}
                      required
                    />{" "}
                    {s}
                  </label>
                ))}
              </div>
              {errors.projectStage && <small className="sc-error">{errors.projectStage}</small>}
            </fieldset>

            <label className="sc-field sc-span-2">
              <span className="sc-label">Attach file (optional)</span>
              <div
                className="sc-dropzone"
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                onClick={() => fileInputRef.current && fileInputRef.current.click()}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  name="attachment"
                  className="sc-file-input"
                  onChange={(e) => {
                    handleFile(e);
                  }}
                />
                <div className="sc-drop-inner">
                  <strong>{fileName || "Drop file or click to upload"}</strong>
                  <span className="sc-muted">PDF, DOCX, ZIP (max 10MB)</span>
                </div>
              </div>
            </label>

            <label className="sc-field">
              <span className="sc-label">Budget</span>
              <select name="budget" value={form.budget} onChange={handleChange} required>
                <option value="">Select</option>
                <option>{"< $10k"}</option>
                <option>$10k - $50k</option>
                <option>$50k - $200k</option>
                <option>$200k+</option>
              </select>
              {errors.budget && <small className="sc-error">{errors.budget}</small>}
            </label>

            <label className="sc-field">
              <span className="sc-label">Timeline</span>
              <select name="timeline" value={form.timeline} onChange={handleChange} required>
                <option value="">Select</option>
                <option>1-3 months</option>
                <option>3-6 months</option>
                <option>6-12 months</option>
                <option>12+ months</option>
              </select>
              {errors.timeline && <small className="sc-error">{errors.timeline}</small>}
            </label>

            <label className="sc-field sc-span-2">
              <span className="sc-label">Description</span>
              <textarea name="description" rows="6" value={form.description} onChange={handleChange} required />
              {errors.description && <small className="sc-error">{errors.description}</small>}
            </label>
          </div>

          <div className="sc-actions">
            <button className="sc-btn primary" type="submit" disabled={submitting}>
              {submitting ? "Submitting..." : "Request Consultation"}
            </button>
          </div>
        </form>

        <footer className="sc-footer">
          <p className="sc-small">We respect your privacy.</p>
        </footer>
      </div>
    </section>
  );
}
