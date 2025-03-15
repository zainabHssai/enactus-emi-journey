
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote as QuoteIcon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface Quote {
  id: number;
  text: string;
  author?: string;
}

const quotes: Quote[] = [
  { 
    id: 1, 
    text: "Pushing boundaries, driving changes.", 
    author: "Enactus Motto" 
  },
  { 
    id: 2, 
    text: "Once an enactor, always an enactor.", 
    author: "Enactus Community" 
  },
  { 
    id: 3, 
    text: "We don't help people in need, we empower people with potential.", 
    author: "Enactus EMI" 
  },
  { 
    id: 4, 
    text: "Success isn't just what you accomplish, but what you inspire others to do.", 
    author: "Enactus Leader" 
  },
  { 
    id: 5, 
    text: "Together we rise by lifting others.", 
    author: "Enactus Value" 
  }
];

const QuotesSection = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-enactus-yellow/10 dark:bg-enactus-yellow/5 relative overflow-hidden">
      <div className="absolute -left-10 -top-10 w-40 h-40 rounded-full bg-enactus-yellow/20 dark:bg-enactus-yellow/10 blur-3xl" />
      <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-enactus-yellow/20 dark:bg-enactus-yellow/10 blur-3xl" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center relative min-h-[300px] flex items-center justify-center">
          <QuoteIcon size={200} className="absolute opacity-5 text-enactus-yellow" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <QuoteIcon className="w-12 h-12 mx-auto mb-6 text-enactus-yellow" />
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                {quotes[currentQuote].text}
              </h2>
              {quotes[currentQuote].author && (
                <p className="text-lg font-medium text-muted-foreground">
                  — {quotes[currentQuote].author}
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="flex justify-center gap-3 mt-10">
          {quotes.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentQuote 
                  ? "bg-enactus-yellow scale-110" 
                  : "bg-enactus-yellow/30 hover:bg-enactus-yellow/50"
              }`}
              onClick={() => setCurrentQuote(i)}
              aria-label={`View quote ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
