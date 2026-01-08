// contact.jsx
import React, { useState, useRef } from "react";
import "./contact.css";

const initialState = {
  firstName: "",
  lastName: "",
  companyName: "",
  role: "",
  email: "",
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
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);
  const fileInputRef = useRef();

  function validate(values) {
    const e = {};
    if (!values.firstName.trim()) e.firstName = "Required";
    if (!values.lastName.trim()) e.lastName = "Required";
    if (!values.companyName.trim()) e.companyName = "Required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = "Invalid email";
    if (!values.phone.trim()) e.phone = "Required";
    if (!values.headcount) e.headcount = "Required";
    if (!values.revenue) e.revenue = "Required";
    if (!values.projectStage) e.projectStage = "Required";
    if (!values.budget) e.budget = "Required";
    if (!values.timeline) e.timeline = "Required";
    if (!values.description.trim()) e.description = "Please describe the problem";
    return e;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleFile(e) {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
    setFileName(f.name);
  }

  function handleDrop(e) {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (!f) return;
    setFile(f);
    setFileName(f.name);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const v = validate(form);
    if (Object.keys(v).length) {
      setErrors(v);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setSubmitting(true);
    setSuccess(null);

    // Prepare payload (example: FormData for file)
    const payload = new FormData();
    Object.keys(form).forEach((k) => payload.append(k, form[k]));
    if (file) payload.append("attachment", file);

    try {
      // Replace '/api/contact' with your real endpoint
      const res = await fetch("/api/contact", {
        method: "POST",
        body: payload,
      });

      if (!res.ok) throw new Error("Network error");
      setSuccess("Thank you — your request has been received. We'll contact you soon.");
      setForm(initialState);
      setFile(null);
      setFileName("");
      fileInputRef.current.value = "";
    } catch (err) {
      setSuccess("There was an issue submitting. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="sc-contact-wrap" aria-labelledby="contact-heading">
      <div className="sc-contact-card">
        <header className="sc-header">
          <h2 id="contact-heading">Get Started With Our Free Consultation</h2>
          <p className="sc-sub">
            We ask for these details so we can come prepared with tailored insights. If we’re a good fit,
            we’ll show up with a clear plan. If not, we’ll point you to better resources.
          </p>
        </header>

        {success && <div className="sc-alert">{success}</div>}

        <form className="sc-form" onSubmit={handleSubmit} noValidate>
          <div className="sc-grid">
            <label className="sc-field">
              <span className="sc-label">First Name</span>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
                aria-invalid={!!errors.firstName}
              />
              {errors.firstName && <small className="sc-error">{errors.firstName}</small>}
            </label>

            <label className="sc-field">
              <span className="sc-label">Last Name</span>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
                aria-invalid={!!errors.lastName}
              />
              {errors.lastName && <small className="sc-error">{errors.lastName}</small>}
            </label>

            <label className="sc-field sc-span-2">
              <span className="sc-label">Company Name</span>
              <input
                name="companyName"
                value={form.companyName}
                onChange={handleChange}
                placeholder="Enter company name"
                aria-invalid={!!errors.companyName}
              />
              {errors.companyName && <small className="sc-error">{errors.companyName}</small>}
            </label>

            <label className="sc-field">
              <span className="sc-label">Your Role</span>
              <input
                name="role"
                value={form.role}
                onChange={handleChange}
                placeholder="e.g., CTO, Product Head"
              />
            </label>

            <label className="sc-field">
              <span className="sc-label">Business Email</span>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="name@company.com"
                aria-invalid={!!errors.email}
              />
              {errors.email && <small className="sc-error">{errors.email}</small>}
            </label>

            <label className="sc-field">
              <span className="sc-label">Business Contact Number</span>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+92 3xx xxxxxxx"
                aria-invalid={!!errors.phone}
              />
              {errors.phone && <small className="sc-error">{errors.phone}</small>}
            </label>

            <label className="sc-field">
              <span className="sc-label">Current Headcount</span>
              <select name="headcount" value={form.headcount} onChange={handleChange} aria-invalid={!!errors.headcount}>
                <option value="">Select</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201-1000">201-1000</option>
                <option value="1000+">1000+</option>
              </select>
              {errors.headcount && <small className="sc-error">{errors.headcount}</small>}
            </label>

            <label className="sc-field">
              <span className="sc-label">Your Annual Revenue</span>
              <select name="revenue" value={form.revenue} onChange={handleChange} aria-invalid={!!errors.revenue}>
                <option value="">Select</option>
                <option value="<100k">&lt; $100k</option>
                <option value="100k-1M">$100k - $1M</option>
                <option value="1M-10M">$1M - $10M</option>
                <option value="10M+">$10M+</option>
              </select>
              {errors.revenue && <small className="sc-error">{errors.revenue}</small>}
            </label>

            <fieldset className="sc-field sc-span-2">
              <legend className="sc-label">Project Stage</legend>
              <div className="sc-radio-row">
                <label><input type="radio" name="projectStage" value="idea" checked={form.projectStage==="idea"} onChange={handleChange}/> Idea</label>
                <label><input type="radio" name="projectStage" value="prototype" checked={form.projectStage==="prototype"} onChange={handleChange}/> Prototype</label>
                <label><input type="radio" name="projectStage" value="development" checked={form.projectStage==="development"} onChange={handleChange}/> Development</label>
                <label><input type="radio" name="projectStage" value="scale" checked={form.projectStage==="scale"} onChange={handleChange}/> Scale</label>
              </div>
              {errors.projectStage && <small className="sc-error">{errors.projectStage}</small>}
            </fieldset>

            <label className="sc-field">
              <span className="sc-label">Attach a relevant document (optional)</span>
              <div
                className="sc-dropzone"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={() => fileInputRef.current.click()}
                role="button"
                tabIndex={0}
                aria-label="Upload file"
              >
                <input ref={fileInputRef} type="file" onChange={handleFile} className="sc-file-input" />
                <div className="sc-drop-inner">
                  <strong>{fileName || "Drop your files here or click to upload"}</strong>
                  <span className="sc-muted">PDF, DOCX, PPTX, or ZIP (max 10MB)</span>
                </div>
              </div>
            </label>

            <label className="sc-field">
              <span className="sc-label">What is your estimated budget for this project?</span>
              <select name="budget" value={form.budget} onChange={handleChange} aria-invalid={!!errors.budget}>
                <option value="">Select</option>
                <option value="<10k">&lt; $10k</option>
                <option value="10k-50k">$10k - $50k</option>
                <option value="50k-200k">$50k - $200k</option>
                <option value="200k+">$200k+</option>
              </select>
              {errors.budget && <small className="sc-error">{errors.budget}</small>}
            </label>

            <label className="sc-field">
              <span className="sc-label">What is your ideal timeline for launching this software?</span>
              <select name="timeline" value={form.timeline} onChange={handleChange} aria-invalid={!!errors.timeline}>
                <option value="">Select</option>
                <option value="1-3 months">1-3 months</option>
                <option value="3-6 months">3-6 months</option>
                <option value="6-12 months">6-12 months</option>
                <option value="12+ months">12+ months</option>
              </select>
              {errors.timeline && <small className="sc-error">{errors.timeline}</small>}
            </label>

            <label className="sc-field sc-span-2">
              <span className="sc-label">Please tell us a bit about what you're looking to solve</span>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Describe your challenge, goals, and any constraints"
                rows="6"
                aria-invalid={!!errors.description}
              />
              {errors.description && <small className="sc-error">{errors.description}</small>}
            </label>
          </div>

          <div className="sc-actions">
            <button type="submit" className="sc-btn primary" disabled={submitting}>
              {submitting ? "Submitting..." : "Request Consultation"}
            </button>

            <button
              type="button"
              className="sc-btn ghost"
              onClick={() => {
                // Example: open calendar booking link or show slot modal
                window.open("https://calendly.com/your-company/consultation", "_blank");
              }}
            >
              Book a Slot
            </button>
          </div>
        </form>

        <footer className="sc-footer">
          <p className="sc-small">
            We respect your privacy. By submitting, you agree we may contact you about this request.
          </p>
        </footer>
      </div>
    </section>
  );
}
