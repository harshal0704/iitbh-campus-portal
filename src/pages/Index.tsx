import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import NewsSection from "@/components/NewsSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Carousel />
        <NewsSection />
      </main>
      <footer className="mt-auto bg-iit-primary text-white py-8">
        <div className="container mx-auto text-center">
          <p>© 2024 Indian Institute of Technology Bhilai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;