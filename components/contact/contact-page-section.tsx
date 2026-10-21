"use client";

import {
  ArrowRight,
  Check,
  ChevronDown,
  Mail,
  Map,
  Phone,
  Users,
} from "lucide-react";
import { type FormEvent, useId, useState } from "react";
import { Button } from "@/components/ui/button";
import { SITE_EMAIL, SITE_EMAIL_HREF, SITE_PHONES } from "@/lib/contact";
import {
  type FieldErrors,
  FORM_FIELDS,
  validateForm,
} from "@/lib/forms/validate";
import { cn } from "@/lib/utils";

const BUDGETS = [
  "up to $25k",
  "$25k – $50k",
  "$50k – $100k",
  "> $100k",
] as const;

const STEPS = [
  {
    icon: Phone,
    title: "Join us for a discovery call.",
    body: "We dig into your business requirements, technical constraints, and project goals so we know what success looks like.",
  },
  {
    icon: Map,
    title: "We map the project plan.",
    body: "Through interviews and analysis, we define process, design direction, and a phased timeline you can ship against.",
  },
  {
    icon: Users,
    title: "Onboard the team.",
    body: "Once the plan is agreed, a senior Xorora team is ready to collaborate with yours and start building.",
  },
] as const;

const PHONE_SHORT: Record<string, string> = {
  "United States": "US",
  Pakistan: "PK",
  Australia: "AU",
};

const fieldClass =
  "w-full rounded-[var(--r-md)] border border-border-strong bg-slate-50 px-3.5 py-3 font-sans text-[15px] text-fg1 outline-hidden transition-shadow placeholder:text-fg3 focus:border-tangerine-500 focus:bg-surface focus:shadow-focus";

export function ContactPageSection() {
  const [sent, setSent] = useState(false);
  const [budget, setBudget] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validateForm(event.currentTarget, FORM_FIELDS.contact);
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
    }
  }

  return (
    <section className="bg-slate-50 px-5 pt-[clamp(112px,14vw,156px)] pb-[clamp(56px,7vw,96px)] sm:px-8">
      <div className="contact-page-grid mx-auto grid max-w-[1180px] grid-cols-1 items-start gap-[clamp(40px,5vw,72px)] lg:grid-cols-[0.95fr_1.05fr]">
        <div className="flex min-w-0 flex-col">
          <h1
            id="contact-page-title"
            className="m-0 mb-5 text-balance font-extrabold font-sans text-[clamp(34px,5vw,52px)] text-fg1 leading-[1.05] tracking-tight"
          >
            Where do we go from here?
          </h1>
          <p className="m-0 mb-9 max-w-[460px] font-sans text-[clamp(15px,1.6vw,17px)] text-fg2 leading-relaxed">
            We&apos;re excited to learn about your project and explore how we
            can help. Share a few details and we&apos;ll outline clear next
            steps.
          </p>

          <ul className="m-0 mb-10 flex list-none flex-col gap-6 p-0">
            {STEPS.map(({ icon: Icon, title, body }) => (
              <li key={title} className="flex gap-3.5">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-(--r-md) bg-indigo-50 text-xo-indigo">
                  <Icon className="h-[18px] w-[18px]" aria-hidden />
                </span>
                <div>
                  <div className="mb-1 font-sans font-semibold text-[15.5px] text-fg1">
                    {title}
                  </div>
                  <p className="m-0 font-sans text-[14.5px] text-fg2 leading-relaxed">
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-auto grid grid-cols-1 gap-3 sm:grid-cols-2 sm:items-stretch">
            <a
              href={SITE_EMAIL_HREF}
              className="group flex h-full flex-col gap-3 rounded-(--r-lg) border border-transparent bg-slate-100 px-4 py-4 no-underline transition-colors hover:border-xo-indigo/25 hover:bg-indigo-50/60"
            >
              <div className="flex items-center gap-2.5">
                <Mail
                  className="h-[18px] w-[18px] text-xo-indigo"
                  aria-hidden
                />
                <span className="font-mono text-[10.5px] text-fg3 uppercase tracking-[0.16em]">
                  Sales &amp; general
                </span>
              </div>
              <span className="break-all font-sans font-semibold text-[15px] text-fg1 transition-colors group-hover:text-xo-indigo">
                {SITE_EMAIL}
              </span>
            </a>

            <div className="flex h-full flex-col gap-3 rounded-(--r-lg) border border-transparent bg-slate-100 px-4 py-4">
              <div className="flex items-center gap-2.5">
                <Phone
                  className="h-[18px] w-[18px] text-xo-indigo"
                  aria-hidden
                />
                <span className="font-mono text-[10.5px] text-fg3 uppercase tracking-[0.16em]">
                  Call us
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {SITE_PHONES.map((phone) => (
                  <a
                    key={phone.display}
                    href={phone.href}
                    className="flex items-baseline gap-2.5 font-sans text-fg1 no-underline transition-colors hover:text-xo-indigo"
                  >
                    <span className="w-6 shrink-0 font-mono text-[11px] text-fg3 tracking-wide">
                      {PHONE_SHORT[phone.label] ?? phone.label}
                    </span>
                    <span className="font-semibold text-[15px] tabular-nums">
                      {phone.display}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="min-w-0">
          <div className="rounded-(--r-xl) border border-border bg-surface p-[clamp(22px,3vw,36px)] shadow-sm">
            {sent ? (
              <div className="py-14 text-center">
                <div className="mx-auto mb-[18px] flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft text-success">
                  <Check className="h-7 w-7" aria-hidden />
                </div>
                <h2 className="m-0 mb-2 font-bold font-sans text-[22px] text-fg1">
                  Request received
                </h2>
                <p className="m-0 font-sans text-[15px] text-fg2">
                  We will reach out within one business day.
                </p>
              </div>
            ) : (
              <form name="contact-page" noValidate onSubmit={onSubmit}>
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  <Field
                    name="name"
                    label="Name"
                    required
                    placeholder="Jordan Reyes"
                    error={errors.name}
                  />
                  <Field
                    name="email"
                    label="Email"
                    required
                    type="email"
                    placeholder="you@company.com"
                    error={errors.email}
                  />
                  <Field
                    name="phone"
                    label="Phone number"
                    placeholder="+1 555 000 0000"
                  />
                  <Field
                    name="company"
                    label="Company website"
                    placeholder="https://company.com"
                  />
                </div>

                <div className="mt-3.5">
                  <Field
                    name="message"
                    label="Tell us a little about your project"
                    placeholder="Describe your project briefly"
                    textarea
                  />
                </div>

                <input type="hidden" name="budget" value={budget} />
                <div className="mt-3.5">
                  <label className="flex flex-col gap-[7px]">
                    <span className="font-sans font-semibold text-[13px] text-fg2">
                      Select your budget
                    </span>
                    <div className="relative">
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className={cn(
                          fieldClass,
                          "cursor-pointer appearance-none pr-10",
                          !budget && "text-fg3",
                        )}
                      >
                        <option value="">Select a budget</option>
                        {BUDGETS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        className="-translate-y-1/2 pointer-events-none absolute top-1/2 right-3 h-4 w-4 text-fg3"
                        aria-hidden
                      />
                    </div>
                  </label>
                </div>

                <div className="mt-3.5">
                  <Field
                    name="hearAbout"
                    label="Where did you hear about us?"
                    placeholder="How did you hear about us?"
                  />
                </div>

                <div className="mt-6">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full justify-center tracking-wide"
                  >
                    Book a discovery call
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  placeholder,
  textarea,
  type = "text",
  required,
  error,
}: {
  name: string;
  label: string;
  placeholder: string;
  textarea?: boolean;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  const fieldId = useId();

  return (
    <label htmlFor={fieldId} className="flex flex-col gap-[7px]">
      <span className="font-sans font-semibold text-[13px] text-fg2">
        {label}
        {required ? <span className="text-tangerine-500"> *</span> : null}
      </span>
      {textarea ? (
        <textarea
          id={fieldId}
          name={name}
          rows={4}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          className={cn(
            fieldClass,
            "resize-none",
            error && "border-[var(--danger)]",
          )}
        />
      ) : (
        <input
          id={fieldId}
          name={name}
          type={type}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          className={cn(fieldClass, error && "border-[var(--danger)]")}
        />
      )}
      {error ? (
        <span className="font-sans text-[12px] text-[var(--danger)]">
          {error}
        </span>
      ) : null}
    </label>
  );
}
