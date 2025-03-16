
import { motion } from "framer-motion";
import { Users, Lightbulb, Globe, Heart } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface CountUpProps {
  end: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  prefix?: string;
}

const CountUp = ({ end, duration = 2, delay = 0, suffix = "", prefix = "" }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return <div ref={ref}>{prefix}{count}{suffix}</div>;
};

const ImpactNumbers = () => {
  const impactData = [
    { 
      metric: "Lives Impacted", 
      value: 25000, 
      icon: Heart, 
      suffix: "+",
      description: "People whose lives have been directly improved through our initiatives"
    },
    { 
      metric: "Projects Launched", 
      value: 45, 
      icon: Lightbulb, 
      suffix: "",
      description: "Successful projects addressing various social and environmental challenges"
    },
    { 
      metric: "Communities Served", 
      value: 30, 
      icon: Globe, 
      suffix: "",
      description: "Different communities across Morocco where we've implemented our projects"
    },
    { 
      metric: "Student Entrepreneurs", 
      value: 120, 
      icon: Users, 
      suffix: "+",
      description: "Students trained in social entrepreneurship and business skills"
    }
  ];

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 inset-0">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-enactus-yellow/10 blur-3xl" />
        <div className="absolute bottom-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-enactus-yellow/20 to-transparent" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 bg-enactus-yellow/20 text-enactus-yellow rounded-full text-sm font-medium mb-3">
            Our Impact
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">By the Numbers</h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            The measurable difference we've made through our social entrepreneurship projects
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactData.map((item, index) => (
            <motion.div
              key={item.metric}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 border border-gray-700 rounded-lg p-8 text-center shadow-lg hover:shadow-enactus-yellow/5 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-enactus-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-enactus-yellow/10 text-enactus-yellow mb-4 group-hover:animate-pulse-glow">
                  <item.icon size={28} />
                </div>
                
                <h3 className="text-4xl font-bold text-white mb-1">
                  <CountUp 
                    end={item.value} 
                    suffix={item.suffix} 
                    delay={index * 0.2} 
                  />
                </h3>
                
                <p className="text-lg font-medium text-enactus-yellow mb-3">{item.metric}</p>
                
                <p className="text-sm text-gray-400">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactNumbers;
