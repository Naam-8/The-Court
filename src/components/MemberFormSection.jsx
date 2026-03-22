import { useState } from "react";
import { ChevronDown } from "lucide-react";

const SUBJECT_OPTIONS = [
  { value: "product-queries", label: "Product Queries" },
  { value: "partnership", label: "Partnership Enquiries" },
  { value: "demo", label: "request demo" },
  { value: "careers", label: "Careers" },
  { value: "other", label: "Other" },
];

const inputClass =
  "w-full px-5 py-4 rounded-full font-sans text-black bg-white border border-black/10 placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-bright-green transition-shadow";

const textareaClass =
  "w-full px-5 py-4 rounded-2xl font-sans text-black bg-white border border-black/10 placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-bright-green transition-shadow min-h-[160px] resize-y";

export default function MemberFormSection() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("product-queries");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);

  return (
    <section id="join" className="mx-auto">
      <div className="bg-white p-8 sm:p-12 lg:p-16">
        <div className="max-w-xl mx-auto">
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-black text-center">
            Start a{" "}
            <span className="font-serif italic text-dark-green">
              conversation
            </span>{" "}
            with Courtlay
          </h2>
          <p className="mt-3 text-black/80 text-base sm:text-lg text-center">
            Share a few details and we&apos;ll follow up about how Courtlay can
            work with your broadcasts.
          </p>

          <form
            className="mt-10 space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contact-name" className="sr-only">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="contact-company" className="sr-only">
                  Company
                </label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="sr-only">
                  Email (required)
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Email*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div className="relative">
                <label htmlFor="contact-subject" className="sr-only">
                  Subject
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className={`${inputClass} appearance-none cursor-pointer pr-12`}
                >
                  {SUBJECT_OPTIONS.map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 size-5 text-black/40"
                  aria-hidden="true"
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="sr-only">
                  Phone (required)
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  placeholder="Phone*"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="sr-only">
                Your message (required)
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={6}
                placeholder="Your Message*"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={textareaClass}
              />
            </div>

            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                name="consent"
                required
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 size-4 shrink-0 rounded border border-black/20 accent-bright-green focus:ring-2 focus:ring-bright-green focus:ring-offset-0"
              />
              <span className="font-sans text-sm text-black/70 leading-snug text-left">
                By using this form you agree with the storage and handling of
                your data in accordance with the{" "}
                <a
                  href="/privacy-policy"
                  className="text-bright-green font-medium hover:underline underline-offset-2"
                >
                  Privacy and Cookie Policy
                </a>
                .
              </span>
            </label>

            <button
              type="submit"
              className="w-full py-4 rounded-full bg-bright-green text-black font-sans font-semibold text-base hover:bg-bg-pale transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
