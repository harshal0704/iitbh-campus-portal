import { Button } from "@/components/ui/button";

const NewsSection = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* News & Events */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-iit-primary mb-4">News & Events</h2>
            <div className="space-y-4">
              {newsItems.map((item, index) => (
                <div key={index} className="border-b pb-4 last:border-0">
                  <p className="text-sm text-gray-500 mb-1">{item.date}</p>
                  <a href="#" className="hover:text-iit-secondary">
                    {item.title}
                  </a>
                </div>
              ))}
            </div>
            <Button variant="outline" className="mt-4 w-full">
              View All News
            </Button>
          </div>

          {/* Announcements */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-iit-primary mb-4">Announcements</h2>
            <div className="space-y-4">
              {announcements.map((item, index) => (
                <div key={index} className="border-b pb-4 last:border-0">
                  <a href="#" className="hover:text-iit-secondary">
                    {item.title}
                  </a>
                </div>
              ))}
            </div>
            <Button variant="outline" className="mt-4 w-full">
              View All Announcements
            </Button>
          </div>

          {/* Quick Links */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-iit-primary mb-4">Quick Links</h2>
            <div className="grid grid-cols-2 gap-4">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center gap-2 text-gray-700 hover:text-iit-secondary"
                >
                  {link}
                </a>
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