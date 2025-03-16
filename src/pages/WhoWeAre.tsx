import React from "react";
import { motion } from "framer-motion";
import ImpactNumbers from "@/components/ImpactNumbers";
import QuotesSection from "@/components/QuotesSection";
import SummitAnnouncement from "@/components/SummitAnnouncement";

const WhoWeAre = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Who </span>
              <span className="text-enactus-yellow">We Are</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Enactus EMI is a community of student entrepreneurs united by the belief that entrepreneurial action can drive positive change in the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Enactus */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-enactus-yellow/20 text-enactus-yellow rounded-full text-sm font-medium">
                  Our Story
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-enactus-yellow">Driving Social Change</span>
                <span className="text-white"> Through Entrepreneurial Action</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Founded in 2005, Enactus EMI is one of the leading teams within the global Enactus network. Based at École Mohammadia d'Ingénieurs in Rabat, Morocco, we bring together students from diverse backgrounds to develop entrepreneurial projects that address real-world challenges.
                </p>
                <p>
                  We believe in the power of entrepreneurial action to create sustainable solutions to social, environmental, and economic problems. By applying business principles and innovation, we work to improve the quality of life for communities in need.
                </p>
                <p>
                  Our team has grown from a small group of dedicated students to a robust organization with multiple ongoing projects. We have been recognized at the national, regional, and global levels for our impactful work.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
                  alt="Enactus EMI team working on a project"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-enactus-yellow font-semibold">Our team in action</span>
                  <p className="text-white/80 text-sm">Collaborating on sustainable solutions</p>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-enactus-yellow/10 rounded-full blur-xl"></div>
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-enactus-yellow/5 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dynamic Quotes Section */}
      <QuotesSection />

      {/* Impact Numbers */}
      <ImpactNumbers />

      {/* Vision and Mission */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-white">Our </span>
              <span className="text-enactus-yellow">Vision & Mission</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We are driven by a clear purpose and ambitious goals for creating positive change.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 p-8 rounded-lg border border-gray-700 shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-enactus-yellow/10 rounded-full mb-6">
                <span className="text-2xl text-enactus-yellow">👁️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
              <p className="text-gray-300 mb-4">
                To be the global leader in creating a better, more sustainable world through the positive power of business and entrepreneurial action.
              </p>
              <p className="text-gray-300">
                We envision a world where all individuals have the opportunity to improve their quality of life and reach their full potential through entrepreneurial solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-900 p-8 rounded-lg border border-gray-700 shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-enactus-yellow/10 rounded-full mb-6">
                <span className="text-2xl text-enactus-yellow">🚀</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
              <p className="text-gray-300 mb-4">
                To engage the next generation of entrepreneurial leaders to use innovation and business principles to improve the world.
              </p>
              <p className="text-gray-300">
                We develop community empowerment projects that put people's own ingenuity and talents at the center of improving their livelihoods while ensuring business and economic development methods are environmentally sustainable.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-enactus-yellow">Our Core </span>
              <span className="text-white">Values</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              These principles guide everything we do at Enactus EMI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Integrity",
                description: "We act with honesty, transparency, and ethical behavior in all our endeavors.",
                icon: "🤝",
              },
              {
                title: "Innovation",
                description: "We continuously seek new and creative solutions to address social challenges.",
                icon: "💡",
              },
              {
                title: "Collaboration",
                description: "We believe in the power of teamwork and partnerships to create meaningful impact.",
                icon: "🌐",
              },
              {
                title: "Sustainability",
                description: "We develop solutions that create long-term, environmentally and economically viable impact.",
                icon: "🌱",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg hover:bg-gray-800/50 transition-colors duration-300 border border-gray-700"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Entrepreneurial Summit Announcement */}
      <SummitAnnouncement />

      {/* Call to Action */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-10 text-white text-center shadow-xl relative overflow-hidden border border-gray-700"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4')] bg-cover bg-center opacity-5"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/70"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                <span className="text-white">Join Our </span>
                <span className="text-enactus-yellow">Journey of Impact</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-gray-300 mb-8 text-lg"
              >
                Whether you're a student, business leader, or community member, there are many ways to get involved and contribute to our mission.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <a
                  href="mailto:join@enactusemi.org"
                  className="px-6 py-3 bg-enactus-yellow text-enactus-black font-medium rounded-md hover:bg-enactus-yellow/90 transition-all duration-300"
                >
                  Join Our Team
                </a>
                
                <a
                  href="mailto:contact@enactusemi.org"
                  className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white/10 transition-all duration-300"
                >
                  Partner With Us
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
