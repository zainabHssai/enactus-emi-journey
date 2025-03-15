
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  delay?: number;
}

const ProjectCard = ({ id, title, description, image, category, delay = 0 }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: delay }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-lg shadow-md card-hover">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-500" />
          
          <div className="absolute top-4 left-4">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-white/90 text-gray-800 rounded-full">
              {category}
            </span>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay + 0.2 }}
            className="absolute bottom-0 left-0 w-full p-5"
          >
            <h3 className="text-xl font-bold text-white mb-2 group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
              {title}
            </h3>
            <p className="text-white/80 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {description}
            </p>
          </motion.div>
        </div>
        
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            to={`/our-projects/${id}`}
            className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            <ArrowUpRight size={18} className="text-enactus-blue" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
