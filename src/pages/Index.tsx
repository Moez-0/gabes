import Hero from "@/components/Hero";
import CrisisSection from "@/components/CrisisSection";
import Gallery from "@/components/Gallery";
import TakeAction from "@/components/TakeAction";
import Resources from "@/components/Resources";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CrisisSection />
      <Gallery />
      <TakeAction />
      <Resources />
      <Footer />
    </div>
  );
};

export default Index;
