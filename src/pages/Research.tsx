import { motion } from "framer-motion";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const researchAreas = [
  {
    title: "Artificial Intelligence",
    description: "Machine Learning, Deep Learning, Computer Vision, and Natural Language Processing.",
  },
  {
    title: "Robotics & Automation",
    description: "Industrial Automation, Humanoid Robotics, and Smart Manufacturing Systems.",
  },
  {
    title: "Sustainable Energy",
    description: "Renewable Energy Systems, Smart Grids, and Energy Storage Solutions.",
  },
  {
    title: "Nanotechnology",
    description: "Nanomaterials, Nanoelectronics, and Quantum Computing Applications.",
  },
];

const Research = () => {
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
          <h1 className="text-4xl font-bold text-iit-primary">Research</h1>

          <div className="grid md:grid-cols-2 gap-6">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-iit-secondary">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{area.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-semibold text-iit-secondary mb-6">Research Highlights</h2>
            <div className="bg-gradient-to-br from-iit-primary/10 to-iit-secondary/10 p-6 rounded-lg">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-iit-primary mb-2">50+</div>
                  <div className="text-gray-700">Research Labs</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-iit-primary mb-2">200+</div>
                  <div className="text-gray-700">Publications</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-iit-primary mb-2">₹100Cr+</div>
                  <div className="text-gray-700">Research Funding</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default Research;