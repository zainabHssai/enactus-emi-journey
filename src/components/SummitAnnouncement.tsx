import { motion } from "framer-motion";
import { CalendarDays, Mail } from "lucide-react";

const buttonVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
};

const SummitAnnouncement = () => {
  return (
    <section className="py-20 bg-enactus-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-enactus-yellow/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-enactus-yellow/10 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-block px-3 py-1 bg-enactus-yellow/20 text-enactus-yellow rounded-full text-sm font-medium mb-4">
              Coming Soon
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Entrepreneurial Summit 2025
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg">
              Join us for our flagship event where innovation meets opportunity. Network with industry leaders, investors, and fellow entrepreneurs.
            </p>
            
            <div className="flex flex-col items-center lg:items-start gap-4">
              {/* Rectangle Save the Date box */}
              <div className="flex items-center bg-background/20 p-4 border border-white/10 backdrop-blur-sm rounded-md w-full max-w-xs">
                <CalendarDays className="h-6 w-6 text-enactus-yellow mr-3" />
                <div>
                  <span className="block text-white font-semibold">Save the Date</span>
                  <span className="text-gray-300">April 16, 2025</span>
                </div>
              </div>

              {/* Smaller Button */}
              <motion.a
                href="mailto:zainabhssaini04@gmail.com?subject=I want to join the 2025 Summit"
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                animate="rest"  
                className="inline-flex items-center gap-2 px-4 py-2 bg-enactus-yellow text-enactus-black font-medium rounded-md shadow-md transition-all hover:shadow-lg text-sm"
              >
                <Mail className="w-4 h-4" />
                Be Part of the Event
              </motion.a>
            </div>
          </motion.div>
          
        
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="/Artboard 1.png"
                alt="Entrepreneurial Summit 2025"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SummitAnnouncement;
