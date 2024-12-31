import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import NewsSection from "@/components/NewsSection";
import Modal from "@/components/ui/modal";
import Dropdown from "@/components/ui/dropdown";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const dropdownItems = [
    { label: "Option 1", onClick: () => alert("Option 1 selected") },
    { label: "Option 2", onClick: () => alert("Option 2 selected") },
    { label: "Option 3", onClick: () => alert("Option 3 selected") },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Carousel />
        <NewsSection />
        <div className="container mx-auto py-8">
          <Button onClick={handleModalOpen}>Open Modal</Button>
          <Modal
            title="Welcome to IIT Bhilai"
            content="This is a modal example using Radix UI."
            actions={<Button onClick={handleModalClose}>Close</Button>}
            open={isModalOpen}
            onOpenChange={setIsModalOpen}
          />
          <Dropdown trigger={<Button>Open Dropdown</Button>} items={dropdownItems} />
          <Tooltip>
            <TooltipTrigger>
              <Button>Hover me for tooltip</Button>
            </TooltipTrigger>
            <TooltipContent animation="fade-in" customClass="bg-gray-800 text-white">
              This is a tooltip example.
            </TooltipContent>
          </Tooltip>
        </div>
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
