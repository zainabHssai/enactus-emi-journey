import { useState } from "react";
import { motion } from "framer-motion";

interface SDG {
  id: number;
  name: string;
  description: string;
  image: string;
}

const ALL_SDGs: SDG[] = [
  { id: 1, name: "No Poverty", description: "End poverty in all its forms everywhere", image: "/SDGs/1.png" },
  { id: 2, name: "Zero Hunger", description: "End hunger, achieve food security and improved nutrition", image: "/SDGs/2.png" },
  { id: 3, name: "Good Health", description: "Ensure healthy lives and promote well-being for all at all ages", image: "/SDGs/3.png" },
  { id: 4, name: "Quality Education", description: "Ensure inclusive and equitable quality education", image: "/SDGs/4.png" },
  { id: 5, name: "Gender Equality", description: "Achieve gender equality and empower all women and girls", image: "/SDGs/5.png" },
  { id: 6, name: "Clean Water", description: "Ensure availability and sustainable management of water and sanitation", image: "/SDGs/6.png" },
  { id: 7, name: "Affordable Energy", description: "Ensure access to affordable, reliable, sustainable energy", image: "/SDGs/7.png" },
  { id: 8, name: "Economic Growth", description: "Promote sustained, inclusive and sustainable economic growth", image: "/SDGs/8.png" },
  { id: 9, name: "Industry & Innovation", description: "Build resilient infrastructure and foster innovation", image: "/SDGs/9.png" },
  { id: 10, name: "Reduced Inequalities", description: "Reduce inequality within and among countries", image: "/SDGs/10.png" },
  { id: 11, name: "Sustainable Cities", description: "Make cities inclusive, safe, resilient and sustainable", image: "/SDGs/11.png" },
  { id: 12, name: "Responsible Consumption", description: "Ensure sustainable consumption and production patterns", image: "/SDGs/12.png" },
  { id: 13, name: "Climate Action", description: "Take urgent action to combat climate change and its impacts", image: "/SDGs/13.png" },
  { id: 14, name: "Life Below Water", description: "Conserve and sustainably use oceans, seas and marine resources", image: "/SDGs/14.png" },
  { id: 15, name: "Life On Land", description: "Protect, restore and promote sustainable use of terrestrial ecosystems", image: "/SDGs/15.png" },
  { id: 16, name: "Peace & Justice", description: "Promote peaceful and inclusive societies for sustainable development", image: "/SDGs/16.png" },
  { id: 17, name: "Partnerships", description: "Strengthen the means of implementation and revitalize global partnership", image: "/SDGs/17.png" }
];

const ENACTUS_SDGs = [3, 4, 8, 11, 12, 13];

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
        
        {/* Section des SDGs d'Enactus */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-6 text-center text-enactus-yellow">
            Enactus EMI Focus Areas
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {ALL_SDGs.filter(sdg => ENACTUS_SDGs.includes(sdg.id)).map((sdg) => (
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
                <div className="flex justify-center mb-3 h-16">
                  <img 
                    src={sdg.image} 
                    alt={`SDG ${sdg.id}`}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <h4 className="font-bold">{sdg.name}</h4>
                <div className="mt-1 text-xs text-gray-400">Goal {sdg.id}</div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Section de tous les SDGs */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-6 text-center text-enactus-yellow">
            All Sustainable Development Goals
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {ALL_SDGs.map((sdg) => (
              <motion.div
                key={sdg.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className={`bg-gray-800 rounded-lg p-4 cursor-pointer shadow-md border border-gray-700 text-center ${
                  ENACTUS_SDGs.includes(sdg.id) ? "ring-2 ring-enactus-yellow" : ""
                }`}
                onClick={() => setSelectedSDG(sdg)}
              >
                <div className="flex justify-center mb-2 h-12">
                  <img 
                    src={sdg.image} 
                    alt={`SDG ${sdg.id}`}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <div className="font-bold text-xs">Goal {sdg.id}</div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Modal de détails */}
        {selectedSDG && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700"
          >
            <div className="flex items-start mb-4">
              <div className="w-16 h-16 rounded-lg bg-gray-700 flex items-center justify-center mr-4 flex-shrink-0">
                <img 
                  src={selectedSDG.image} 
                  alt={`SDG ${selectedSDG.id}`}
                  className="h-full w-auto object-contain"
                />
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