import { useEffect } from "react";
import { motion } from "framer-motion";
import { Users, GraduationCap, BookOpen, Target, Award, Lightbulb, ArrowRight } from "lucide-react";

const WhoWeAre = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  const teamMembers = [
    {
      name: "Mohammed Amine",
      role: "President",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      bio: "Final year engineering student passionate about sustainable development and social entrepreneurship."
    },
    {
      name: "Fatima Zahra",
      role: "Vice President",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      bio: "Computer science student with expertise in project management and team leadership."
    },
    {
      name: "Youssef",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      bio: "Creative marketing student focused on digital storytelling and brand development."
    },
    {
      name: "Sara",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      bio: "Civil engineering student dedicated to creating sustainable infrastructure solutions."
    },
    {
      name: "Omar",
      role: "Finance Manager",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      bio: "Finance and economics student with experience in budgeting and financial analysis."
    },
    {
      name: "Leila",
      role: "Communications Officer",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      bio: "Communications specialist passionate about storytelling and public relations."
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We approach challenges with creative thinking and innovative solutions.",
      icon: Lightbulb
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and collective effort to drive change.",
      icon: Users
    },
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, setting high standards for our work.",
      icon: Award
    },
    {
      title: "Impact",
      description: "We measure success by the sustainable impact our projects create in communities.",
      icon: Target
    }
  ];

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-800 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-enactus-yellow/10 blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-enactus-yellow/10 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-3 py-1 bg-enactus-yellow/20 text-enactus-yellow rounded-full text-sm font-medium mb-3"
            >
              About Us
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              The Story of <span className="text-enactus-yellow">Enactus EMI</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              A journey of passion, innovation, and impact that began at École Mohammadia d'Ingénieurs and reached global recognition.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                    alt="Enactus EMI team"
                    className="w-full h-auto object-cover"
                    style={{ aspectRatio: "4/3" }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent mix-blend-overlay" />
                </div>
                
                <div className="absolute -bottom-8 -right-8 w-48 h-48 md:w-64 md:h-64 rounded-full bg-enactus-yellow/20 -z-10" />
                <div className="absolute -top-8 -left-8 w-48 h-48 md:w-64 md:h-64 rounded-full bg-enactus-yellow/10 -z-10" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="inline-block px-3 py-1 bg-enactus-yellow/20 text-enactus-yellow rounded-full text-sm font-medium">
                Our Story
              </div>
              
              <h2 className="text-3xl font-bold text-white">
                Creating Change Through Entrepreneurial Action
              </h2>
              
              <p className="text-gray-300">
                Enactus EMI was founded in 2005 by a group of passionate students at École Mohammadia d'Ingénieurs who believed in the power of entrepreneurial action to transform lives and create a better world. What began as a small club has grown into one of the most decorated Enactus teams globally.
              </p>
              
              <p className="text-gray-300">
                Our journey has been marked by innovative projects addressing critical social, economic, and environmental challenges in Morocco and beyond. Through dedication, creativity, and relentless pursuit of excellence, we've earned recognition on the global stage, representing Morocco at numerous Enactus World Cups.
              </p>
              
              <p className="text-gray-300">
                Today, we continue to empower students to use innovation and business principles to make a positive impact. Our diverse team brings together students from various disciplines, united by a shared vision of creating sustainable change through entrepreneurial action.
              </p>
              
              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-enactus-yellow/20 text-enactus-yellow">
                    <Target size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">20+</h3>
                    <p className="text-sm text-gray-400">Projects Completed</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-enactus-yellow/30 text-enactus-yellow">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">8+</h3>
                    <p className="text-sm text-gray-400">Global Recognitions</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 py-1 bg-enactus-yellow/20 text-enactus-yellow rounded-full text-sm font-medium mb-3"
            >
              Our Values
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl font-bold text-white mb-4"
            >
              The Principles That Guide Us
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300"
            >
              Our core values shape our approach to every project and initiative, driving us to create meaningful and lasting impact.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-black p-6 rounded-xl shadow-sm border border-gray-800 hover:border-enactus-yellow/50 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-enactus-yellow/20 text-enactus-yellow mb-4">
                  <value.icon size={20} />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Team Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 py-1 bg-enactus-yellow/20 text-enactus-yellow rounded-full text-sm font-medium mb-3"
            >
              Our Team
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl font-bold text-white mb-4"
            >
              Meet the Innovators
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300"
            >
              Our diverse team brings together talented students from various disciplines, united by a passion for creating positive change.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-gray-900 rounded-xl overflow-hidden shadow-sm border border-gray-800 hover:border-enactus-yellow/50 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden aspect-[3/2]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-enactus-yellow/90">{member.role}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-800 flex space-x-4">
                    <a
                      href="#"
                      className="text-gray-500 hover:text-enactus-yellow transition-colors duration-300"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-enactus-yellow transition-colors duration-300"
                      aria-label={`Email ${member.name}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Join Us Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="inline-block px-3 py-1 bg-enactus-yellow/20 text-enactus-yellow rounded-full text-sm font-medium">
                Join Enactus EMI
              </div>
              
              <h2 className="text-3xl font-bold text-white">
                Become Part of Our Journey
              </h2>
              
              <p className="text-gray-300">
                We're always looking for passionate students who want to make a difference. Joining Enactus EMI means becoming part of a community dedicated to creating positive change through entrepreneurial action.
              </p>
              
              <p className="text-gray-300">
                As a member, you'll develop valuable skills, connect with like-minded individuals, and work on impactful projects that address real-world challenges. You'll also have opportunities to represent EMI and Morocco on national and international stages.
              </p>
              
              <div className="pt-4 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-enactus-yellow text-black mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-300">Develop leadership and teamwork skills</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-enactus-yellow text-black mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-300">Work on real-world projects with measurable impact</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-enactus-yellow text-black mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-300">Connect with a global network of students and professionals</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-enactus-yellow text-black mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-300">Represent EMI at national and international competitions</p>
                </div>
              </div>
              
              <div className="pt-4">
                <a
                  href="mailto:join@enactusemi.org"
                  className="inline-flex items-center px-6 py-3 bg-enactus-yellow text-black font-medium rounded-md hover:bg-enactus-yellow/90 transition-all duration-300 group"
                >
                  <span>Apply to Join</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                    alt="Enactus EMI team collaborating"
                    className="w-full h-auto object-cover"
                    style={{ aspectRatio: "4/3" }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent mix-blend-overlay" />
                </div>
                
                <div className="absolute -bottom-8 -left-8 w-48 h-48 md:w-64 md:h-64 rounded-full bg-enactus-yellow/20 -z-10" />
                <div className="absolute -top-8 -right-8 w-48 h-48 md:w-64 md:h-64 rounded-full bg-enactus-yellow/10 -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default WhoWeAre;
