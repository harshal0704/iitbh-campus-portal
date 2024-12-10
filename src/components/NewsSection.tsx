import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const NewsSection = () => {
  return (
    <div className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* News & Events */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-iit-primary">
            <h2 className="text-xl font-bold text-iit-primary mb-4 flex items-center">
              <span className="bg-iit-primary text-white p-2 rounded mr-2">News & Events</span>
            </h2>
            <div className="space-y-4">
              {newsItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="border-b pb-4 last:border-0 hover:bg-gray-50 transition-colors duration-200 p-2 rounded"
                >
                  <p className="text-sm text-iit-secondary mb-1">{item.date}</p>
                  <a href="#" className="hover:text-iit-accent transition-colors duration-200 block">
                    {item.title}
                  </a>
                </motion.div>
              ))}
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                variant="outline" 
                className="mt-4 w-full group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-iit-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <span className="relative group-hover:text-white transition-colors duration-300">View All News</span>
              </Button>
            </motion.div>
          </div>

          {/* Announcements */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-iit-secondary">
            <h2 className="text-xl font-bold text-iit-secondary mb-4 flex items-center">
              <span className="bg-iit-secondary text-white p-2 rounded mr-2">Announcements</span>
            </h2>
            <div className="space-y-4">
              {announcements.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="border-b pb-4 last:border-0 hover:bg-gray-50 transition-colors duration-200 p-2 rounded"
                >
                  <a href="#" className="hover:text-iit-accent transition-colors duration-200 block">
                    {item.title}
                  </a>
                </motion.div>
              ))}
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                variant="outline" 
                className="mt-4 w-full group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-iit-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <span className="relative group-hover:text-white transition-colors duration-300">View All Announcements</span>
              </Button>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-iit-accent">
            <h2 className="text-xl font-bold text-iit-accent mb-4 flex items-center">
              <span className="bg-iit-accent text-white p-2 rounded mr-2">Quick Links</span>
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.05, x: 4 }}
                  className="flex items-center gap-2 text-gray-700 hover:text-iit-accent transition-colors duration-200 p-2 rounded hover:bg-gray-50"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
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