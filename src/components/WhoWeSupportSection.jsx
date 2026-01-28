import React, { useState } from "react";
import { GraduationCap, Lightbulb, Users, Zap } from "lucide-react";

const WhoWeSupportSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const supporters = [
    {
      icon: Lightbulb,
      title: "First-Time Entrepreneurs",
      description:
        "Guidance for founders taking their first leap into entrepreneurship.",
    },
    {
      icon: GraduationCap,
      title: "Student Founders",
      description:
        "Support for students building startups while pursuing their education.",
    },
    {
      icon: Users,
      title: "Early-Stage Innovators",
      description: "Resources for teams in the ideation and validation phases.",
    },
    {
      icon: Zap,
      title: "Zero-to-One Builders",
      description:
        "Tools and mentorship for founders creating something from nothing.",
    },
  ];

  return (
    <section
      aria-labelledby="support-heading"
      className="py-20 md:py-32 bg-white border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2
            id="support-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Who We Support
          </h2>
          <p
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            We're here for dreamers, builders, and innovators at the start of
            their journey.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {supporters.map((supporter, index) => {
            const Icon = supporter.icon;
            const isHovered = hoveredCard === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group p-8 rounded-2xl bg-slate-50 hover:bg-slate-900 transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300
                    ${isHovered ? "bg-white/10 text-white" : "bg-white text-slate-900 border border-slate-200"}`}
                >
                  <Icon className="w-7 h-7" />
                </div>

                <h3
                  className={`text-xl font-bold mb-3 transition-colors duration-300
                  ${isHovered ? "text-white" : "text-slate-900"}`}
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {supporter.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed transition-colors duration-300
                    ${isHovered ? "text-slate-300" : "text-slate-600"}`}
                >
                  {supporter.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeSupportSection;
