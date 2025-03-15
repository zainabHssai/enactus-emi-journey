
import React from "react";
import { motion } from "framer-motion";
import AchievementCard from "../components/AchievementCard";
import { Trophy, Star, Medal } from "lucide-react";

const Palmares = () => {
  const achievements = [
    {
      year: "2024",
      title: "Vice-World Champion",
      location: "Enactus World Cup",
      flag: "🇰🇿",
      description: "Runner-up at the global competition in Kazakhstan, presenting innovative entrepreneurial solutions."
    },
    {
      year: "2023",
      title: "National Champion",
      location: "Enactus Morocco",
      flag: "🇲🇦",
      description: "Selected as the best team to represent Morocco at the Enactus World Cup."
    },
    {
      year: "2022",
      title: "Semi-Finalist",
      location: "Enactus World Cup",
      flag: "🇵🇷",
      description: "Reached the semi-finals at the World Cup in Puerto Rico."
    },
    {
      year: "2020",
      title: "Semi-Finalist",
      location: "Enactus World Cup",
      flag: "🇳🇱",
      description: "Achieved semi-finalist status at the World Cup in Netherlands."
    },
    {
      year: "2019",
      title: "Semi-Finalist",
      location: "Enactus World Cup",
      flag: "🇺🇸",
      description: "Reached the semi-finals in the United States competition."
    },
    {
      year: "2018",
      title: "Fourth Place",
      location: "Enactus World Cup",
      flag: "🇺🇸",
      description: "Secured fourth place globally at the World Cup in the United States."
    },
    {
      year: "2015",
      title: "Third Place",
      location: "Enactus World Cup",
      flag: "🇿🇦",
      description: "Bronze medal at the World Cup held in South Africa."
    },
    {
      year: "2014",
      title: "Vice-World Champion",
      location: "Enactus World Cup",
      flag: "🇨🇳",
      description: "Runner-up at the global competition in China, presenting innovative entrepreneurial projects."
    },
    {
      year: "2013",
      title: "Semi-Finalist",
      location: "Enactus World Cup",
      flag: "🇲🇽",
      description: "Reached the semi-finals at the World Cup in Mexico."
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our <span className="text-enactus-yellow">Achievements</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              A chronicle of excellence and global recognition that showcases our team's dedication and innovation on the world stage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16 text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Our Journey of Excellence</h2>
              <p className="text-gray-300">
                Since 2013, Enactus EMI has consistently ranked among the world's top Enactus teams, demonstrating our commitment to creating positive impact through entrepreneurial action.
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-enactus-yellow/30"></div>
              
              <div className="space-y-0">
                {achievements.map((achievement, index) => (
                  <div key={`${achievement.year}-${achievement.title}`} className="relative">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                    >
                      {/* Year Circle */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-black border-4 border-enactus-yellow z-10 flex items-center justify-center text-enactus-yellow font-bold">
                          {achievement.year}
                        </div>
                      </div>
                      
                      {/* Achievement Card */}
                      <div 
                        className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}
                      >
                        <div className="bg-gray-900 border border-gray-800 hover:border-enactus-yellow/50 rounded-lg p-6 shadow-lg transition-all duration-300">
                          <div className="flex items-center mb-3 text-enactus-yellow">
                            {index % 2 === 0 ? (
                              <>
                                <h3 className="text-xl font-bold">{achievement.title}</h3>
                                <span className="ml-2 text-2xl">{achievement.flag}</span>
                              </>
                            ) : (
                              <>
                                <span className="mr-2 text-2xl">{achievement.flag}</span>
                                <h3 className="text-xl font-bold">{achievement.title}</h3>
                              </>
                            )}
                          </div>
                          <p className="text-gray-400 text-sm mb-2">{achievement.location}</p>
                          <p className="text-gray-300">{achievement.description}</p>
                        </div>
                      </div>
                      
                      {/* Empty space for the other side */}
                      <div className="w-5/12"></div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Our Impact in Numbers</h2>
            <p className="text-gray-300">
              The numeric representation of our global achievements and recognition
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "11+", label: "Years of Excellence", icon: <Star size={24} /> },
              { value: "9", label: "World Cup Appearances", icon: <Trophy size={24} /> },
              { value: "2", label: "World Cup Runner-ups", icon: <Medal size={24} /> },
              { value: "4", label: "Semi-finalist Positions", icon: <Star size={24} /> }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black p-6 rounded-lg shadow-sm text-center border border-gray-800 hover:border-enactus-yellow/50 transition-all duration-300"
              >
                <div className="flex justify-center mb-3 text-enactus-yellow">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-enactus-yellow mb-2">{stat.value}</div>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-gray-900/50 p-8 md:p-12 rounded-2xl border border-enactus-yellow/20"
          >
            <div className="text-4xl mb-6 text-center">💬</div>
            <blockquote className="text-lg md:text-xl text-gray-300 text-center italic mb-6">
              "Enactus EMI exemplifies the power of entrepreneurial action to transform lives. Their consistent excellence on the world stage showcases the potential of young leaders to create meaningful and sustainable change."
            </blockquote>
            <div className="text-center">
              <p className="font-semibold text-white">Dr. Sarah Johnson</p>
              <p className="text-enactus-yellow text-sm">President, Enactus Worldwide</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Palmares;
