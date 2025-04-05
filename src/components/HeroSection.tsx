import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-enactus-black">
      {/* Background elements améliorés */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/30 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-background to-transparent" />
      
      {/* Elements abstraits en arrière-plan */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-enactus-yellow/10 blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-enactus-yellow/10 blur-3xl" />
      <div className="absolute top-40 right-40 w-64 h-64 rounded-full bg-enactus-yellow/5 blur-2xl" />
      
      <div className="container mx-auto px-6 z-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Section texte agrandie (7 colonnes sur grand écran) */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="lg:col-span-7 space-y-8 relative"
          >
            {/* Fond stylisé derrière le texte */}
            <div className="absolute -left-8 -top-8 w-full h-full bg-enactus-yellow/5 rounded-3xl blur-sm -z-10 transform rotate-1" />
            
            <motion.div variants={itemVariants} className="space-y-3">
              <motion.div 
                className="inline-block px-4 py-2 bg-enactus-yellow/20 text-enactus-yellow rounded-full text-base font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Vice World Champion 2024 🇰🇿
              </motion.div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight text-white">
                Transforming Lives Through
                <span className="block mt-2 text-enactus-yellow">Entrepreneurial Action</span>
              </h1>
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-foreground/80 max-w-2xl leading-relaxed"
            >
              Enactus EMI empowers students to use innovation and entrepreneurship to create a better, more sustainable world for us all.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-5 pt-4">
              <motion.div
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/who-we-are"
                  className="inline-flex items-center px-8 py-4 bg-enactus-yellow text-black font-semibold rounded-lg text-lg transition-all duration-300 group"
                >
                  <span>Discover Us</span>
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
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
                  className="inline-flex items-center px-8 py-4 border border-gray-700 text-white font-semibold rounded-lg text-lg hover:bg-background/80 transition-all duration-300"
                >
                  <span>Our Projects</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Section image améliorée (5 colonnes sur grand écran) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 relative"
          >
            {/* Photo principale avec bordure stylisée */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform -rotate-2 transition-transform duration-500 hover:rotate-0 border-2 border-enactus-yellow/20">
              <img
                src="/equipe.JPG"
                alt="Enactus EMI team collaboration"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: "3/4" }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent mix-blend-overlay" />
              
              {/* Overlay avec logo ou pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_rgba(0,0,0,0.4)_100%)] mix-blend-multiply" />
            </div>
            
            {/* Badge flottant */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-8 -left-8 bg-background/80 backdrop-blur-lg p-5 rounded-xl shadow-xl max-w-xs transform rotate-1 transition-transform duration-500 hover:rotate-0 border border-enactus-yellow/30"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-enactus-yellow/20 p-3 rounded-full">
                  <div className="w-3 h-3 bg-enactus-yellow rounded-full animate-pulse" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Global Recognition</h3>
                  <p className="text-base text-white/80">Consistently ranked among the world's top Enactus teams since 2013</p>
                </div>
              </div>
            </motion.div>
            
            {/* Badge secondaire */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -top-4 -right-4 bg-enactus-yellow/90 p-3 rounded-lg shadow-lg transform -rotate-3 transition-transform duration-500 hover:rotate-0"
            >
              <p className="font-bold text-black text-sm">Impact Driven</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;