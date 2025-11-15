"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { RiSendPlane2Fill } from "react-icons/ri";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data?.error || "Failed to send message.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="space-y-4 rounded-3xl border border-slate-800/60 bg-slate-900/40 p-8 shadow-[0_15px_80px_rgba(15,23,42,0.7)] backdrop-blur"
    >
      <div>
        <label
          htmlFor="name"
          className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, name: event.target.value }))
          }
          className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-white outline-none focus:border-accent"
          placeholder="Jane Doe"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, email: event.target.value }))
          }
          className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-white outline-none focus:border-accent"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, message: event.target.value }))
          }
          className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-white outline-none focus:border-accent"
          placeholder="Tell me about your next opportunity..."
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-accent to-accent-2 px-6 py-3 font-semibold text-slate-900 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
        <RiSendPlane2Fill />
      </button>
      {status === "success" && (
        <p className="text-sm text-emerald-400">Message sent! Talk soon.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-rose-400">
          {errorMessage || "Could not send your message."}
        </p>
      )}
    </motion.form>
  );
};

export default ContactForm;
