
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, ArrowRight, MapPin, Calendar, Users } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";

const OurProjects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  const projects = [
    {
      id: "eco-innovation-hub",
      title: "Eco Innovation Hub",
      description: "A sustainable development project focused on environmental innovation, providing resources and support for eco-entrepreneurs.",
      image: "",
      category: "Environment",
      year: "2023"
    },
    {
      id: "tech-empowerment",
      title: "Tech Empowerment",
      description: "Digital literacy initiative for underserved communities, teaching essential tech skills to improve employability.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      category: "Education",
      year: "2022"
    },
    {
      id: "community-growth",
      title: "Community Growth",
      description: "Economic development and entrepreneurship training program for local communities to foster sustainable economic growth.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      category: "Business",
      year: "2021"
    },
    {
      id: "women-in-tech",
      title: "Women in Tech",
      description: "Initiative to empower women in technology fields through mentorship, training, and networking opportunities.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      category: "Education",
      year: "2020"
    },
    {
      id: "clean-water-initiative",
      title: "Clean Water Initiative",
      description: "Project focused on providing clean water solutions to rural communities through innovative filtration systems.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      category: "Environment",
      year: "2019"
    },
    {
      id: "youth-entrepreneurship",
      title: "Youth Entrepreneurship",
      description: "Program that equips young people with business skills and mentorship to start their own ventures.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      category: "Business",
      year: "2018"
    }
  ];

  const fieldTrips = [
    {
      id: "rural-community-visit",
      title: "Rural Community Assessment",
      description: "Visit to assess needs and opportunities in rural communities outside Rabat.",
      location: "Atlas Mountains",
      date: "March 15, 2023",
      participants: 12,
      image: "https://images.unsplash./photo-1461354464878-ad92f492a5a0"
    },
    {
      id: "startup-incubator",
      title: "Startup Incubator Tour",
      description: "Exploring innovation centers and startup incubators to learn best practices.",
      location: "Casablanca Tech Park",
      date: "May 22, 2023",
      participants: 18,
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
    },
    {
      id: "sustainable-farm",
      title: "Sustainable Agriculture Visit",
      description: "Learning about sustainable farming practices and agricultural innovation.",
      location: "Agadir Region",
      date: "October 10, 2023",
      participants: 15,
      image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad"
    }
  ];

  const categories = ["all", "Environment", "Education", "Business"];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = filter === "all" || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-gray-900 text-white"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-40 right-10 w-64 h-64 rounded-full bg-enactus-yellow/5 blur-3xl" />
          <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-enactus-yellow/5 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-3 py-1 bg-enactus-yellow/20 text-enactus-yellow rounded-full text-sm font-medium mb-3"
            >
              Our Projects
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Making a <span className="text-enactus-yellow">Positive Impact</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              Explore our innovative projects addressing social, economic, and environmental challenges.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-enactus-yellow/50"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="bg-gray-800 p-3 border border-gray-700 rounded-lg flex items-center">
                  <Filter size={18} className="text-gray-400 mr-2" />
                  <span className="text-sm text-gray-400 mr-3">Filter by:</span>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setFilter(category)}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
                          filter === category
                            ? "bg-enactus-yellow text-enactus-black"
                            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                        }`}
                      >
                        {category === "all" ? "All" : category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
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
          ) : (
            <div className="text-center py-16">
              <div className="inline-block p-4 rounded-full bg-gray-800 mb-4">
                <Search size={24} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>
              <p className="text-gray-400">
                We couldn't find any projects matching your search. Try different keywords or filters.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Field Trips Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-block px-3 py-1 bg-enactus-yellow/20 text-enactus-yellow rounded-full text-sm font-medium mb-3">
              Exploration & Research
            </div>
            <h2 className="text-3xl font-bold mb-6 text-white">Our Field Trips</h2>
            <p className="text-gray-300">
              We conduct field trips to better understand communities, learn from success stories, and identify new opportunities for impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fieldTrips.map((trip, index) => (
              <motion.div
                key={trip.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 shadow-md group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={trip.image} 
                    alt={trip.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-enactus-yellow transition-colors duration-300">
                    {trip.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4">
                    {trip.description}
                  </p>
                  
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center">
                      <MapPin size={16} className="text-enactus-yellow mr-2" />
                      <span>{trip.location}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <Calendar size={16} className="text-enactus-yellow mr-2" />
                      <span>{trip.date}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <Users size={16} className="text-enactus-yellow mr-2" />
                      <span>{trip.participants} participants</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto bg-gray-800 rounded-2xl p-10 shadow-xl relative overflow-hidden border border-gray-700"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-enactus-yellow to-yellow-400" />
            <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-enactus-yellow/5 rounded-full" />
            <div className="absolute -top-16 -left-16 w-32 h-32 bg-enactus-yellow/5 rounded-full" />
            
            <div className="relative z-10 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-white mb-6"
              >
                Have an Idea for a Project?
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-gray-300 mb-8 max-w-2xl mx-auto"
              >
                We're always looking for innovative ideas that can create positive social, economic, or environmental impact. Share your concept with us and let's create change together.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <a
                  href="mailto:projects@enactusemi.org"
                  className="inline-flex items-center px-6 py-3 bg-enactus-yellow text-enactus-black font-medium rounded-md hover:bg-enactus-yellow/90 transition-all duration-300 group"
                >
                  <span>Submit Your Idea</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default OurProjects;
