import Header from "../components/Header";
import Hero3D from "../components/Hero3D";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="font-sans bg-black text-white min-h-screen">
      {/* Header component */}
      <Header />

      {/* Main content area */}
      <main>
        {/* Hero section with 3D animation */}
        <Hero3D />

        {/* About section */}
        <About />

        {/* Experience section */}
        <Experience />

        {/* Projects section */}
        <Projects />

        {/* Contact section */}
        <Contact />
      </main>

      {/* Footer section */}
      <Footer />
    </div>
  );
}
