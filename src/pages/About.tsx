import { motion } from "framer-motion";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-blue-50">
      <Header />
      <main className="flex-1 container mx-auto py-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-iit-primary mb-4">About IIT Bhilai</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Established in 2016, IIT Bhilai stands as a beacon of excellence in technical education and research, 
              carrying forward the prestigious legacy of the Indian Institutes of Technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-iit-primary/10 to-iit-secondary/10 rounded-lg p-6 shadow-lg"
            >
              <h2 className="text-2xl font-semibold text-iit-primary mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To emerge as a global leader in technical education and research, fostering innovation 
                and entrepreneurship. We aim to create responsible technocrats and researchers who 
                contribute significantly to society's technological advancement and sustainable development.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-iit-secondary/10 to-iit-accent/10 rounded-lg p-6 shadow-lg"
            >
              <h2 className="text-2xl font-semibold text-iit-secondary mb-4">Our Mission</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-2">
                  <span className="h-2 w-2 bg-iit-accent rounded-full" />
                  <span>Providing world-class education in engineering and technology</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-2 w-2 bg-iit-accent rounded-full" />
                  <span>Fostering research and innovation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-2 w-2 bg-iit-accent rounded-full" />
                  <span>Promoting industry collaboration and entrepreneurship</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-2 w-2 bg-iit-accent rounded-full" />
                  <span>Developing responsible global leaders</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-3 gap-6"
          >
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-iit-primary">Campus Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Our state-of-the-art campus spans over 100 acres, featuring modern laboratories,
                  smart classrooms, and research facilities equipped with cutting-edge technology.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-iit-secondary">Research Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  With over 50 research laboratories and numerous ongoing projects, we're at the
                  forefront of technological innovation and scientific discovery.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-iit-accent">Student Life</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Experience a vibrant campus life with numerous clubs, cultural events, sports
                  facilities, and opportunities for personal and professional growth.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-8 mt-12"
          >
            <h2 className="text-2xl font-semibold text-iit-primary mb-6">Key Highlights</h2>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100">
                <h3 className="text-3xl font-bold text-iit-primary mb-2">100+</h3>
                <p className="text-gray-600">Faculty Members</p>
              </div>
              <div className="p-4 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100">
                <h3 className="text-3xl font-bold text-iit-accent mb-2">1000+</h3>
                <p className="text-gray-600">Students</p>
              </div>
              <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100">
                <h3 className="text-3xl font-bold text-iit-secondary mb-2">50+</h3>
                <p className="text-gray-600">Research Labs</p>
              </div>
              <div className="p-4 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100">
                <h3 className="text-3xl font-bold text-iit-accent mb-2">30+</h3>
                <p className="text-gray-600">Student Clubs</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default About;