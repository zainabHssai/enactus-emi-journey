import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Trophy, Users, Lightbulb, Target } from "lucide-react";

import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import VideoSection from "@/components/VideoSection";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredProjects = [
    {
      id: "project1",
      title: "Eco Innovation Hub",
      description: "Sustainable development project focused on environmental innovation.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      category: "Environment"
    },
    {
      id: "project2",
      title: "Tech Empowerment",
      description: "Digital literacy initiative for underserved communities.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      category: "Education"
    },
    {
      id: "project3",
      title: "Community Growth",
      description: "Economic development and entrepreneurship training program.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      category: "Business"
    }
  ];

  const stats = [
    { value: "20+", label: "Projects", icon: Lightbulb },
    { value: "100+", label: "Team Members", icon: Users },
    { value: "4", label: "Global Awards", icon: Trophy },
    { value: "10+", label: "Years of Impact", icon: Target }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Featured Projects Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="inline-block px-3 py-1 bg-enactus-blue/10 text-enactus-blue rounded-full text-sm font-medium mb-3">
              Our Projects
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Creating Lasting Impact
            </motion.h2>
            <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-gray-600">
              Through innovation and entrepreneurial action, we develop projects that address social, economic, and environmental challenges.
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                category={project.category}
                delay={0.1 * index}
              />
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/our-projects"
              className="inline-flex items-center px-6 py-3 bg-white border border-gray-300 text-enactus-blue font-medium rounded-md hover:bg-gray-50 transition-all duration-300 group"
            >
              <span>Explore All Projects</span>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Video Section */}
      <VideoSection />
      
      {/* Achievement Highlights */}
      <section className="py-24 bg-enactus-blue text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black/10 to-transparent" />
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-enactus-yellow/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-blue-600/20 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="inline-block px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium mb-3">
              Global Recognition
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
              Our Achievements
            </motion.h2>
            <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-blue-100">
              Enactus EMI has been recognized on the global stage for our impactful projects and innovative solutions.
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
              {[
                { position: "Vice-world champion", year: "2024", location: "Kazakhstan", flag: "🇰🇿" },
                { position: "Vice-world champion", year: "2014", location: "China", flag: "🇨🇳" },
                { position: "Third in the world", year: "2015", location: "South Africa", flag: "🇿🇦" },
                { position: "Fourth in the world", year: "2018", location: "USA", flag: "🇺🇸" },
              ].map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                    <Trophy size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{achievement.position}</h3>
                  <p className="text-blue-100">{achievement.year} {achievement.flag}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center mt-10"
            >
              <Link
                to="/palmares"
                className="inline-flex items-center px-6 py-3 bg-white text-enactus-blue font-medium rounded-md hover:bg-gray-50 transition-all duration-300 group"
              >
                <span>View All Achievements</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Key Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-enactus-blue/10 text-enactus-blue mb-4">
                  <stat.icon size={28} />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-r from-enactus-blue to-blue-600 rounded-2xl p-10 text-white text-center shadow-xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05')] bg-cover bg-center opacity-10"></div>
            <div className="absolute inset-0 bg-enactus-blue/60"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Join Our Mission To Create a Better World
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-blue-100 mb-8 text-lg"
              >
                Whether you're interested in volunteering, partnering, or supporting our initiatives, there are many ways you can contribute to our mission.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <Link
                  to="/our-mission"
                  className="px-6 py-3 bg-white text-enactus-blue font-medium rounded-md hover:bg-gray-50 transition-all duration-300"
                >
                  Learn More
                </Link>
                
                <a
                  href="mailto:contact@enactusemi.org"
                  className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white/10 transition-all duration-300"
                >
                  Contact Us
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
