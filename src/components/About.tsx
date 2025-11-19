import { useState } from "react";
import { motion } from "motion/react";
import { Users, Award, Building2, Target } from "lucide-react";

const stats = [
  { id: 1, icon: Building2, number: 150, suffix: "+", label: "Projects Completed" },
  { id: 2, icon: Users, number: 50, suffix: "+", label: "Team Members" },
  { id: 3, icon: Award, number: 25, suffix: "+", label: "Awards Won" },
  { id: 4, icon: Target, number: 15, suffix: "", label: "Years Experience" }
];

const values = [
  {
    id: 1,
    title: "Innovation",
    description: "Pushing boundaries with cutting-edge design solutions"
  },
  {
    id: 2,
    title: "Sustainability",
    description: "Creating eco-friendly structures for a better tomorrow"
  },
  {
    id: 3,
    title: "Excellence",
    description: "Delivering exceptional quality in every project"
  },
  {
    id: 4,
    title: "Collaboration",
    description: "Working together to bring visions to life"
  }
];

export function About() {
  const [activeValue, setActiveValue] = useState(1);
  const [countersStarted, setCountersStarted] = useState(false);

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-neutral-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-black rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-black rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">About ARCHAUS</h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            We are a team of passionate architects and designers committed to creating spaces that inspire, innovate, and endure. Our multidisciplinary approach combines creativity with technical excellence.
          </p>
        </motion.div>

        {/* Interactive Stats */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }}
          viewport={{ once: true, margin: "-100px" }}
          onViewportEnter={() => setCountersStarted(true)}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Icon className="w-10 h-10 mx-auto mb-4 text-neutral-700 group-hover:scale-110 transition-transform" />
                <div className="mb-2">
                  <motion.span
                    className="inline-block"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    {countersStarted && (
                      <Counter target={stat.number} suffix={stat.suffix} />
                    )}
                  </motion.span>
                </div>
                <p className="text-neutral-600">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Interactive Values */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <h3 className="text-center mb-8">Our Core Values</h3>
          
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {values.map((value) => (
              <motion.button
                key={value.id}
                onClick={() => setActiveValue(value.id)}
                className={`p-4 rounded-lg transition-all ${
                  activeValue === value.id
                    ? "bg-black text-white"
                    : "bg-neutral-100 text-black hover:bg-neutral-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {value.title}
              </motion.button>
            ))}
          </div>

          <motion.div
            key={activeValue}
            className="text-center p-8 bg-neutral-50 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-neutral-700">
              {values.find((v) => v.id === activeValue)?.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useState(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  });

  return <>{count}{suffix}</>;
}
