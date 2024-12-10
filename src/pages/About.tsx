import { motion } from "framer-motion";
import Header from "@/components/Header";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h1 className="text-4xl font-bold text-iit-primary">About IIT Bhilai</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="prose max-w-none"
            >
              <h2 className="text-2xl font-semibold text-iit-secondary mb-4">Our Vision</h2>
              <p className="text-gray-700">
                To be a world-class institution of higher learning, fostering high-quality education 
                and research in science, engineering, and technology, producing global leaders in 
                science and technology.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-iit-primary/10 to-iit-secondary/10 rounded-lg p-6"
            >
              <h2 className="text-2xl font-semibold text-iit-secondary mb-4">Our Mission</h2>
              <ul className="space-y-3 text-gray-700">
                <li>• Excellence in Education</li>
                <li>• Pioneering Research</li>
                <li>• Innovation & Entrepreneurship</li>
                <li>• Global Collaboration</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8"
          >
            <h2 className="text-2xl font-semibold text-iit-secondary mb-4">Our History</h2>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed">
                IIT Bhilai was established in 2016 as one of the new IITs, carrying forward the 
                legacy of excellence that IITs are known for. Since its inception, the institute 
                has been committed to providing world-class education and research facilities.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default About;