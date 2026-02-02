import React from "react";
import { Send, Mail, Phone, ArrowRight } from "lucide-react";

const CTASection = ({ onApply, onPartner }) => {
  return (
    <section
      id="apply"
      aria-labelledby="cta-heading"
      className="py-16 md:py-32 bg-slate-900 relative overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700">
              <span className="text-xs sm:text-sm font-semibold text-white">
                Ready to Build Something Amazing?
              </span>
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="mb-8 sm:mb-10">
            <h2
              id="cta-heading"
              className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Have an idea? <br />
              <span className="text-blue-500">Let's validate it.</span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto">
            Join the next generation of successful founders. Apply to RGES
            Innovation Hub and turn your idea into a fundable startup.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-16">
            <button
              onClick={onApply}
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-500 transition-colors duration-200"
            >
              Apply as Founder
            </button>

            <button
              onClick={onPartner}
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-white rounded-xl font-bold border border-slate-700 hover:bg-slate-800 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              Partner with Us
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Contact Info Card */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 md:p-10 shadow-xl">
            <div className="text-center mb-6 sm:mb-8">
              <h3
                className="text-lg sm:text-xl font-bold text-white mb-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Have Questions?
              </h3>
              <p className="text-slate-400 text-sm sm:text-base">
                We're here to help!
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Email */}
              <a
                href="mailto:hello@rgesinnovationhub.com"
                className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="text-left overflow-hidden min-w-0 flex-1">
                  <div className="text-xs text-slate-500 mb-0.5 uppercase tracking-wider font-semibold">
                    Email us
                  </div>
                  <div className="text-sm text-white font-medium truncate sm:whitespace-normal sm:break-all">
                    service@rgesinnovationhub.com
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+91 83097 21921"
                className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-slate-500 mb-0.5 uppercase tracking-wider font-semibold">
                    Call us
                  </div>
                  <div className="text-sm text-white font-medium">
                    +91 83097 21921
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
