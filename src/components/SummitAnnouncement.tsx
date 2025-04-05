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
            
            <div className="flex items-center justify-center lg:justify-start bg-background/20 rounded-lg p-4 border border-white/10 backdrop-blur-sm inline-block">
              <CalendarDays className="h-6 w-6 text-enactus-yellow mr-3" />
              <div>
                <span className="block text-white font-semibold">Save the Date</span>
                <span className="text-gray-300">April 16, 2025</span>
              </div>
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
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-enactus-black to-enactus-black/60 flex items-center justify-center">
                <div className="text-center p-8">
                <div className="text-[] text-6xl font-bold mb-2">2025</div>
                                  <h3 className="text-white text-2xl font-bold mb-4">Entrepreneurial Summit</h3>
                  
                
                </div>  
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SummitAnnouncement;
