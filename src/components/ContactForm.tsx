"use client";

import { useState } from "react";
import { CheckCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PRODUCT_OPTIONS = [
  "Euro / EPAL palete",
  "Industrijske palete (standardne)",
  "Palete po narudžbi (nestandardne dimenzije)",
  "Polovne palete — kupnja",
  "Otkup polovnih paleta",
  "Drveni elementi za palete",
  "Biomasa (piljevina, kora, okrajci)",
  "Građevinska drvena građa",
  "Termičko tretiranje ISPM-15",
  "Brušenje alata",
  "Ostalo",
];

function getPriceHint(type: string, qty: string): string | null {
  if (!type || !qty) return null;
  const q = parseInt(qty);
  if (isNaN(q) || q <= 0) return null;

  if (type.includes("EPAL") || type.includes("Euro")) {
    if (q < 50) return "Okvirna cijena: 12–16 € / paleta";
    if (q < 200) return "Okvirna cijena: 10–13 € / paleta (količinski popust)";
    return "Okvirna cijena: 9–12 € / paleta (veleprodaja)";
  }
  if (type.includes("Industrijske") || type.includes("standardne")) {
    return "Okvirna cijena: 14–22 € / paleta (ovisi o tipu)";
  }
  if (type.includes("narudžbi") || type.includes("nestandardne")) {
    return "Cijena na upit — molimo unesite dimenzije ispod";
  }
  if (type.includes("Polovne")) {
    return "Okvirna cijena: 4–8 € / paleta";
  }
  if (type.includes("Biomasa")) {
    return "Okvirna cijena: 80–120 € / tona";
  }
  return "Kontaktirat ćemo vas s okvirnom cijenom unutar 2 sata.";
}

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    oib: "",
    email: "",
    phone: "",
    productType: "",
    quantity: "",
    dimensions: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const priceHint = getPriceHint(form.productType, form.quantity);
  const needsDimensions = form.productType.includes("narudžbi") || form.productType.includes("nestandardne");

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Ime i prezime je obavezno";
    if (!form.company.trim()) newErrors.company = "Naziv tvrtke je obavezan";
    if (!form.email.trim()) newErrors.email = "Email adresa je obavezna";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Unesite ispravnu email adresu";
    if (!form.phone.trim()) newErrors.phone = "Broj telefona je obavezan";
    else if (!/^[\+]?[\d\s\-\(\)]{8,}$/.test(form.phone))
      newErrors.phone = "Unesite ispravan broj telefona";
    if (!form.productType) newErrors.productType = "Odaberite vrstu proizvoda";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 bg-white dark:bg-[#162B1E] text-[#1A1A14] dark:text-[#EDE8E0] placeholder:text-muted-foreground focus:outline-none focus:ring-2 ${
      errors[field]
        ? "border-red-400 focus:ring-red-200 dark:focus:ring-red-900"
        : "border-[#E2D9CC] dark:border-[#2A4035] focus:ring-[#1C3A2A]/20 dark:focus:ring-[#C8A87A]/20 focus:border-[#1C3A2A] dark:focus:border-[#C8A87A]"
    }`;

  if (submitted) {
    return (
      <motion.div
        className="text-center py-16 px-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="w-20 h-20 rounded-full bg-[#1C3A2A]/10 dark:bg-[#C8A87A]/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-[#1C3A2A] dark:text-[#C8A87A]" />
        </div>
        <h3 className="text-2xl font-bold text-[#1A1A14] dark:text-[#EDE8E0] mb-3">
          Hvala na upitu!
        </h3>
        <p className="text-muted-foreground text-base max-w-sm mx-auto leading-relaxed">
          Primili smo vaš zahtjev. Kontaktirat ćemo vas na broj{" "}
          <strong className="text-[#1C3A2A] dark:text-[#C8A87A]">
            {form.phone}
          </strong>{" "}
          unutar 2 radna sata.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({
              name: "",
              company: "",
              oib: "",
              email: "",
              phone: "",
              productType: "",
              quantity: "",
              dimensions: "",
              message: "",
            });
          }}
          className="mt-8 px-6 py-2.5 rounded-lg border border-[#1C3A2A] dark:border-[#C8A87A] text-[#1C3A2A] dark:text-[#C8A87A] text-sm font-semibold hover:bg-[#1C3A2A] dark:hover:bg-[#C8A87A] hover:text-white dark:hover:text-[#1C3A2A] transition-all duration-200"
        >
          Pošalji novi upit
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#1A1A14] dark:text-[#EDE8E0] uppercase tracking-wide mb-1.5">
            Ime i prezime <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Marko Horvat"
            className={inputClass("name")}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.name}
            </p>
          )}
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#1A1A14] dark:text-[#EDE8E0] uppercase tracking-wide mb-1.5">
            Naziv tvrtke <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Horvat d.o.o."
            className={inputClass("company")}
          />
          {errors.company && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.company}
            </p>
          )}
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#1A1A14] dark:text-[#EDE8E0] uppercase tracking-wide mb-1.5">
            OIB
          </label>
          <input
            type="text"
            name="oib"
            value={form.oib}
            onChange={handleChange}
            placeholder="12345678901"
            className={inputClass("oib")}
            maxLength={11}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#1A1A14] dark:text-[#EDE8E0] uppercase tracking-wide mb-1.5">
            Email adresa <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="marko@tvrtka.hr"
            className={inputClass("email")}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Phone — mandatory */}
      <div>
        <label className="block text-xs font-semibold text-[#1A1A14] dark:text-[#EDE8E0] uppercase tracking-wide mb-1.5">
          Broj telefona <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+385 91 234 5678"
          className={inputClass("phone")}
        />
        {errors.phone ? (
          <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.phone}
          </p>
        ) : (
          <p className="mt-1 text-xs text-muted-foreground">
            Broj telefona je obavezan — kako bismo mogli brzo potvrditi vašu
            narudžbu i zaštititi obje strane.
          </p>
        )}
      </div>

      {/* Product type */}
      <div>
        <label className="block text-xs font-semibold text-[#1A1A14] dark:text-[#EDE8E0] uppercase tracking-wide mb-1.5">
          Vrsta proizvoda / usluge <span className="text-red-500">*</span>
        </label>
        <select
          name="productType"
          value={form.productType}
          onChange={handleChange}
          className={inputClass("productType")}
        >
          <option value="">— Odaberite vrstu —</option>
          {PRODUCT_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.productType && (
          <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.productType}
          </p>
        )}
      </div>

      {/* Quantity */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#1A1A14] dark:text-[#EDE8E0] uppercase tracking-wide mb-1.5">
            Količina (kom / m³ / kg)
          </label>
          <input
            type="text"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            placeholder="npr. 500"
            className={inputClass("quantity")}
          />
        </div>
        {needsDimensions && (
          <div>
            <label className="block text-xs font-semibold text-[#1A1A14] dark:text-[#EDE8E0] uppercase tracking-wide mb-1.5">
              Dimenzije (D × Š × V, mm)
            </label>
            <input
              type="text"
              name="dimensions"
              value={form.dimensions}
              onChange={handleChange}
              placeholder="npr. 1200 × 1000 × 145"
              className={inputClass("dimensions")}
            />
          </div>
        )}
      </div>

      {/* Price hint */}
      <AnimatePresence>
        {priceHint && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#1C3A2A]/5 dark:bg-[#C8A87A]/10 border border-[#1C3A2A]/15 dark:border-[#C8A87A]/20">
              <div className="w-5 h-5 rounded-full bg-[#1C3A2A] dark:bg-[#C8A87A] flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white dark:text-[#1C3A2A] text-xs font-bold">€</span>
              </div>
              <div>
                <div className="text-xs font-semibold text-[#1C3A2A] dark:text-[#C8A87A] uppercase tracking-wide mb-0.5">
                  Okvirna cijena
                </div>
                <div className="text-sm text-[#1A1A14] dark:text-[#EDE8E0]">
                  {priceHint}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-[#1A1A14] dark:text-[#EDE8E0] uppercase tracking-wide mb-1.5">
          Napomena / Poruka
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Dodatne napomene, posebni zahtjevi, rok isporuke..."
          className={inputClass("message")}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#1C3A2A] dark:bg-[#C8A87A] text-white dark:text-[#1C3A2A] font-bold text-base transition-all duration-200 hover:bg-[#2A5040] dark:hover:bg-[#D4B488] hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 dark:border-[#1C3A2A]/30 border-t-white dark:border-t-[#1C3A2A] rounded-full animate-spin" />
            Šalje se...
          </>
        ) : (
          "Pošalji upit →"
        )}
      </button>

      <p className="text-center text-xs text-muted-foreground">
        Odgovaramo unutar 2 radna sata. Vaši podaci su sigurni i neće biti
        proslijeđeni trećim stranama.
      </p>
    </form>
  );
}
