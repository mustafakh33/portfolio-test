"use client";

import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  IoLocationOutline,
  IoPhonePortraitOutline,
  IoMailOutline,
  IoCheckmarkCircle,
} from "react-icons/io5";
import { contactData } from "../lib/data";
import { motion, Variants } from "framer-motion";

const ContactSection = () => {
  const { intro, address, phone, email } = contactData;
  const [state, handleSubmit] = useForm("mnnzvdjj");
  const [name, setName] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (state.succeeded) {
      setName("");
      setEmailInput("");
      setSubject("");
      setMessage("");
      const timer = setTimeout(() => {}, 5000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit(e);
  };

  const resetForm = () => {
    setName("");
    setEmailInput("");
    setSubject("");
    setMessage("");
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-light-bg py-16 px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Contact
          </h2>
          <div className="w-16 h-1 bg-primary mb-5"></div>
          <p className="text-text-secondary max-w-2xl text-lg">{intro}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="bg-primary/10 text-primary rounded-full p-3 text-2xl mr-4">
                  <IoLocationOutline />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">
                    Address
                  </h4>
                  <p className="text-text-secondary">{address}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-primary/10 text-primary rounded-full p-3 text-2xl mr-4">
                  <IoPhonePortraitOutline />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">
                    Call Us
                  </h4>
                  <p className="text-text-secondary">{phone}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-primary/10 text-primary rounded-full p-3 text-2xl mr-4">
                  <IoMailOutline />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">
                    Email Us
                  </h4>
                  <p className="text-text-secondary">{email}</p>
                </div>
              </div>
            </div>
            <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221264.444998017!2d30.73030284050293!3d29.96213768786506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145856eb5267232d%3A0x451a52c3886c5897!2s6th%20of%20October%20City%2C%20Giza%20Governorate!5e0!3m2!1sen!2seg!4v1722110168019!5m2!1sen!2seg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleFormSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text-secondary mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-transparent p-3 border-b-2 border-gray-300 focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-secondary mb-1"
                  >
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full bg-transparent p-3 border-b-2 border-gray-300 focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-text-secondary mb-1"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-transparent p-3 border-b-2 border-gray-300 focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text-secondary mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-transparent p-3 border-b-2 border-gray-300 focus:outline-none focus:border-primary transition-colors resize-vertical"
                  required
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="text-center space-y-4">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="bg-primary hover:bg-primary-dark text-text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>

                {(name || emailInput || subject || message) &&
                  !state.submitting && (
                    <button
                      type="button"
                      onClick={resetForm}
                      className="ml-4 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300"
                    >
                      Clear Form
                    </button>
                  )}
              </div>

              {state.succeeded && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center text-green-600 mt-4 flex items-center justify-center font-semibold"
                >
                  <IoCheckmarkCircle className="mr-2 text-xl" />
                  Thanks for your message! We'll get back to you soon.
                </motion.div>
              )}

              {state.errors && Object.keys(state.errors).length > 0 && (
                <div className="text-center text-red-600 mt-4">
                  <p>
                    There was an error sending your message. Please try again.
                  </p>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
