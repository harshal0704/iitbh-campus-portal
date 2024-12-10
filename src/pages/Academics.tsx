import { motion } from "framer-motion";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const programs = [
  {
    title: "B.Tech Programs",
    courses: ["Computer Science", "Electrical Engineering", "Mechanical Engineering"],
  },
  {
    title: "M.Tech Programs",
    courses: ["AI & Machine Learning", "VLSI Design", "Robotics"],
  },
  {
    title: "Ph.D Programs",
    courses: ["Engineering", "Sciences", "Interdisciplinary Areas"],
  },
];

const Academics = () => {
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
          <h1 className="text-4xl font-bold text-iit-primary">Academic Programs</h1>

          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-iit-secondary">{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
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
        </motion.div>
      </main>
    </div>
  );
};

export default Academics;