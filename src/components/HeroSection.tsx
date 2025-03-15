
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeProvider";

const HeroSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { theme } = useTheme();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 10,
        duration: 0.6 
      },
    },
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      } 
    },
  };

  const isDark = theme === "dark";

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden hero-gradient">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/10 to-transparent dark:from-black/10" />
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white to-transparent dark:from-background" />
      
      {/* Subtle background patterns */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-enactus-yellow/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-enactus-yellow/5 blur-3xl" />
      
      <div className="container mx-auto px-6 z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-2">
              <motion.div 
                className="inline-block px-3 py-1 bg-enactus-yellow/20 text-enactus-black dark:text-enactus-yellow rounded-full text-sm font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Vice World Champion 2024 🇰🇿
              </motion.div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-foreground">
                Transforming Lives Through <br />
                <span className="text-enactus-yellow">Entrepreneurial Action</span>
              </h1>
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-foreground/80 max-w-lg leading-relaxed"
            >
              Enactus EMI empowers students to use innovation and entrepreneurship to create a better, more sustainable world for us all.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.div
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/who-we-are"
                  className="inline-flex items-center px-6 py-3 bg-enactus-yellow text-black font-medium rounded-md transition-all duration-300 group"
                >
                  <span>Discover Us</span>
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
              
              <motion.div
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/our-projects"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-foreground font-medium rounded-md hover:bg-background/80 transition-all duration-300"
                >
                  <span>Our Projects</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform -rotate-2 transition-transform duration-500 hover:rotate-0">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                alt="Enactus EMI team collaboration"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: "4/3" }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent mix-blend-overlay" />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 glass-card p-4 rounded-lg shadow-lg max-w-xs transform rotate-1 transition-transform duration-500 hover:rotate-0"
            >
              <div className="flex items-start space-x-3">
                <div className="bg-enactus-yellow/20 p-2 rounded-full">
                  <div className="w-2 h-2 bg-enactus-yellow rounded-full animate-pulse" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Global Recognition</h3>
                  <p className="text-sm text-foreground/80">Consistently ranked among the world's top Enactus teams since 2013</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
