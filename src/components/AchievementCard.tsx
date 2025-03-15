
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

interface AchievementCardProps {
  year: string;
  title: string;
  location: string;
  flag: string;
  description?: string;
  delay?: number;
}

const AchievementCard = ({ 
  year, 
  title, 
  location, 
  flag, 
  description, 
  delay = 0 
}: AchievementCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="flex group"
    >
      <div className="mr-4 mt-1">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-enactus-blue/10 text-enactus-blue">
          <Trophy size={22} />
        </div>
      </div>
      
      <div className="flex-1">
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group-hover:border-enactus-blue/20">
          <div className="flex justify-between items-start mb-3">
            <div>
              <motion.h3 
                className="text-lg font-semibold text-gray-900"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: delay + 0.2 }}
              >
                {title}
              </motion.h3>
              
              <div className="flex items-center mt-1">
                <span className="text-sm text-gray-500 mr-2">{location}</span>
                <span className="text-lg" aria-hidden="true">{flag}</span>
              </div>
            </div>
            
            <div className="px-3 py-1 bg-enactus-yellow/10 text-gray-700 rounded-full text-sm font-medium">
              {year}
            </div>
          </div>
          
          {description && (
            <motion.p 
              className="text-gray-600 text-sm mt-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: delay + 0.3 }}
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AchievementCard;
