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
    name: "Ihab Bokal ",
    role: "Team Leader 2024, Enactus EMI",
    quote: "The journey to Kazakhstan taught us that determination and innovation can overcome any challenge. We're proud to bring back the Vice World Champion title to Morocco.",
    image: "/bokal.jpeg"
  },
  {
    id: 2,
    name: "Aya EL BOUZIDI",
    role: "EPIC Project Manager, Enactus EMI",
    quote: "EPIC was not just a project it was a dream that we built with passion and hard work. From struggling to standing on the world stage, this experience showed me that nothing is impossible with the right team and mindset.",
    image: "/bouzidi.jpeg"
  },
  {
    id: 3,
    name: "ILyas SEHAKI",
    role: "ALUMNI, Enactus EMI",
    quote: "As ALUMNI at Enactus EMI, I’m beyond proud to see us bring the trophy back a decade after our 2014 win. Being part of this journey and contributing to something so impactful has been an unforgettable honor",
    image: "/sehaki.jpeg"
  },
  {
    id: 4,
    name: "Yahya Benaatouch",
    role: "Head of the conception Team, Enactus EMI",
    quote: "Because the most valuable prize of all was never something you could hold in your hands, it was the people who stood beside you, every step of the way.",
    image: "/yahya.jpeg"
  },
  {
    id: 5,
    name: "Zainab Hssaini",
    role: "Member of the presentation Cell, Enactus EMI",
    quote: "Contributing to the success of our team through the presentation cell was an honor. Representing Morocco at the Enactus World Cup 2024 and finishing as world vice champions with EPIC was truly unforgettable!",
    image: "/zinab.jpeg"
  },
  {
    id: 6,
    name: " Marouane MANAOUI-TEMSAMANI ",
    role: "Member of the presentation Cell, Enactus EMI",
    quote: "We’re proud to be Vice Champions at the Enactus World Cup in Kazakhstan! This journey, alongside 33 countries, showcased the power of innovation, teamwork, and resilience.",
    image: "/marouane.jpeg"
  },
  {
    id: 7,
    name: "Fatima-Ezzahra Ghzou",
    role: "Member of the presentation Cell, Enactus EMI",
    quote: "Working on EPIC was a transformative journey. In one year, we turned an idea into something real. Through challenges and perseverance, we rose to become national champions and proud international runners-up.",
    image: "/fati.jpeg"
  },
  {
    id: 8,
    name: "Aya Fathi",
    role: "Member of the presentation Cell, Enactus EMI",
    quote: "At the World Cup, our presentation showcased how innovation and entrepreneurship can solve complex social challenges. The judges were impressed by our scalable solutions.",
    image: "/fathi.jpeg"
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
                className="relative w-full h-[400px] md:h-[500px]"
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
