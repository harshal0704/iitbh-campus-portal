import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/placeholder.svg",
    title: "Welcome to IIT Bhilai",
    description: "Nurturing Innovation and Excellence",
    gradient: "from-blue-600/80 via-purple-600/60 to-pink-600/80",
  },
  {
    image: "/placeholder.svg",
    title: "World-Class Research",
    description: "Pushing the boundaries of technology",
    gradient: "from-cyan-600/80 via-blue-600/60 to-purple-600/80",
  },
  {
    image: "/placeholder.svg",
    title: "Campus Life",
    description: "A vibrant community of learners",
    gradient: "from-emerald-600/80 via-teal-600/60 to-cyan-600/80",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((curr) => (curr + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((curr) => (curr - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="relative h-[600px] overflow-hidden group rounded-xl">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={index === current ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className={`absolute inset-0 ${index === current ? "z-10" : "z-0"}`}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-black/60 to-transparent"
            >
              <h2 className="text-5xl font-bold mb-4 text-white">{slide.title}</h2>
              <p className="text-2xl text-white/90">{slide.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </AnimatePresence>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 z-20"
        onClick={handlePrev}
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 z-20"
        onClick={handleNext}
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 backdrop-blur-sm ${
              index === current ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;