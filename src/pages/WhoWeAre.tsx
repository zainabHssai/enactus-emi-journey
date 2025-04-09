import React from "react";
import { motion } from "framer-motion";
import ImpactNumbers from "@/components/ImpactNumbers";
import QuotesSection from "@/components/QuotesSection";

const WhoWeAre = () => {
    const alumniData = [
        {
          id: 1,
          name: "Meryeme Ez-Ghari",
          position: "Head of the Presentation Team",
          year: "2024",
          image: "maryeme.jpeg"
        },
        {
          id: 2,
          name: "Idriss Kerab",
          position: "Project Manager for 'LUMA'",
          year: "2024",
          image: "idriss.png"
        },
        {
          id: 3,
          name: "Khawla Nikhi",
          position: "Vice Team Leader",
          year: "2024",
          image: "khawla nikhi.jpeg"
        },
        {
          id: 4,
          name: "Mohamed Hamzaoui",
          position: "Vice head of the Conception Team",
          year: "2024",
          image: "mohamed hamzaoui.jpeg"
        },
        {
          id: 5,
          name: "Lina El Laghdach",
          position: "Vice Project Manager for 'EPIC'",
          year: "2024",
          image: "lina el laghdach.jpeg"
        },
        {
          id: 6,
          name: "Badr Eddine Kettani",
          position: "Project Manager for 'SmartClean'",
          year: "2024",
          image: "badr eddin kettani.jpeg"
        },
       
        // {
        //   id: 8,
        //   name: "Chaïmae Toubali",
        //   position: "ENACTUS Team Leader",
        //   year: "2021",
        //   image: "chaimae toubali.jpeg"
        // },
        {
          id: 9,
          name: "Nizar Ouboujemaa",
          position: "Project Manager for 'SmartClean'",
          year: "2021",
          image: "nizar.png"
        },
        {
          id: 10,
          name: "Ilyas El Allali",
          position: "Head of the Presentation Team",
          year: "2023",
          image: "ilyas el allali.jpeg"
        },
        {
          id: 11,
          name: "Salma Fakhouri",
          position: "Project Manager",
          year: "2022",
          image: "salma fakhouri.jpeg"
        }
      ];
    const throwbackPhotos = [
      { id: 1, year: "2024", caption: "National Competition Winners", image: "1.JPG" },
      { id: 2, year: "2024", caption: "Visit from the Moroccan Ambassador in Kazakhstan", image: "2.JPG" },
      { id: 3, year: "2024", caption: "Team Building Retreat", image: "3.JPG" },
      { id: 4, year: "2024", caption: "Team Building Retreat", image: "4.JPG" },
      { id: 5, year: "2024", caption: "Cultural Exchange Moment", image: "5.JPG" },
      { id: 6, year: "2024", caption: "Pitch Preparation Session", image: "6.JPG" },
      { id: 7, year: "2024", caption: "Networking Event", image: "7.JPG" },
      { id: 8, year: "2024", caption: "Celebrating Achievements", image: "8.JPG" },
      { id: 9, year: "2024", caption: "Kazakhstan Highlights", image: "9.JPG" },
      { id: 10, year: "2024", caption: "Team Presentation Rehearsal", image: "11.JPG" },
      
        // Ajoutez plus de photos ici
    ];
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
                                    src="10.JPG"
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

            {/* Alumni Slider */}
            {/* Alumni Slider - Version simplifiée */}
            <section className="py-20 bg-gray-800">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-16 text-center"
                    >
                        <span className="inline-block px-3 py-1 bg-enactus-yellow/20 text-enactus-yellow rounded-full text-sm font-medium mb-4">
                            Our Legacy
                        </span>
                        <h2 className="text-3xl font-bold">
                            <span className="text-white">Meet Our </span>
                            <span className="text-enactus-yellow">Alumni</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
                            Discover where our former members are now and how Enactus shaped their careers.
                        </p>
                    </motion.div>

                    <div className="relative">
                        <div className="flex overflow-x-auto pb-10 scrollbar-hide snap-x snap-mandatory">
                            {alumniData.map((alumni, index) => (
                                <motion.div
                                    key={alumni.id}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex-shrink-0 w-72 mx-4 bg-gray-900 rounded-xl overflow-hidden shadow-lg snap-center"
                                >
                                    <div className="relative h-48 bg-gray-700">
                                        <img
                                            src={alumni.image}
                                            alt={alumni.name}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                            <h3 className="text-xl font-bold text-white">{alumni.name}</h3>
                                            <p className="text-enactus-yellow text-sm">{alumni.position}</p>
                                        </div>
                                        <div className="absolute top-4 right-4 bg-enactus-yellow text-gray-900 px-2 py-1 rounded-md text-xs font-bold">
                                            {alumni.year}
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex justify-center space-x-2 pt-2">
                                            <span className="inline-block w-8 h-1 bg-enactus-yellow"></span>
                                            <span className="inline-block w-4 h-1 bg-enactus-yellow"></span>
                                            <span className="inline-block w-2 h-1 bg-enactus-yellow"></span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            {/*Throwback*/}
            <section className="py-20 bg-gray-900">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-16 text-center"
                    >
                        <span className="inline-block px-3 py-1 bg-enactus-yellow/20 text-enactus-yellow rounded-full text-sm font-medium mb-4">
                            Memories
                        </span>
                        <h2 className="text-3xl font-bold">
                            <span className="text-white">Throwback to </span>
                            <span className="text-enactus-yellow">2024</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
                            Relive our most memorable moments from previous years.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {throwbackPhotos.map((photo, index) => (
                            <motion.div
                                key={photo.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative overflow-hidden rounded-xl shadow-xl h-64"
                                whileHover={{ scale: 1.03 }}
                            >
                                <img
                                    src={photo.image}
                                    alt={photo.caption}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div>
                                        <div className="text-enactus-yellow font-bold">{photo.year}</div>
                                        <div className="text-white font-medium">{photo.caption}</div>
                                    </div>
                                </div>
                                <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                                    {photo.year}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

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
                                    href="mailto:enactusemi25@gmail.com"
                                    className="px-6 py-3 bg-enactus-yellow text-enactus-black font-medium rounded-md hover:bg-enactus-yellow/90 transition-all duration-300"
                                >
                                    Join Our Team
                                </a>

                                <a
                                    href="mailto:enactusemi25@gmail.com"
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