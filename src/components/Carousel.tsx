import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    image: "/placeholder.svg",
    title: "Welcome to IIT Bhilai",
    description: "Nurturing Innovation and Excellence",
  },
  {
    image: "/placeholder.svg",
    title: "World-Class Research",
    description: "Pushing the boundaries of technology",
  },
  {
    image: "/placeholder.svg",
    title: "Campus Life",
    description: "A vibrant community of learners",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((curr) => (curr - 1 + slides.length) % slides.length);
  const next = () => setCurrent((curr) => (curr + 1) % slides.length);

  return (
    <div className="relative h-[400px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === current ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ transform: `translateX(${100 * (index - current)}%)` }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
            <p className="text-lg">{slide.description}</p>
          </div>
        </div>
      ))}
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={prev}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={next}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default Carousel;