import { motion } from "framer-motion";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const facilities = [
  {
    title: "Student Housing",
    description: "Modern hostels with Wi-Fi, recreation areas, and dining facilities.",
  },
  {
    title: "Sports Complex",
    description: "Indoor and outdoor sports facilities including gym, swimming pool, and courts.",
  },
  {
    title: "Cultural Center",
    description: "Spaces for arts, music, dance, and cultural activities.",
  },
  {
    title: "Innovation Hub",
    description: "Maker spaces and innovation labs for student projects.",
  },
];

const CampusLife = () => {
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
          <h1 className="text-4xl font-bold text-iit-primary">Campus Life</h1>

          <div className="grid md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-iit-secondary">{facility.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{facility.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8"
          >
            <h2 className="text-2xl font-semibold text-iit-secondary mb-6">Student Activities</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-iit-primary/10 to-iit-secondary/10 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-iit-primary mb-4">Clubs & Societies</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Technical Clubs</li>
                  <li>• Cultural Clubs</li>
                  <li>• Sports Teams</li>
                  <li>• Literary Society</li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-iit-secondary/10 to-iit-accent/10 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-iit-primary mb-4">Events</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Tech Fests</li>
                  <li>• Cultural Festivals</li>
                  <li>• Sports Meets</li>
                  <li>• Workshops</li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-iit-accent/10 to-iit-primary/10 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-iit-primary mb-4">Campus Services</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Health Center</li>
                  <li>• Counseling Services</li>
                  <li>• Career Development</li>
                  <li>• Student Support</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default CampusLife;