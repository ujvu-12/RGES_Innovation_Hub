import React, { useState } from "react";
import {
  CheckCircle,
  Users,
  BookOpen,
  DollarSign,
  Calendar,
  ArrowRight,
} from "lucide-react";

const WhatWeOfferSection = () => {
  const [activeCard, setActiveCard] = useState(null);

  const offerings = [
    {
      icon: CheckCircle,
      title: "Idea Validation",
      description:
        "Structured workshops to test your assumptions and validate product-market fit.",
      features: [
        "Customer discovery",
        "Market research",
        "Competitive analysis",
        "MVP planning",
      ],
    },
    {
      icon: Users,
      title: "Founder Mentorship",
      description:
        "1-on-1 guidance from experienced entrepreneurs who've been in your shoes.",
      features: [
        "Weekly mentor sessions",
        "Strategic planning",
        "Problem solving",
        "Network access",
      ],
    },
    {
      icon: BookOpen,
      title: "Startup Bootcamps",
      description:
        "Intensive programs covering everything from ideation to pitch preparation.",
      features: [
        "Product development",
        "Business model design",
        "Team building",
        "Go-to-market strategy",
      ],
    },
    {
      icon: DollarSign,
      title: "Investor Access",
      description:
        "Connect with angel investors, VCs, and access to funding opportunities.",
      features: [
        "Pitch deck review",
        "Investor introductions",
        "Funding readiness",
        "Cap table planning",
      ],
    },
    {
      icon: Calendar,
      title: "Demo Days",
      description:
        "Showcase your startup to investors and connect with fellow founders.",
      features: [
        "Quarterly demo days",
        "Founder meetups",
        "Industry events",
        "Community support",
      ],
    },
    {
      icon: ArrowRight,
      title: "And Much More",
      description:
        "We are constantly evolving to meet the needs of our founders.",
      features: [
        "Co-working space",
        "Legal support",
        "Cloud credits",
        "Hiring assistance",
      ],
    },
  ];

  return (
    <section
      aria-labelledby="offer-heading"
      className="py-20 md:py-32 bg-slate-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2
            id="offer-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            What We Offer
          </h2>
          <p
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Comprehensive support for every stage of your startup journey.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => {
            const Icon = offering.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 p-8 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                <h3
                  className="text-xl font-bold text-slate-900 mb-4"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {offering.title}
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed mb-6 min-h-[48px]">
                  {offering.description}
                </p>

                <ul className="space-y-3 pt-6 border-t border-slate-100">
                  {offering.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-slate-600"
                    >
                      <CheckCircle className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
