import Nav from "@/components/Nav";
import SplashScreen from "@/components/SplashScreen";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <SplashScreen />
      <Nav />
      <Hero />
      <About />
      <Reviews />
      <Projects />
      <Gallery />
      <Footer />
    </main>
  );
}
