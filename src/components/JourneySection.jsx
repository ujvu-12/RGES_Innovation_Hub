import React, { useState } from "react";
import {
  Lightbulb,
  Search,
  Users,
  Rocket,
  TrendingUp,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

const JourneySection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const journeySteps = [
    {
      icon: Lightbulb,
      title: "Idea Discovery",
      description:
        "Identify problems worth solving and validate market opportunities.",
    },
    {
      icon: Search,
      title: "Market Validation",
      description:
        "Test your assumptions, understand your customers, and refine your value proposition.",
    },
    {
      icon: Users,
      title: "Mentorship & Strategy",
      description:
        "Get guidance from experienced founders and build your go-to-market strategy.",
    },
    {
      icon: Rocket,
      title: "MVP & Early Traction",
      description:
        "Build your minimum viable product and acquire your first customers.",
    },
    {
      icon: TrendingUp,
      title: "Funding & Growth",
      description:
        "Become investment-ready and secure funding to scale your startup.",
    },
  ];

  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-16 sm:mb-24 text-center max-w-3xl mx-auto">
          <h2
            id="journey-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Your Zero-to-One Journey
          </h2>
          <p
            className="text-lg md:text-xl text-slate-600 leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            A structured path from idea to fundable startup, designed for
            first-time founders.
          </p>
        </div>

        {/* Desktop View - Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Progress Line Background */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-slate-200"></div>

            {/* Active Progress Line */}
            <div
              className="absolute top-8 left-0 h-0.5 bg-slate-900 transition-all duration-500 ease-in-out"
              style={{
                width: `${(activeStep / (journeySteps.length - 1)) * 100}%`,
              }}
            ></div>

            {/* Steps */}
            <div className="grid grid-cols-5 relative z-10">
              {journeySteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === activeStep;
                const isPassed = index <= activeStep;

                return (
                  <div
                    key={index}
                    className="relative flex flex-col items-center cursor-pointer group"
                    onClick={() => setActiveStep(index)}
                  >
                    {/* Icon Circle */}
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300 mb-8 bg-white
                        ${isPassed ? "border-slate-900 text-slate-900" : "border-slate-200 text-slate-300 group-hover:border-slate-300"}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Content Card */}
                    <div className="text-center px-4">
                      <h3
                        className={`text-lg font-bold mb-3 transition-colors duration-300
                          ${isActive ? "text-slate-900" : "text-slate-500"}`}
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`text-sm leading-relaxed transition-colors duration-300
                        ${isActive ? "text-slate-600" : "text-slate-400"}`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile & Tablet View - Vertical Timeline */}
        <div className="lg:hidden space-y-0">
          {journeySteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={index} className="relative pl-12 pb-12 last:pb-0">
                {/* Connecting Line */}
                {index < journeySteps.length - 1 && (
                  <div className="absolute left-[22px] top-12 bottom-0 w-0.5 bg-slate-200"></div>
                )}

                {/* Icon Marker */}
                <div className="absolute left-0 top-0 w-11 h-11 rounded-full border-2 border-slate-900 bg-white flex items-center justify-center text-slate-900 z-10">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Content */}
                <div className="pt-1">
                  <h3
                    className="text-xl font-bold text-slate-900 mb-2"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-colors duration-200">
            Start Your Journey Today
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
