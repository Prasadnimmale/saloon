import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import SignatureExperience from "@/components/SignatureExperience";
import Transformation from "@/components/Transformation";
import Bridal from "@/components/Bridal";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Blogs from "@/components/Blogs";
import InstagramGallery from "@/components/InstagramGallery";
import Appointment from "@/components/Appointment";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-ivory">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <SignatureExperience />
      <Transformation />
      <Bridal />
      <Gallery />
      <Testimonials />
      <Blogs />
      <InstagramGallery />
      <Appointment />
      <Contact />
      <Footer />
    </main>
  );
}
