import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tab } from "@headlessui/react";
import NewsCard from "../components/NewsCard";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

const News = () => {
    const categories = {
        All: [],
        Events: [],
        Press: [],
        Articles: []
    };

    const pressArticles = [
        {
            id: 1,
            title: "Kazakhstan : Enactus EMI représentera le Maroc à la coupe du monde 2024 à Astana",
            image: "https://f2.hespress.com/wp-content/uploads/2024/07/enactuus.jpg",
            content: "Enactus EMI représentera le Maroc à la Enactus World Cup 2024, la plus grande compétition mondiale d'entrepreneuriat social estudiantin, qui se tiendra du 2 au 4 octobre à Astana, au Kazakhstan.",
            date: "Juillet 2024",
            category: "Compétition Internationale"
        },
        {
            id: 2,
            title: "Enactus EMI représentera le Maroc à la Coupe du Monde 2024 à Astana",
            image: "https://lematin.ma/lematin/uploads/images/2024/07/23/328502.webp",
            content: "L'équipe Enactus École Mohammadia d'Ingénieurs (EMI) représentera le Maroc à la World Cup Enactus, la plus grande compétition d'entrepreneuriat social estudiantin, qui se tiendra du 2 au 4 octobre 2024 à Astana. L'équipe marocaine concourra pour le titre mondial aux côtés de 35 pays.",
            date: "Juillet 2024",
            category: "Actualité"
        },
        {
            id: 3,
            title: "Le pitch de l'équipe Enactus Emi la championne marocaine en préparation de la finale au USA",
            image: "https://www.aiem.ma/ressources/temp/images/100_850x525_47408343869_202425107_2019210346-1568055824-798717ec-bebc-4e8e-add1-3fd784e50a89.webp",
            content: "Dans le cadre de l'accompagnement de l'équipe ENACTUS EMI qui a réussi à être couronnée championne nationale de l'année 2019 et à représenter le Maroc à la Silicon Valley en Septembre 2019, l'AIEM via son Club Entrepreneur a organisé une séance de simulation et pitch en préparation de la finale aux USA.",
            date: "Septembre 2019",
            category: "Histoire"
        },
        {
            id: 4,
            title: "Enactus EMI : EPIC, la révolution écologique à la cire d'abeille",
            image: "https://f2.hespress.com/wp-content/uploads/2024/05/emi-epic.jpg",
            content: "Motivés par une passion pour l'entrepreneuriat social, les élèves ingénieurs de l'EMI présentent leur dernier projet révolutionnaire : EPIC. Cette initiative utilise la cire d'abeille pour proposer des alternatives écologiques aux produits plastiques, tout en offrant de nouvelles solutions d'imperméabilisation.",
            date: "Mai 2024",
            category: "Projet Innovant"
        },
        {
            id: 5,
            title: "La 5ème Édition du EMI Entrepreneurial Summit",
            image: "https://www.hitradio.ma/sites/default/files/2024-02/affiche_hit_radio.png",
            content: "L'EMI annonce la 5ème édition du EMI Entrepreneurial Summit le 29 Février 2024 à Rabat. Cet événement explorera le football, le patrimoine culturel et le marketing national, avec des intervenants divers pour des conférences enrichissantes.",
            date: "Février 2024",
            category: "Événement"
        },
        {
            id: 6,
            title: "5è EMI Entrepreneurial Summit: Patrimoine, football et marque nationale en débat",
            image: "https://f2.hespress.com/wp-content/uploads/2024/02/emi_summit.jpg",
            content: "La 5ème édition du EMI Entrepreneurial Summit prévue le 29 février à Rabat, autour de thématiques diverses ayant trait au Patrimoine, au football et à la marque nationale.",
            date: "Février 2024",
            category: "Événement"
        }
    ];

    const events = [
        {
            title: "Annual Innovation Summit 2023",
            description: "Join us for our annual summit where we showcase the latest projects, host workshops on entrepreneurial action, and connect with industry leaders.",
            date: "October 25, 2023",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
            type: "event" as const
        },
        {
            title: "Social Entrepreneurship Workshop Series",
            description: "A four-week workshop series exploring different aspects of social entrepreneurship, from ideation to impact measurement.",
            date: "September 5-26, 2023",
            image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
            type: "event" as const
        },
        {
            title: "Recruiting Open Day - Fall 2023",
            description: "Interested in joining Enactus EMI? Attend our open day to learn about our projects, meet the team, and find out how you can contribute.",
            date: "August 30, 2023",
            image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
            type: "event" as const
        },
        {
            title: "World Cup Celebration & Project Showcase",
            description: "Join us to celebrate our recent World Cup achievement and get an exclusive look at the projects that took us to the global stage.",
            date: "July 10, 2023",
            image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
            type: "event" as const
        }
    ];

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            {/* Hero Section */}
            <section className="pt-24 md:pt-32 pb-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 z-0"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            News & <span className="text-enactus-yellow">Updates</span>
                        </h1>
                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                            Stay updated with the latest news, press coverage, and upcoming events from Enactus EMI.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Tabbed Content */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <Tab.Group>
                        <Tab.List className="flex p-1 space-x-1 bg-gray-800 rounded-xl max-w-2xl mx-auto mb-12">
                            {['All', 'Events', 'Press', 'Projects'].map((category) => (
                                <Tab
                                    key={category}
                                    className={({ selected }) =>
                                        classNames(
                                            'w-full py-3 text-sm font-medium rounded-lg',
                                            'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-800 ring-enactus-yellow ring-opacity-60 transition-all',
                                            selected
                                                ? 'bg-enactus-yellow text-enactus-black shadow'
                                                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                        )
                                    }
                                >
                                    {category}
                                </Tab>
                            ))}
                        </Tab.List>
                        <Tab.Panels className="mt-2">
                            <Tab.Panel className="rounded-xl focus:outline-none">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {pressArticles.map((article, index) => (
                                        <motion.div
                                            key={article.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                                        >
                                            <div className="relative h-48">
                                                <img
                                                    src={article.image}
                                                    alt={article.title}
                                                    className="w-full h-full object-cover"
                                                    loading="lazy"
                                                />
                                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                                    <span className="inline-block px-2 py-1 bg-enactus-yellow text-gray-900 text-xs font-bold rounded">
                                                        {article.category}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="p-6">
                                                <div className="flex items-center text-sm text-gray-400 mb-2">
                                                    <span>{article.date}</span>
                                                </div>
                                                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                                                    {article.title}
                                                </h3>
                                                <p className="text-gray-300 mb-4 line-clamp-3">
                                                    {article.content}
                                                </p>
                                                <a
                                                    href="#"
                                                    className="inline-flex items-center text-enactus-yellow font-medium hover:text-enactus-yellow/80 transition-colors"
                                                >
                                                    Read more
                                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </Tab.Panel>

                            <Tab.Panel className="rounded-xl focus:outline-none">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {pressArticles.filter(article => article.category === 'Événement').map((event, index) => (
                                        <NewsCard
                                            key={event.id}
                                            title={event.title}
                                            description={event.content}
                                            date={event.date}
                                            image={event.image}
                                            delay={index * 0.1}
                                            type="event"
                                        />
                                    ))}
                                </div>
                            </Tab.Panel>

                            <Tab.Panel className="rounded-xl focus:outline-none">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {pressArticles.filter(article => article.category === 'Actualité').map((press, index) => (
                                        <NewsCard
                                            key={press.id}
                                            title={press.title}
                                            description={press.content}
                                            date={press.date}
                                            image={press.image}
                                            delay={index * 0.1}
                                            type="press"
                                        />
                                    ))}
                                </div>
                            </Tab.Panel>

                            <Tab.Panel className="rounded-xl focus:outline-none">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {pressArticles.filter(article => article.category === 'Projet Innovant').map((project, index) => (
                                        <NewsCard
                                            key={project.id}
                                            title={project.title}
                                            description={project.content}
                                            date={project.date}
                                            image={project.image}
                                            delay={index * 0.1}
                                            type="project"
                                        />
                                    ))}
                                </div>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-20 bg-gray-800 text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-8"
                        >
                            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                            <p className="text-gray-300 text-lg">
                                Subscribe to our newsletter to receive the latest news and event announcements directly in your inbox.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-gray-700 backdrop-blur-sm p-8 rounded-xl border border-gray-600"
                        >
                            <form className="flex flex-col md:flex-row gap-4">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="flex-1 px-4 py-3 rounded-md bg-gray-600 border border-gray-500 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-enactus-yellow/30"
                                    required
                                />
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="px-6 py-3 bg-enactus-yellow text-enactus-black font-medium rounded-md hover:bg-enactus-yellow/90 transition-colors duration-300"
                                >
                                    Subscribe
                                </motion.button>
                            </form>
                            <p className="text-gray-400 text-sm mt-4">
                                We respect your privacy. Unsubscribe at any time.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default News;