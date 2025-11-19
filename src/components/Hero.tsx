import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  const scrollToWorks = () => {
    const element = document.getElementById("works");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1695067438561-75492f7b6a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjMzODQwMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Modern architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Large KAF Text */}
        <h1 
          className="text-white tracking-wider mb-8"
          style={{ fontSize: "clamp(5rem, 15vw, 12rem)" }}
        >
          KAF
        </h1>

        <p className="text-white/90 max-w-2xl mx-auto mb-4 text-lg md:text-xl">
          Building Dreams, Creating Landmarks
        </p>

        <p className="text-white/80 max-w-2xl mx-auto mb-8">
          We create architectural excellence through innovative design, sustainable practices, and a commitment to transforming visions into reality.
        </p>

        <motion.button
          onClick={scrollToWorks}
          className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 hover:bg-neutral-200 transition-all hover:gap-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Our Work
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
    </section>
  );
}
