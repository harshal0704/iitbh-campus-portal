import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-gradient-to-r from-iit-primary to-iit-secondary shadow-lg">
      <div className="container mx-auto">
        {/* Top bar */}
        <div className="flex justify-between items-center py-2 text-sm border-b border-white/20">
          <div className="flex gap-4">
            <a 
              href="https://aimsportal.iitbhilai.ac.in/iitbhAims/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/90 hover:text-white transition-colors duration-200 hover:scale-105 transform"
            >
              Student Login
            </a>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-white/90 hover:text-white transition-colors duration-200 hover:scale-105 transform">Alumni</a>
            <a href="#" className="text-white/90 hover:text-white transition-colors duration-200 hover:scale-105 transform">Careers</a>
            <a href="#" className="text-white/90 hover:text-white transition-colors duration-200 hover:scale-105 transform">Contact</a>
          </div>
        </div>
        
        {/* Main header */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <img src="/placeholder.svg" alt="IIT Bhilai Logo" className="h-16 w-16 hover:rotate-3 transition-transform duration-300" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-white">IIT Bhilai</h1>
              <p className="text-sm text-white/80">Indian Institute of Technology Bhilai</p>
            </div>
          </div>
          <Button variant="secondary" className="lg:hidden hover:bg-white/90 transition-colors">
            <Menu className="h-6 w-6" />
          </Button>
          <nav className="hidden lg:flex gap-6">
            <NavLink to="/about" label="About" active={location.pathname === "/about"} />
            <NavLink to="/academics" label="Academics" active={location.pathname === "/academics"} />
            <NavLink to="/admission" label="Admission" active={location.pathname === "/admission"} />
            <NavLink to="/research" label="Research" active={location.pathname === "/research"} />
            <NavLink to="/campus-life" label="Campus Life" active={location.pathname === "/campus-life"} />
          </nav>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ to, label, active }: { to: string; label: string; active: boolean }) => (
  <Link
    to={to}
    className={`text-white relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
      active ? "after:scale-x-100" : ""
    }`}
  >
    {label}
  </Link>
);

export default Header;