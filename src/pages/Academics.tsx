import { motion } from "framer-motion";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const programs = [
  {
    title: "B.Tech Programs",
    courses: [
      "Computer Science and Engineering",
      "Electrical Engineering",
      "Mechanical Engineering",
      "Data Science and Artificial Intelligence",
    ],
    description: "Four-year undergraduate programs designed to create industry-ready engineers with strong theoretical foundations and practical skills."
  },
  {
    title: "M.Tech Programs",
    courses: [
      "AI & Machine Learning",
      "VLSI Design",
      "Robotics & Automation",
      "Power Systems",
      "Thermal Engineering"
    ],
    description: "Two-year postgraduate programs focusing on advanced specializations and research-oriented learning."
  },
  {
    title: "Ph.D Programs",
    courses: [
      "Computer Science & Engineering",
      "Electrical Engineering",
      "Mechanical Engineering",
      "Physics",
      "Mathematics",
      "Chemistry"
    ],
    description: "Doctoral programs aimed at pushing the boundaries of research and innovation in various disciplines."
  },
];

const Academics = () => {
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
            <h1 className="text-4xl font-bold text-iit-primary mb-4">Academic Programs</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of academic programs designed to nurture innovation,
              research, and technical excellence across various disciplines.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-iit-secondary">{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">{program.description}</p>
                    <ul className="space-y-2">
                      {program.courses.map((course, idx) => (
                        <motion.li
                          key={idx}
                          whileHover={{ x: 5 }}
                          className="flex items-center space-x-2 text-gray-700"
                        >
                          <span className="h-1.5 w-1.5 bg-iit-accent rounded-full" />
                          <span>{course}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid md:grid-cols-2 gap-8 mt-12"
          >
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-iit-primary">Academic Excellence</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Our programs are designed to provide:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2 text-gray-700">
                    <span className="h-1.5 w-1.5 bg-iit-accent rounded-full" />
                    <span>Industry-relevant curriculum</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-700">
                    <span className="h-1.5 w-1.5 bg-iit-accent rounded-full" />
                    <span>Hands-on practical experience</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-700">
                    <span className="h-1.5 w-1.5 bg-iit-accent rounded-full" />
                    <span>Research opportunities</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-700">
                    <span className="h-1.5 w-1.5 bg-iit-accent rounded-full" />
                    <span>International collaborations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-iit-secondary">Research Focus</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Key research areas include:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2 text-gray-700">
                    <span className="h-1.5 w-1.5 bg-iit-accent rounded-full" />
                    <span>Artificial Intelligence & Machine Learning</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-700">
                    <span className="h-1.5 w-1.5 bg-iit-accent rounded-full" />
                    <span>Renewable Energy Systems</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-700">
                    <span className="h-1.5 w-1.5 bg-iit-accent rounded-full" />
                    <span>Advanced Materials & Manufacturing</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-700">
                    <span className="h-1.5 w-1.5 bg-iit-accent rounded-full" />
                    <span>Quantum Computing & Communications</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default Academics;