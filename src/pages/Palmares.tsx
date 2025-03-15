
import React from "react";
import { motion } from "framer-motion";
import AchievementCard from "../components/AchievementCard";

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
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our <span className="text-enactus-blue">Achievements</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey of Excellence</h2>
              <p className="text-gray-600">
                Since 2013, Enactus EMI has consistently ranked among the world's top Enactus teams, demonstrating our commitment to creating positive impact through entrepreneurial action.
              </p>
            </motion.div>

            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <AchievementCard
                  key={`${achievement.year}-${achievement.title}`}
                  year={achievement.year}
                  title={achievement.title}
                  location={achievement.location}
                  flag={achievement.flag}
                  description={achievement.description}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Impact in Numbers</h2>
            <p className="text-gray-600">
              The numeric representation of our global achievements and recognition
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "11+", label: "Years of Excellence" },
              { value: "9", label: "World Cup Appearances" },
              { value: "2", label: "World Cup Runner-ups" },
              { value: "4", label: "Semi-finalist Positions" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm text-center border border-gray-100"
              >
                <div className="text-4xl font-bold text-enactus-blue mb-2">{stat.value}</div>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-enactus-blue/5 p-8 md:p-12 rounded-2xl border border-enactus-blue/10"
          >
            <div className="text-4xl mb-6 text-center">💬</div>
            <blockquote className="text-lg md:text-xl text-gray-700 text-center italic mb-6">
              "Enactus EMI exemplifies the power of entrepreneurial action to transform lives. Their consistent excellence on the world stage showcases the potential of young leaders to create meaningful and sustainable change."
            </blockquote>
            <div className="text-center">
              <p className="font-semibold text-gray-900">Dr. Sarah Johnson</p>
              <p className="text-gray-600 text-sm">President, Enactus Worldwide</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Palmares;
