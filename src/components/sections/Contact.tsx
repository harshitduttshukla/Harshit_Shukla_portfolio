"use client";

import { FormEvent, useState } from "react";
import { ArrowDownRight, Mail, MessageCircle, Send } from "lucide-react";

type FormValues = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  description: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  budget: "",
  description: "",
};

const projectTypes = [
  "Website",
  "Web Application",
  "SaaS",
  "Backend/API",
  "AI/LLM Application",
  "Admin Dashboard",
  "Mobile Application",
  "Other",
];

const budgets = [
  "Under ₹25K",
  "₹25K–₹50K",
  "₹50K–₹1L",
  "₹1L–₹2L",
  "₹2L+",
  "Let's Discuss",
];

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = "Enter a valid email address.";
  if (!values.projectType) errors.projectType = "Choose a project type.";
  if (!values.budget) errors.budget = "Choose a budget range.";
  if (values.description.trim().length < 20) {
    errors.description = "Share at least 20 characters about the project.";
  }
  return errors;
}

export function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const updateField = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
    if (status === "success") setStatus("idle");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      const firstInvalid = Object.keys(nextErrors)[0] as keyof FormValues;
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    setStatus("loading");
    const subject = encodeURIComponent(`${values.projectType} project enquiry from ${values.name}`);
    const body = encodeURIComponent(
      `Hi Harshit,\n\nI would like to discuss a project.\n\nName: ${values.name}\nEmail: ${values.email}\nCompany: ${values.company || "Not provided"}\nProject type: ${values.projectType}\nBudget: ${values.budget}\n\nProject description:\n${values.description}\n\nRegards,\n${values.name}`
    );

    await new Promise((resolve) => window.setTimeout(resolve, 350));
    setStatus("success");
    window.location.href = `mailto:harshitshukla6388@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container contact-layout">
        <div className="contact-copy">
          <p className="section-label">Contact</p>
          <h2>Have a project in mind?</h2>
          <p className="contact-lead">
            Tell me what you&apos;re building. I&apos;ll help you turn the idea into a
            production-ready product.
          </p>
          <div className="contact-actions">
            <a className="btn btn-primary" href="#project-enquiry">
              Start a Project <ArrowDownRight size={16} aria-hidden="true" />
            </a>
            <a className="btn btn-secondary" href="mailto:harshitshukla6388@gmail.com">
              <Mail size={16} aria-hidden="true" /> Email Me
            </a>
            <a
              className="btn btn-secondary"
              href="https://wa.me/916388293612?text=Hi%20Harshit%2C%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={16} aria-hidden="true" /> WhatsApp Me
            </a>
          </div>
          <div className="contact-notes">
            <div>
              <span>Best for</span>
              <p>Product builds, APIs, dashboards, AI workflows, and engineering roles.</p>
            </div>
            <div>
              <span>Based in</span>
              <p>Lucknow, India · Available remotely</p>
            </div>
          </div>
        </div>

        <form id="project-enquiry" className="enquiry-form" onSubmit={handleSubmit} noValidate>
          <div className="form-heading">
            <div>
              <span>Project enquiry</span>
              <h3>Tell me about the work</h3>
            </div>
            <span className="form-step">01 / 01</span>
          </div>

          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                value={values.name}
                onChange={(event) => updateField("name", event.target.value)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                placeholder="Your name"
              />
              {errors.name ? <span className="field-error" id="name-error">{errors.name}</span> : null}
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={(event) => updateField("email", event.target.value)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                placeholder="you@company.com"
              />
              {errors.email ? <span className="field-error" id="email-error">{errors.email}</span> : null}
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="company">Company <span>(optional)</span></label>
            <input
              id="company"
              name="company"
              autoComplete="organization"
              value={values.company}
              onChange={(event) => updateField("company", event.target.value)}
              placeholder="Company or startup"
            />
          </div>

          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="projectType">Project Type</label>
              <select
                id="projectType"
                name="projectType"
                value={values.projectType}
                onChange={(event) => updateField("projectType", event.target.value)}
                aria-invalid={Boolean(errors.projectType)}
                aria-describedby={errors.projectType ? "projectType-error" : undefined}
              >
                <option value="">Select a type</option>
                {projectTypes.map((type) => <option value={type} key={type}>{type}</option>)}
              </select>
              {errors.projectType ? <span className="field-error" id="projectType-error">{errors.projectType}</span> : null}
            </div>
            <div className="form-field">
              <label htmlFor="budget">Budget Range</label>
              <select
                id="budget"
                name="budget"
                value={values.budget}
                onChange={(event) => updateField("budget", event.target.value)}
                aria-invalid={Boolean(errors.budget)}
                aria-describedby={errors.budget ? "budget-error" : undefined}
              >
                <option value="">Select a range</option>
                {budgets.map((budget) => <option value={budget} key={budget}>{budget}</option>)}
              </select>
              {errors.budget ? <span className="field-error" id="budget-error">{errors.budget}</span> : null}
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="description">Project Description</label>
            <textarea
              id="description"
              name="description"
              rows={5}
              value={values.description}
              onChange={(event) => updateField("description", event.target.value)}
              aria-invalid={Boolean(errors.description)}
              aria-describedby={errors.description ? "description-error" : "description-help"}
              placeholder="What are you building, who is it for, and what should it achieve?"
            />
            {errors.description ? (
              <span className="field-error" id="description-error">{errors.description}</span>
            ) : (
              <span className="field-help" id="description-help">A few useful details are enough to start.</span>
            )}
          </div>

          <button className="btn btn-primary form-submit" type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Preparing enquiry…" : "Send Project Enquiry"}
            <Send size={16} aria-hidden="true" />
          </button>
          <p className={`form-status ${status === "success" ? "success" : ""}`} aria-live="polite">
            {status === "success"
              ? "Your email app is ready with the project details pre-filled."
              : "Submitting opens your email app with these details pre-filled."}
          </p>
        </form>
      </div>
    </section>
  );
}
