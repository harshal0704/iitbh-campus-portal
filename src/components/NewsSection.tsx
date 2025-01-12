import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const NewsSection = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {/* News & Events */}
          <motion.div 
            variants={item}
            className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-colors duration-300 group"
          >
            <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center">
              <span className="bg-blue-500/20 text-blue-300 p-3 rounded-lg mr-3">News & Events</span>
            </h2>
            <div className="space-y-6">
              {newsItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 4 }}
                  className="border-b border-gray-700/50 pb-4 last:border-0 group-hover:border-blue-500/20"
                >
                  <p className="text-sm text-blue-400 mb-1">{item.date}</p>
                  <a href="#" className="hover:text-blue-400 transition-colors duration-200 block">
                    {item.title}
                  </a>
                </motion.div>
              ))}
            </div>
            <Button 
              variant="outline" 
              className="mt-6 w-full border-blue-500/50 text-blue-400 hover:bg-blue-500/20 transition-all duration-300"
            >
              View All News
            </Button>
          </motion.div>

          {/* Announcements */}
          <motion.div 
            variants={item}
            className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-colors duration-300 group"
          >
            <h2 className="text-2xl font-bold text-purple-400 mb-6 flex items-center">
              <span className="bg-purple-500/20 text-purple-300 p-3 rounded-lg mr-3">Announcements</span>
            </h2>
            <div className="space-y-6">
              {announcements.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 4 }}
                  className="border-b border-gray-700/50 pb-4 last:border-0 group-hover:border-purple-500/20"
                >
                  <a href="#" className="hover:text-purple-400 transition-colors duration-200 block">
                    {item.title}
                  </a>
                </motion.div>
              ))}
            </div>
            <Button 
              variant="outline" 
              className="mt-6 w-full border-purple-500/50 text-purple-400 hover:bg-purple-500/20 transition-all duration-300"
            >
              View All Announcements
            </Button>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            variants={item}
            className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-colors duration-300"
          >
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
              <span className="bg-cyan-500/20 text-cyan-300 p-3 rounded-lg mr-3">Quick Links</span>
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ x: 4, color: "#22d3ee" }}
                  className="flex items-center gap-2 text-gray-300 transition-colors duration-200 p-2 rounded-lg hover:bg-cyan-500/10"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const newsItems = [
  {
    date: "March 15, 2024",
    title: "IIT Bhilai Researchers Develop New AI Algorithm",
  },
  {
    date: "March 14, 2024",
    title: "Campus Placement Records Show Strong Growth",
  },
  {
    date: "March 13, 2024",
    title: "International Conference on Emerging Technologies",
  },
];

const announcements = [
  {
    title: "Applications Open for MTech Programs 2024",
  },
  {
    title: "Important Notice: Academic Calendar Updates",
  },
  {
    title: "Research Grants Available for Faculty Members",
  },
  {
    title: "Summer Internship Program Registration",
  },
];

const quickLinks = [
  "Academic Calendar",
  "Admissions",
  "Research Portal",
  "Library",
  "Student Portal",
  "Faculty Directory",
  "Campus Map",
  "Careers",
];

export default NewsSection;