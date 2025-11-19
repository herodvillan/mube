import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Works } from "./components/Works";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Works />
      <Contact />
      <footer className="bg-black text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} KAF Architects. All rights reserved.</p>
      </footer>
    </div>
  );
}