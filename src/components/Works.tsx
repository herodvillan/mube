import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const works = [
  {
    id: 1,
    title: "Modern Residence",
    description: "A stunning contemporary home that seamlessly blends indoor and outdoor living spaces. The design emphasizes natural light, sustainable materials, and a minimalist aesthetic that creates a peaceful sanctuary for modern living.",
    service: "Residential Architecture",
    image: "https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MzQ3Nzk3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Los Angeles, CA"
  },
  {
    id: 2,
    title: "Urban Complex",
    description: "An innovative commercial space in the heart of the city, designed to maximize efficiency while creating an inspiring work environment. Features include flexible workspaces, green terraces, and state-of-the-art sustainable systems.",
    service: "Commercial Architecture",
    image: "https://images.unsplash.com/photo-1548566862-2c9b1fed780a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjM0OTY5Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Chicago, IL"
  },
  {
    id: 3,
    title: "Minimalist Interior",
    description: "A complete interior transformation that exemplifies the 'less is more' philosophy. Every element serves a purpose, creating a harmonious space that balances functionality with serene beauty through careful material selection and spatial planning.",
    service: "Interior Design",
    image: "https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzYzNDE4ODc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "New York, NY"
  },
  {
    id: 4,
    title: "Luxury Residences",
    description: "A prestigious residential tower that redefines urban luxury living. The design incorporates premium finishes, panoramic views, and world-class amenities, creating an exclusive living experience that sets new standards in high-rise architecture.",
    service: "Residential Architecture",
    image: "https://images.unsplash.com/photo-1623051786509-57224cdc43e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNpZGVudGlhbCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MzQ5NDYyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Miami, FL"
  },
  {
    id: 5,
    title: "Sustainable Office",
    description: "A forward-thinking workspace designed with environmental responsibility at its core. Features solar panels, rainwater harvesting, and natural ventilation systems, proving that sustainable design can be both beautiful and functional.",
    service: "Sustainable Design",
    image: "https://images.unsplash.com/photo-1681633528883-bc217d2e4dfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwZGVzaWduJTIwc3R1ZGlvfGVufDF8fHx8MTc2MzQ4OTM1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    location: "Seattle, WA"
  }
];

export function Works() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedWork, setSelectedWork] = useState<typeof works[0] | null>(null);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % works.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + works.length) % works.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleSlides = () => {
    const prevIndex = (currentIndex - 1 + works.length) % works.length;
    const nextIndex = (currentIndex + 1) % works.length;
    return [prevIndex, currentIndex, nextIndex];
  };

  const visibleSlides = getVisibleSlides();

  return (
    <>
      <section id="works" className="py-24 bg-neutral-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">Our Works</h2>
            <p className="text-neutral-400 max-w-2xl">
              Explore our portfolio of exceptional projects. Click on any project to see more details.
            </p>
          </motion.div>
        </div>

        <div className="relative min-h-[500px] flex items-center justify-center pb-16">
          {/* Carousel Container */}
          <div className="relative w-full max-w-7xl mx-auto px-4">
            <div className="relative flex items-center justify-center">
              <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                {visibleSlides.map((slideIndex, position) => {
                  const work = works[slideIndex];
                  const isCenter = position === 1;
                  const offset = (position - 1) * 35; // -35%, 0%, 35%
                  
                  return (
                    <motion.div
                      key={work.id}
                      custom={direction}
                      initial={{ 
                        x: direction > 0 ? '100%' : '-100%',
                        opacity: 0,
                        scale: 0.8
                      }}
                      animate={{
                        x: `${offset}%`,
                        opacity: isCenter ? 1 : 0.4,
                        scale: isCenter ? 1 : 0.8,
                        zIndex: isCenter ? 10 : 5
                      }}
                      exit={{
                        x: direction > 0 ? '-100%' : '100%',
                        opacity: 0,
                        scale: 0.8
                      }}
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.3 },
                        scale: { duration: 0.3 }
                      }}
                      className="absolute w-[90%] md:w-[70%] lg:w-[60%]"
                      onClick={() => isCenter && setSelectedWork(work)}
                    >
                      <motion.div
                        className={`bg-neutral-800 rounded-2xl overflow-hidden transition-all shadow-lg ${
                          isCenter ? 'cursor-pointer' : 'pointer-events-none'
                        }`}
                        whileHover={isCenter ? { scale: 1.02, y: -10 } : {}}
                        whileTap={isCenter ? { scale: 0.98 } : {}}
                      >
                        <div className="flex flex-col md:flex-row h-full">
                          {/* Image - 1/3 */}
                          <div className="md:w-1/3 h-64 md:h-[400px] relative overflow-hidden group">
                            <ImageWithFallback
                              src={work.image}
                              alt={work.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-neutral-800/50" />
                          </div>

                          {/* Description - 2/3 */}
                          <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-between">
                            <div>
                              <div className="flex items-start justify-between mb-4">
                                <h3 className="text-white">{work.title}</h3>
                                <span className="text-neutral-400 text-sm">{work.location}</span>
                              </div>
                              <p className="text-neutral-300 mb-6 leading-relaxed line-clamp-4">
                                {work.description}
                              </p>
                            </div>

                            {/* Footer with Service */}
                            <div className="pt-6 border-t border-neutral-700">
                              <span className="text-sm text-neutral-500">Service</span>
                              <p className="text-white mt-1">{work.service}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center transition-all z-20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center transition-all z-20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Dots Indicator */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
            {works.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white w-8' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedWork(null)}
          >
            <motion.div
              className="bg-neutral-900 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative"
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedWork(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Image */}
              <div className="relative h-[300px] md:h-[400px] overflow-hidden">
                <ImageWithFallback
                  src={selectedWork.image}
                  alt={selectedWork.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h2 className="text-white mb-2">{selectedWork.title}</h2>
                    <p className="text-neutral-400">{selectedWork.location}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="text-sm text-neutral-500">Service</span>
                    <p className="text-white">{selectedWork.service}</p>
                  </div>
                </div>

                <div className="border-t border-neutral-800 pt-6">
                  <h3 className="text-white mb-4">Project Overview</h3>
                  <p className="text-neutral-300 leading-relaxed mb-6">
                    {selectedWork.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-neutral-800 rounded-lg p-6">
                    <div>
                      <span className="text-sm text-neutral-500">Year</span>
                      <p className="text-white mt-1">2024</p>
                    </div>
                    <div>
                      <span className="text-sm text-neutral-500">Duration</span>
                      <p className="text-white mt-1">12 months</p>
                    </div>
                    <div>
                      <span className="text-sm text-neutral-500">Client</span>
                      <p className="text-white mt-1">Private</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
