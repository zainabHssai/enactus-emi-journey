
import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Maximize2, X } from "lucide-react";

interface VideoProps {
  id: string;
  title: string;
  thumbnail: string;
}

const VideoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  
  const videos = [
    {
      id: "tMRt7vBzW8Q",
      title: "Enactus EMI Highlights",
      thumbnail: `https://img.youtube.com/vi/tMRt7vBzW8Q/maxresdefault.jpg`
    },
    {
      id: "FoQw0qOR6os",
      title: "Enactus EMI Projects",
      thumbnail: `https://img.youtube.com/vi/FoQw0qOR6os/maxresdefault.jpg`
    }
  ];

  const handleVideoClick = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-20 bg-enactus-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 bg-enactus-yellow/20 text-enactus-yellow rounded-full text-sm font-medium mb-3">
            Our Videos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Experience Our Journey
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Watch our videos to learn more about Enactus EMI's initiatives, projects, and impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="relative rounded-xl overflow-hidden group cursor-pointer"
              onClick={() => handleVideoClick(video.id)}
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-enactus-yellow/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play size={30} className="text-black ml-1" />
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="text-white font-semibold text-lg">{video.title}</h3>
                <div className="flex items-center mt-1">
                  <div className="bg-enactus-yellow/20 text-enactus-yellow text-xs px-2 py-1 rounded-full flex items-center">
                    <Maximize2 size={12} className="mr-1" />
                    <span>Watch Video</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative w-full max-w-4xl mx-auto aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              onClick={(e) => e.stopPropagation()}
            ></iframe>
            <button 
              className="absolute -top-10 right-0 text-white hover:text-enactus-yellow flex items-center"
              onClick={closeModal}
            >
              <span className="mr-2">Close</span>
              <X size={20} />
            </button>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default VideoSection;
