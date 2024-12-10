import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto">
        {/* Top bar */}
        <div className="flex justify-between items-center py-2 text-sm border-b">
          <div className="flex gap-4">
            <a href="#" className="hover:text-iit-secondary">Staff Login</a>
            <a href="#" className="hover:text-iit-secondary">Student Login</a>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-iit-secondary">Alumni</a>
            <a href="#" className="hover:text-iit-secondary">Careers</a>
            <a href="#" className="hover:text-iit-secondary">Contact</a>
          </div>
        </div>
        
        {/* Main header */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-4">
            <img src="/placeholder.svg" alt="IIT Bhilai Logo" className="h-16 w-16" />
            <div>
              <h1 className="text-2xl font-bold text-iit-primary">IIT Bhilai</h1>
              <p className="text-sm text-gray-600">Indian Institute of Technology Bhilai</p>
            </div>
          </div>
          <Button variant="outline" className="lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
          <nav className="hidden lg:flex gap-6">
            <NavLink href="#" label="About" />
            <NavLink href="#" label="Academics" />
            <NavLink href="#" label="Admissions" />
            <NavLink href="#" label="Research" />
            <NavLink href="#" label="Campus Life" />
          </nav>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    className="text-gray-700 hover:text-iit-primary font-medium transition-colors"
  >
    {label}
  </a>
);

export default Header;