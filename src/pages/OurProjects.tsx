
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, ArrowRight } from "lucide-react";
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
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
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
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-40 right-10 w-64 h-64 rounded-full bg-enactus-blue/5 blur-3xl" />
          <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-enactus-yellow/5 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-3 py-1 bg-enactus-blue/10 text-enactus-blue rounded-full text-sm font-medium mb-3"
            >
              Our Projects
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Making a <span className="text-enactus-blue">Positive Impact</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              Explore our innovative projects addressing social, economic, and environmental challenges.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-16 bg-white">
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
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-enactus-blue/50"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="bg-white p-3 border border-gray-200 rounded-lg flex items-center">
                  <Filter size={18} className="text-gray-400 mr-2" />
                  <span className="text-sm text-gray-500 mr-3">Filter by:</span>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setFilter(category)}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
                          filter === category
                            ? "bg-enactus-blue text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
              <div className="inline-block p-4 rounded-full bg-gray-100 mb-4">
                <Search size={24} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600">
                We couldn't find any projects matching your search. Try different keywords or filters.
              </p>
            </div>
          )}
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
            className="max-w-4xl mx-auto bg-white rounded-2xl p-10 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-enactus-blue to-blue-400" />
            <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-enactus-blue/5 rounded-full" />
            <div className="absolute -top-16 -left-16 w-32 h-32 bg-enactus-yellow/5 rounded-full" />
            
            <div className="relative z-10 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-gray-900 mb-6"
              >
                Have an Idea for a Project?
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-gray-600 mb-8 max-w-2xl mx-auto"
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
                  className="inline-flex items-center px-6 py-3 bg-enactus-blue text-white font-medium rounded-md hover:bg-blue-600 transition-all duration-300 group"
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
