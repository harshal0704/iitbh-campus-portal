import { motion } from "framer-motion";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const facilities = [
  {
    title: "Student Housing",
    description: "Modern hostels with Wi-Fi, recreation areas, and dining facilities. Each hostel is equipped with 24/7 security, laundry services, and common rooms for socializing and study.",
    amenities: ["24/7 Wi-Fi", "Gym", "Common Room", "Laundry Services", "Security"]
  },
  {
    title: "Sports Complex",
    description: "State-of-the-art sports facilities including indoor and outdoor courts, professional gym, and Olympic-size swimming pool.",
    amenities: ["Cricket Ground", "Football Field", "Basketball Courts", "Swimming Pool", "Fitness Center"]
  },
  {
    title: "Cultural Center",
    description: "A vibrant hub for arts and cultural activities, featuring dedicated spaces for music, dance, and theatrical performances.",
    amenities: ["Auditorium", "Music Room", "Dance Studio", "Art Gallery", "Recording Studio"]
  },
  {
    title: "Innovation Hub",
    description: "Cutting-edge facilities for research and innovation, including specialized labs and collaborative workspaces.",
    amenities: ["3D Printing Lab", "Electronics Lab", "Robotics Center", "Collaboration Spaces", "Project Rooms"]
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
          <div className="flex items-center justify-center space-x-4 mb-8">
            <img 
              src="/iit-bhilai-logo.png" 
              alt="IIT Bhilai Logo" 
              className="h-16 w-auto"
            />
            <h1 className="text-4xl font-bold text-iit-primary">Campus Life at IIT Bhilai</h1>
          </div>

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
                  <CardContent className="space-y-4">
                    <p className="text-gray-700">{facility.description}</p>
                    <div className="mt-4">
                      <h4 className="font-semibold text-iit-primary mb-2">Key Amenities:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {facility.amenities.map((amenity, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <span className="h-1.5 w-1.5 bg-iit-accent rounded-full" />
                            <span className="text-gray-700">{amenity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
            <h2 className="text-2xl font-semibold text-iit-secondary mb-6">Student Life & Activities</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-iit-primary/10 to-iit-secondary/10 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-iit-primary mb-4">Clubs & Societies</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Technical Clubs (Robotics, Coding)</li>
                  <li>• Cultural Clubs (Music, Dance, Drama)</li>
                  <li>• Sports Teams (Cricket, Football)</li>
                  <li>• Literary Society (Debate, Writing)</li>
                  <li>• Photography Club</li>
                  <li>• Environmental Club</li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-iit-secondary/10 to-iit-accent/10 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-iit-primary mb-4">Annual Events</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Meraz (Technical Festival)</li>
                  <li>• Cultural Festival</li>
                  <li>• Sports Tournament</li>
                  <li>• Hackathons</li>
                  <li>• Research Symposium</li>
                  <li>• Alumni Meet</li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-iit-accent/10 to-iit-primary/10 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-iit-primary mb-4">Campus Services</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 24/7 Health Center</li>
                  <li>• Student Counseling Services</li>
                  <li>• Career Development Cell</li>
                  <li>• International Student Support</li>
                  <li>• Transport Services</li>
                  <li>• Banking & ATM Facilities</li>
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