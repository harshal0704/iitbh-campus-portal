import { motion } from "framer-motion";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

const admissionSteps = [
  {
    title: "Online Application",
    description: "Fill out the online application form with your personal and academic details.",
  },
  {
    title: "Document Submission",
    description: "Upload all required documents including academic transcripts and certificates.",
  },
  {
    title: "Entrance Examination",
    description: "Take the required entrance examination (JEE Advanced for B.Tech programs).",
  },
  {
    title: "Counselling Process",
    description: "Participate in the counselling process for seat allocation.",
  },
];

const Admission = () => {
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
          <h1 className="text-4xl font-bold text-iit-primary">Admissions</h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-iit-secondary">Admission Process</h2>
              <div className="space-y-6">
                {admissionSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-lg font-semibold text-iit-primary mb-2">
                      {index + 1}. {step.title}
                    </h3>
                    <p className="text-gray-700">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-iit-primary/10 to-iit-secondary/10 p-6 rounded-lg"
            >
              <h2 className="text-2xl font-semibold text-iit-secondary mb-6">Important Dates</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow">
                  <span className="font-medium">Application Start Date</span>
                  <span className="text-iit-primary">March 1, 2024</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow">
                  <span className="font-medium">Application Deadline</span>
                  <span className="text-iit-primary">April 30, 2024</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow">
                  <span className="font-medium">Result Declaration</span>
                  <span className="text-iit-primary">June 15, 2024</span>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6"
              >
                <Button className="w-full bg-iit-primary hover:bg-iit-secondary transition-colors duration-300">
                  Apply Now
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Admission;