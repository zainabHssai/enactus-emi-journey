
import { useState } from "react";
import { motion } from "framer-motion";

interface SDG {
  id: number;
  name: string;
  description: string;
  icon: string;
}

const SDGs: SDG[] = [
  { id: 1, name: "No Poverty", description: "End poverty in all its forms everywhere", icon: "💰" },
  { id: 2, name: "Zero Hunger", description: "End hunger, achieve food security and improved nutrition", icon: "🍲" },
  { id: 3, name: "Good Health", description: "Ensure healthy lives and promote well-being for all at all ages", icon: "🏥" },
  { id: 4, name: "Quality Education", description: "Ensure inclusive and equitable quality education", icon: "🎓" },
  { id: 5, name: "Gender Equality", description: "Achieve gender equality and empower all women and girls", icon: "⚧️" },
  { id: 6, name: "Clean Water", description: "Ensure availability and sustainable management of water and sanitation", icon: "💧" },
  { id: 7, name: "Affordable Energy", description: "Ensure access to affordable, reliable, sustainable energy", icon: "⚡" },
  { id: 8, name: "Economic Growth", description: "Promote sustained, inclusive and sustainable economic growth", icon: "📈" },
  { id: 9, name: "Industry & Innovation", description: "Build resilient infrastructure and foster innovation", icon: "🏭" },
  { id: 10, name: "Reduced Inequalities", description: "Reduce inequality within and among countries", icon: "🤝" },
  { id: 11, name: "Sustainable Cities", description: "Make cities inclusive, safe, resilient and sustainable", icon: "🏙️" },
  { id: 12, name: "Responsible Consumption", description: "Ensure sustainable consumption and production patterns", icon: "♻️" },
  { id: 13, name: "Climate Action", description: "Take urgent action to combat climate change and its impacts", icon: "🌡️" },
  { id: 14, name: "Life Below Water", description: "Conserve and sustainably use oceans, seas and marine resources", icon: "🐠" },
  { id: 15, name: "Life On Land", description: "Protect, restore and promote sustainable use of terrestrial ecosystems", icon: "🌳" },
  { id: 16, name: "Peace & Justice", description: "Promote peaceful and inclusive societies for sustainable development", icon: "⚖️" },
  { id: 17, name: "Partnerships", description: "Strengthen the means of implementation and revitalize global partnership", icon: "🤲" }
];

// The SDGs Enactus EMI is focusing on
const focusedSDGs = [3, 4, 8, 11, 12, 13];

const SDGsSection = () => {
  const [selectedSDG, setSelectedSDG] = useState<SDG | null>(null);

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 bg-enactus-yellow/20 text-enactus-yellow rounded-full text-sm font-medium mb-3">
            Sustainable Development
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            SDGs We're Addressing
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Enactus EMI's projects directly contribute to these United Nations Sustainable Development Goals
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-16">
          {SDGs.filter(sdg => focusedSDGs.includes(sdg.id)).map((sdg) => (
            <motion.div
              key={sdg.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800 rounded-lg p-6 cursor-pointer shadow-md hover:shadow-enactus-yellow/10 border border-gray-700 text-center"
              onClick={() => setSelectedSDG(sdg)}
            >
              <div className="text-4xl mb-3">{sdg.icon}</div>
              <h4 className="font-bold">{sdg.name}</h4>
              <div className="mt-1 text-xs text-gray-400">Goal {sdg.id}</div>
            </motion.div>
          ))}
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {SDGs.map((sdg) => (
            <motion.div
              key={sdg.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800 rounded-lg p-3 cursor-pointer shadow-md hover:shadow-enactus-yellow/10 border border-gray-700 flex flex-col items-center justify-center"
              onClick={() => setSelectedSDG(sdg)}
            >
              <div className="text-xl">{sdg.icon}</div>
              <div className="font-bold text-xs mt-1 text-center">{sdg.id}</div>
            </motion.div>
          ))}
        </div>
        
        {selectedSDG && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-2xl mr-4">
                {selectedSDG.icon}
              </div>
              <div>
                <h3 className="font-bold text-xl text-white">Goal {selectedSDG.id}: {selectedSDG.name}</h3>
                <p className="text-gray-300">{selectedSDG.description}</p>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setSelectedSDG(null)}
                className="text-sm font-medium text-enactus-yellow hover:underline"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default SDGsSection;
