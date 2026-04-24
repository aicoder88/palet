"use client";

import { useState } from "react";
import { CheckCircle, AlertCircle, Clock } from "lucide-react";
import { motion } from "framer-motion";

const PRODUCT_OPTIONS = [
  "EPAL / euro palete 1200×800",
  "Industrijske palete (standardne)",
  "Palete po mjeri (nestandardne dimenzije)",
  "Polovne EUR palete — kupnja",
  "Otkup polovnih paleta",
  "Drveni elementi / kocke / poklopci",
  "Biomasa (piljevina, kora, okrajci)",
  "Građevinska drvena građa",
  "ISPM-15 termičko tretiranje",
  "Ostalo",
];

type Form = {
  company: string;
  contact: string;
  email: string;
  phone: string;
  productType: string;
  volumeMonthly: string;
  deliveryLocation: string;
  deliveryDate: string;
  specNotes: string;
};

const initial: Form = {
  company: "",
  contact: "",
  email: "",
  phone: "",
  productType: "",
  volumeMonthly: "",
  deliveryLocation: "",
  deliveryDate: "",
  specNotes: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<Form>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.company.trim()) e.company = "Naziv tvrtke je obavezan";
    if (!form.contact.trim()) e.contact = "Ime i prezime je obavezno";
    if (!form.email.trim()) e.email = "Email adresa je obavezna";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Unesite ispravnu email adresu";
    if (!form.productType) e.productType = "Odaberite vrstu proizvoda";
    if (!form.volumeMonthly.trim())
      e.volumeMonthly = "Unesite okvirni volumen (paleta / mj.)";
    if (!form.deliveryLocation.trim())
      e.deliveryLocation = "Unesite odredište isporuke (grad / zemlja)";
    return e;
  };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/rfq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("submit_failed");
      setSubmitted(true);
    } catch {
      setSubmitError(
        "Tehnički problem pri slanju. Molimo pošaljite upit na ponude@slisuric.hr ili nas nazovite."
      );
    } finally {
      setLoading(false);
    }
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 bg-white dark:bg-[#162B1E] text-[#1A1A14] dark:text-[#EDE8E0] placeholder:text-muted-foreground focus:outline-none focus:ring-2 ${
      errors[field]
        ? "border-red-400 focus:ring-red-200"
        : "border-[#E2D9CC] dark:border-[#2A4035] focus:ring-[#1C3A2A]/20 dark:focus:ring-[#C8A87A]/20 focus:border-[#1C3A2A] dark:focus:border-[#C8A87A]"
    }`;

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-14 px-6"
      >
        <div className="w-20 h-20 rounded-full bg-[#1C3A2A]/10 dark:bg-[#C8A87A]/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-[#1C3A2A] dark:text-[#C8A87A]" />
        </div>
        <h3 className="text-2xl font-bold text-[#1A1A14] dark:text-[#EDE8E0] mb-3">
          Hvala, upit je zaprimljen.
        </h3>
        <p className="text-muted-foreground text-base max-w-md mx-auto leading-relaxed">
          Kontaktiramo vas na{" "}
          <strong className="text-[#1C3A2A] dark:text-[#C8A87A]">
            {form.email}
          </strong>{" "}
          s konkretnom ponudom u roku 24 sata.
        </p>
        <button
          onClick={() => {
            setForm(initial);
            setSubmitted(false);
          }}
          className="mt-8 px-5 py-2.5 rounded-lg border border-[#1C3A2A] dark:border-[#C8A87A] text-[#1C3A2A] dark:text-[#C8A87A] text-sm font-semibold hover:bg-[#1C3A2A] hover:text-white dark:hover:bg-[#C8A87A] dark:hover:text-[#1C3A2A] transition-all"
        >
          Novi upit
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="space-y-5">
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#1C3A2A]/5 dark:bg-[#C8A87A]/10 text-[#1C3A2A] dark:text-[#C8A87A] text-xs font-semibold">
        <Clock className="w-3.5 h-3.5" />
        Odgovor na upit u 24 h · SLA pisani
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field
          label="Naziv tvrtke"
          required
          name="company"
          value={form.company}
          onChange={onChange}
          placeholder="npr. Horvat d.o.o."
          error={errors.company}
          cls={inputClass("company")}
        />
        <Field
          label="Osoba za kontakt"
          required
          name="contact"
          value={form.contact}
          onChange={onChange}
          placeholder="Ime i prezime"
          error={errors.contact}
          cls={inputClass("contact")}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field
          label="Email"
          required
          type="email"
          name="email"
          value={form.email}
          onChange={onChange}
          placeholder="nabava@tvrtka.hr"
          error={errors.email}
          cls={inputClass("email")}
        />
        <Field
          label="Telefon (opcionalno)"
          type="tel"
          name="phone"
          value={form.phone}
          onChange={onChange}
          placeholder="+385 91 …"
          cls={inputClass("phone")}
        />
      </div>

      <div>
        <Label text="Vrsta proizvoda / usluge" required />
        <select
          name="productType"
          value={form.productType}
          onChange={onChange}
          className={inputClass("productType")}
        >
          <option value="">— Odaberite —</option>
          {PRODUCT_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        {errors.productType && <Err msg={errors.productType} />}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field
          label="Volumen / mjesec"
          required
          name="volumeMonthly"
          value={form.volumeMonthly}
          onChange={onChange}
          placeholder="npr. 800 paleta"
          error={errors.volumeMonthly}
          cls={inputClass("volumeMonthly")}
        />
        <Field
          label="Odredište isporuke"
          required
          name="deliveryLocation"
          value={form.deliveryLocation}
          onChange={onChange}
          placeholder="Grad, zemlja"
          error={errors.deliveryLocation}
          cls={inputClass("deliveryLocation")}
        />
      </div>

      <Field
        label="Željeni rok isporuke (opcionalno)"
        type="date"
        name="deliveryDate"
        value={form.deliveryDate}
        onChange={onChange}
        cls={inputClass("deliveryDate")}
      />

      <div>
        <Label text="Specifikacija / napomena" />
        <textarea
          name="specNotes"
          value={form.specNotes}
          onChange={onChange}
          rows={4}
          placeholder="Dimenzije, nosivost, ISPM-15 potreban, dokumentacija, pakiranje, incoterm…"
          className={inputClass("specNotes")}
        />
      </div>

      {submitError && (
        <div className="flex items-start gap-2 p-3 rounded-lg bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-300 text-xs">
          <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
          {submitError}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#1C3A2A] dark:bg-[#C8A87A] text-white dark:text-[#1C3A2A] font-bold text-base hover:scale-[1.01] shadow-lg disabled:opacity-70 disabled:hover:scale-100 transition-all"
      >
        {loading ? "Šalje se…" : "Pošalji upit za ponudu"}
      </button>
      <p className="text-center text-xs text-muted-foreground">
        Odgovaramo unutar 24 radnih sati. Podaci se koriste isključivo za izradu
        ponude.
      </p>
    </form>
  );
}

function Label({ text, required }: { text: string; required?: boolean }) {
  return (
    <label className="block text-xs font-semibold text-[#1A1A14] dark:text-[#EDE8E0] uppercase tracking-wide mb-1.5">
      {text} {required && <span className="text-red-500">*</span>}
    </label>
  );
}

function Err({ msg }: { msg: string }) {
  return (
    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
      <AlertCircle className="w-3 h-3" /> {msg}
    </p>
  );
}

type FieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  error?: string;
  cls: string;
};

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  error,
  cls,
}: FieldProps) {
  return (
    <div>
      <Label text={label} required={required} />
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cls}
      />
      {error && <Err msg={error} />}
    </div>
  );
}
