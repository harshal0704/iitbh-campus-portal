import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    image: "/placeholder.svg",
    title: "Welcome to IIT Bhilai",
    description: "Nurturing Innovation and Excellence",
    gradient: "from-blue-600/80 to-purple-600/80",
  },
  {
    image: "/placeholder.svg",
    title: "World-Class Research",
    description: "Pushing the boundaries of technology",
    gradient: "from-orange-600/80 to-red-600/80",
  },
  {
    image: "/placeholder.svg",
    title: "Campus Life",
    description: "A vibrant community of learners",
    gradient: "from-green-600/80 to-teal-600/80",
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
    <div className="relative h-[500px] overflow-hidden group">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === current ? "translate-x-0" : index < current ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 translate-y-0 hover:-translate-y-2">
            <h2 className="text-4xl font-bold mb-4 text-white animate-fade-in">{slide.title}</h2>
            <p className="text-xl text-white/90 animate-fade-in delay-100">{slide.description}</p>
          </div>
        </div>
      ))}
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        onClick={handlePrev}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        onClick={handleNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === current ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;