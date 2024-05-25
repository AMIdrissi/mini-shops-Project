import React from "react";
import NavbarGeneric from "../Navbar/NavbarGeneric"; // Import NavbarGeneric
import PanierCard from "./PanierCard"; // Import PanierCard

function PanierPage() {
  return (
    <div
      style={{
        backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/037/245/808/non_2x/ai-generated-beautuful-fast-food-background-with-copy-space-free-photo.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <div className="w-full h-full flex justify-end">
        <NavbarGeneric />
      </div>
      <div className="container mx-auto mt-20 h-screen overflow-y-auto scrollbar-custom"> {/* Scrollable container with custom scrollbar */}
        <div className="space-y-8"> {/* Spacing between cards */}
          <PanierCard />
          <PanierCard />
          <PanierCard />
        </div>
      </div>
    </div>
  );
}

export default PanierPage;
