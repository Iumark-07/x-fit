
import React, { useEffect, useRef } from "react";

const FounderStory = () => {
  const quoteRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    quoteRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      quoteRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="founder-story" className="bg-xfit-black section-padding relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=1374&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.2)",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="relative">
            Built From the Ground Up
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-xfit-red"></span>
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden neon-border-cyan">
              <img
                src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1287&auto=format&fit=crop"
                alt="Umar Khitab training"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="space-y-12">
            <div
              ref={(el) => (quoteRefs.current[0] = el)}
              className="opacity-0 transition-opacity duration-1000 ease-in-out"
            >
              <p className="text-2xl md:text-3xl font-poppins leading-relaxed italic">
                "Not born in a gym. Raised on{" "}
                <span className="neon-text-red">cracked concrete</span>."
              </p>
            </div>

            <div
              ref={(el) => (quoteRefs.current[1] = el)}
              className="opacity-0 transition-opacity duration-1000 ease-in-out delay-300"
            >
              <p className="text-2xl md:text-3xl font-poppins leading-relaxed italic">
                "When systems failed me, I built one. This is{" "}
                <span className="neon-text-cyan">Project X-Fit</span>."
              </p>
            </div>

            <div
              ref={(el) => (quoteRefs.current[2] = el)}
              className="opacity-0 transition-opacity duration-1000 ease-in-out delay-500"
            >
              <p className="text-2xl md:text-3xl font-poppins leading-relaxed italic">
                "Fitness isn't about looking perfect. It's about feeling{" "}
                <span className="neon-text-cyan">powerful</span>."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;
