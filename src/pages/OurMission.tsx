
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const OurMission = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="bg-white dark:bg-background text-black dark:text-foreground">
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100/50 dark:from-black/20 to-white dark:to-background z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">
              Our <span className="text-enactus-yellow">Mission</span>
            </h1>
            <p className="text-lg text-gray-700 dark:text-muted-foreground mb-8 leading-relaxed">
              We believe in the power of entrepreneurial action to create a better, more sustainable world for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                Empowering Students to Change the World
              </h2>
              <p className="text-gray-700 dark:text-muted-foreground mb-6 leading-relaxed">
                At Enactus EMI, our mission is to engage the next generation of entrepreneurial leaders to use innovation and business principles to improve the world. We guide students to develop community empowerment projects that put people's own ingenuity and talents at the center of improving their livelihoods.
              </p>
              <p className="text-gray-700 dark:text-muted-foreground mb-6 leading-relaxed">
                Through the positive power of business, we create sustainable solutions to complex issues. Our projects address various UN Sustainable Development Goals, from reducing poverty and inequality to promoting clean energy and climate action.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="#projects"
                    className="inline-flex items-center px-6 py-3 bg-enactus-yellow text-enactus-black font-medium rounded-md transition-all duration-300 group"
                  >
                    <span>See Our Impact</span>
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="order-1 lg:order-2">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998"
                  alt="Students collaborating on a project"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50 dark:bg-muted/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">Our Core Values</h2>
            <p className="text-gray-700 dark:text-muted-foreground">
              The principles that guide everything we do at Enactus EMI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              {
                title: "Empowerment",
                description: "We enable individuals and communities to realize their potential and improve their livelihoods.",
                icon: "⭐",
              },
              {
                title: "Excellence",
                description: "We strive for the highest standards in all our projects and activities.",
                icon: "🏆",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-border"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">{value.title}</h3>
                <p className="text-gray-700 dark:text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-enactus-yellow text-enactus-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-enactus-black/80 mb-8 text-lg">
              Whether you're a student, business leader, or community member, there are many ways to get involved and contribute to our mission.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-enactus-black text-white font-medium rounded-md hover:bg-enactus-black/80 transition-all duration-300"
              >
                Get Involved
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurMission;
