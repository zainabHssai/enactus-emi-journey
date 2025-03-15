
import { motion } from "framer-motion";
import { Calendar, Link as LinkIcon } from "lucide-react";

interface NewsCardProps {
  title: string;
  description: string;
  date: string;
  image: string;
  source?: string;
  sourceUrl?: string;
  delay?: number;
  type: 'press' | 'event';
}

const NewsCard = ({ 
  title, 
  description, 
  date, 
  image, 
  source, 
  sourceUrl, 
  delay = 0,
  type
}: NewsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
    >
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
        
        <div className="absolute top-4 left-4">
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
            type === 'press' 
              ? 'bg-indigo-100 text-indigo-700' 
              : 'bg-emerald-100 text-emerald-700'
          }`}>
            {type === 'press' ? 'Press' : 'Event'}
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center mb-3 text-sm text-gray-500">
          <Calendar size={14} className="mr-1" />
          <span>{date}</span>
          
          {source && sourceUrl && (
            <div className="flex items-center ml-4">
              <LinkIcon size={14} className="mr-1" />
              <a 
                href={sourceUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-enactus-blue hover:underline"
              >
                {source}
              </a>
            </div>
          )}
        </div>
        
        <motion.h3 
          className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-enactus-blue transition-colors duration-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: delay + 0.2 }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-600 text-sm line-clamp-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: delay + 0.3 }}
        >
          {description}
        </motion.p>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="text-sm font-medium text-enactus-blue hover:text-enactus-darkblue transition-colors duration-300"
          >
            Read more
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default NewsCard;
