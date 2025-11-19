import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="cursor-pointer" onClick={() => scrollToSection("home")}>
            <span className="tracking-wider text-white">ARCHAUS</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("home")} className="text-white hover:text-neutral-300 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-white hover:text-neutral-300 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("works")} className="text-white hover:text-neutral-300 transition-colors">
              Works
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-white hover:text-neutral-300 transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection("home")} className="text-left text-white hover:text-neutral-300 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection("about")} className="text-left text-white hover:text-neutral-300 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection("works")} className="text-left text-white hover:text-neutral-300 transition-colors">
                Works
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-left text-white hover:text-neutral-300 transition-colors">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}