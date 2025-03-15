
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mohammed Salmoun",
    role: "Team Leader, Enactus EMI",
    quote: "The journey to Kazakhstan taught us that determination and innovation can overcome any challenge. We're proud to bring back the Vice World Champion title to Morocco.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&crop=faces&fit=crop"
  },
  {
    id: 2,
    name: "Aya EL BOUZIDI",
    role: "EPIC Project Manager, Enactus EMI",
    quote: "EPIC was not just a project it was a dream that we built with passion and hard work. From struggling to standing on the world stage, this experience showed me that nothing is impossible with the right team and mindset.",
    image: "/public/bouzidi.jpeg"
  },
  {
    id: 3,
    name: "Youssef El Amrani",
    role: "Technical Lead, Enactus EMI",
    quote: "At the World Cup, our presentation showcased how innovation and entrepreneurship can solve complex social challenges. The judges were impressed by our scalable solutions.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&crop=faces&fit=crop"
  },
  {
    id: 4,
    name: "Amine Bensouda",
    role: "Marketing Director, Enactus EMI",
    quote: "The competition in Kazakhstan was fierce, but our team's passion and dedication to our mission shone through. Being Vice World Champion validates our approach.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&crop=faces&fit=crop"
  }
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-block px-3 py-1 bg-enactus-yellow/20 text-enactus-black dark:text-enactus-yellow rounded-full text-sm font-medium mb-3"
          >
            Team Voices
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4 text-enactus-black dark:text-white"
          >
            World Cup 2024 Experience
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="max-w-2xl mx-auto text-muted-foreground"
          >
            Hear from our team members who represented Enactus EMI at the World Cup in Kazakhstan
          </motion.p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl bg-card shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <motion.div
                key={`testimonial-image-${current}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-square md:aspect-auto"
              >
                <img 
                  src={testimonials[current].image} 
                  alt={testimonials[current].name}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent md:bg-gradient-to-r md:from-black/70 md:via-black/20 md:to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 md:hidden">
                  <div className="text-white">
                    <h3 className="font-bold text-xl">{testimonials[current].name}</h3>
                    <p className="text-sm text-white/80">{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                key={`testimonial-content-${current}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="p-8 md:p-12 flex flex-col justify-center"
              >
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-enactus-yellow fill-enactus-yellow" />
                  ))}
                </div>
                <blockquote className="text-lg md:text-xl mb-8 text-foreground italic">
                  "{testimonials[current].quote}"
                </blockquote>
                <div className="hidden md:block">
                  <h3 className="font-bold text-xl text-foreground">{testimonials[current].name}</h3>
                  <p className="text-muted-foreground">{testimonials[current].role}</p>
                </div>
              </motion.div>
            </div>
          </div>
          
          <div className="flex justify-between mt-8">
            <button 
              onClick={prev}
              className="p-3 rounded-full bg-card hover:bg-enactus-yellow/20 border border-border transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current 
                      ? "bg-enactus-yellow w-6" 
                      : "bg-muted hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={next}
              className="p-3 rounded-full bg-card hover:bg-enactus-yellow/20 border border-border transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
