"use client";

import type React from "react";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { AnimatedButton } from "@/components/ui/animated-button";
import {
  Mail,
  Phone,
  MapPin,
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    companyWebsite: "",
    projectSummary: "",
  });

  const totalSteps = 5;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName && formData.lastName && formData.email;
      case 2:
        return formData.companyName;
      case 3:
        return formData.projectSummary;
      default:
        return true;
    }
  };

  const StepIndicator = ({
    step,
    isActive,
    isCompleted,
  }: {
    step: number;
    isActive: boolean;
    isCompleted: boolean;
  }) => (
    <div className="flex items-center">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
          isActive
            ? "bg-purple-600 text-white"
            : isCompleted
            ? "bg-purple-500 text-white"
            : "bg-gray-600 text-gray-300"
        }`}
      >
        {step}
      </div>
      {step < totalSteps && (
        <div
          className={`w-16 h-0.5 mx-2 transition-colors ${
            isCompleted ? "bg-purple-500" : "bg-gray-600"
          }`}
        />
      )}
    </div>
  );

  return (
    <section
      id="contact"
      className="py-24 px-6 min-h-screen flex items-center"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent underline decoration-purple-400 underline-offset-4">
              Great Together
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-morphism rounded-3xl p-8 md:p-12"
        >
          {/* Step Indicator */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((step) => (
                <StepIndicator
                  key={step}
                  step={step}
                  isActive={currentStep === step}
                  isCompleted={currentStep > step}
                />
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-white mb-8">
                  Basic Information
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 pt-6 pb-3 rounded-lg bg-gray-800/50 border border-gray-600 text-white placeholder-transparent focus:outline-none focus:border-purple-400 transition-colors peer"
                      placeholder="John"
                      required
                    />
                    <label className="absolute left-4 top-2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-400">
                      First Name <span className="text-red-400">*</span>
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 pt-6 pb-3 rounded-lg bg-gray-800/50 border border-gray-600 text-white placeholder-transparent focus:outline-none focus:border-purple-400 transition-colors peer"
                      placeholder="Doe"
                      required
                    />
                    <label className="absolute left-4 top-2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-400">
                      Last Name <span className="text-red-400">*</span>
                    </label>
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 pt-6 pb-3 rounded-lg bg-gray-800/50 border border-gray-600 text-white placeholder-transparent focus:outline-none focus:border-purple-400 transition-colors peer"
                    placeholder="john@example.com"
                    required
                  />
                  <label className="absolute left-4 top-2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-400">
                    Email <span className="text-red-400">*</span>
                  </label>
                </div>
              </motion.div>
            )}

            {/* Step 2: Company Information */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-white mb-8">
                  Company Information
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company Website
                    </label>
                    <input
                      type="url"
                      name="companyWebsite"
                      value={formData.companyWebsite}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                      placeholder="https://yourcompany.com"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Project Details */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-white mb-8">
                  Project Details
                </h3>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Summary
                  </label>
                  <textarea
                    name="projectSummary"
                    value={formData.projectSummary}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                    placeholder="Tell us about your evaluation needs and project requirements..."
                  />
                </div>
              </motion.div>
            )}

            {/* Step 4: Additional Information */}
            {currentStep === 4 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-white mb-8">
                  Additional Information
                </h3>

                <div className="text-center py-12">
                  <p className="text-gray-300 text-lg">
                    We'll gather additional details in our follow-up
                    conversation.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Step 5: Review */}
            {currentStep === 5 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-white mb-8">
                  Review & Submit
                </h3>

                <div className="space-y-4 bg-gray-800/30 rounded-lg p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <span className="text-gray-400">Name:</span>
                      <span className="text-white ml-2">
                        {formData.firstName} {formData.lastName}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400">Email:</span>
                      <span className="text-white ml-2">{formData.email}</span>
                    </div>
                  </div>
                  {formData.companyName && (
                    <div>
                      <span className="text-gray-400">Company:</span>
                      <span className="text-white ml-2">
                        {formData.companyName}
                      </span>
                    </div>
                  )}
                  {formData.projectSummary && (
                    <div>
                      <span className="text-gray-400">Project Summary:</span>
                      <p className="text-white mt-2">
                        {formData.projectSummary}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-12">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                  currentStep === 1
                    ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                    : "bg-gray-700 text-white hover:bg-gray-600"
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>

              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  className={`flex items-center gap-2 px-8 py-3 rounded-lg transition-colors ${
                    isStepValid()
                      ? "bg-purple-600 text-white hover:bg-purple-700"
                      : "bg-gray-600 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Continue
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button type="submit" className="w-full">
                  <AnimatedButton variant="primary">
                    Submit Project
                  </AnimatedButton>
                </button>
              )}
            </div>
          </form>
        </motion.div>

        {/* Contact Info - Moved to bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-8 mt-16"
        >
          <div className="glass-morphism p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-white font-medium">Email</div>
                  <div className="text-gray-300">admin@evalucircle.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-white font-medium">Phone</div>
                  <div className="text-gray-300">+263 775332497</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-white font-medium">Office</div>
                  <div className="text-gray-300">1 Zimre Way Mandara</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-morphism p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center hover:bg-purple-500/30 transition-colors"
              >
                <TwitterIcon className="w-6 h-6 text-purple-400" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center hover:bg-purple-500/30 transition-colors"
              >
                <LinkedinIcon className="w-6 h-6 text-purple-400" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center hover:bg-purple-500/30 transition-colors"
              >
                <GithubIcon className="w-6 h-6 text-purple-400" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
