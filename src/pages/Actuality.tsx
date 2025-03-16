
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
      title: "Enactus EMI's Innovative Solutions to Water Scarcity Featured in National News",
      description: "The team's project addressing water challenges in rural communities has been highlighted for its innovative approach and significant impact.",
      date: "May 15, 2023",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
      source: "Morocco Today",
      sourceUrl: "https://example.com/news1",
      type: "press" as const
    },
    {
      title: "EMI Students Win International Recognition for Sustainable Business Models",
      description: "Enactus EMI's innovative approach to creating sustainable business solutions has earned them international acclaim and features in business publications.",
      date: "March 8, 2023",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      source: "Business Weekly",
      sourceUrl: "https://example.com/news2",
      type: "press" as const
    },
    {
      title: "Local Initiative by Enactus EMI Transforms Community Waste Management",
      description: "A feature article on how Enactus EMI's waste management project is creating both environmental impact and economic opportunities for local communities.",
      date: "December 12, 2022",
      image: "https://images.unsplash.com/photo-1503596476-1c12a8ba09a9",
      source: "Green Future",
      sourceUrl: "https://example.com/news3",
      type: "press" as const
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
              {Object.keys(categories).map((category) => (
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
                  {[...pressArticles, ...events].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((item, index) => (
                    <NewsCard
                      key={`${item.title}-${index}`}
                      title={item.title}
                      description={item.description}
                      date={item.date}
                      image={item.image}
                      source={item.type === 'press' ? (item as any).source : undefined}
                      sourceUrl={item.type === 'press' ? (item as any).sourceUrl : undefined}
                      delay={index * 0.1}
                      type={item.type}
                    />
                  ))}
                </div>
              </Tab.Panel>
              <Tab.Panel className="rounded-xl focus:outline-none">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {events.map((event, index) => (
                    <NewsCard
                      key={`${event.title}-${index}`}
                      title={event.title}
                      description={event.description}
                      date={event.date}
                      image={event.image}
                      delay={index * 0.1}
                      type={event.type}
                    />
                  ))}
                </div>
              </Tab.Panel>
              <Tab.Panel className="rounded-xl focus:outline-none">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {pressArticles.map((article, index) => (
                    <NewsCard
                      key={`${article.title}-${index}`}
                      title={article.title}
                      description={article.description}
                      date={article.date}
                      image={article.image}
                      source={article.source}
                      sourceUrl={article.sourceUrl}
                      delay={index * 0.1}
                      type={article.type}
                    />
                  ))}
                </div>
              </Tab.Panel>
              <Tab.Panel className="rounded-xl focus:outline-none">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Articles content goes here - similar structure as press */}
                  <div className="text-center py-16 col-span-full">
                    <h3 className="text-xl font-semibold text-gray-300 mb-2">Coming Soon</h3>
                    <p className="text-gray-400">
                      We're preparing great article content for you. Stay tuned!
                    </p>
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-enactus-black text-white">
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
              className="bg-gray-800 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
            >
              <form className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-md bg-gray-700 border border-gray-600 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-enactus-yellow/30"
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
};

export default News;
