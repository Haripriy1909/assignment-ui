import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <p className="text-gray-300 mt-4 leading-relaxed font-normal text-[18px] md:text-[20px]">
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at
            this awesome company for 3 years now.<br /><br />
            I was born and raised in Albany, NY & have been living in Santa Carla for the
            past 10 years with my wife Tiffany and my 4-year-old twin daughters – Emma
            and Ella.
          </p>
        );
      case "exp":
        return (
          <p className="text-gray-300 mt-4 leading-relaxed font-normal text-[18px] md:text-[20px]">
            I’ve worked with multiple enterprise clients to help optimize CRM pipelines,
            increase conversion rates, and improve customer experience using Salesforce
            automation tools.
          </p>
        );
      case "rec":
        return (
          <p className="text-gray-300 mt-4 leading-relaxed font-normal text-[18px] md:text-[20px]">
            Dave is highly recommended by clients for his great communication and
            problem-solving skills. A true team player who always delivers results.
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mt-6 bg-[#2a2b31] rounded-2xl p-8 shadow-lg font-jakarta w-full md:w-[720px] h-auto md:h-[316px]">
      <div className="flex bg-[#141518] rounded-2xl p-2">
        {["about", "exp", "rec"].map((tab) => (
          <button
            key={tab}
            className={`flex-1 py-3 rounded-xl mx-1 text-sm font-medium transition-all duration-300 ${activeTab === tab
                ? "bg-[#3a3b42] text-white"
                : "text-gray-400 hover:text-white"
              }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "about"
              ? "About Me"
              : tab === "exp"
                ? "Experiences"
                : "Recommended"}
          </button>
        ))}
      </div>


      <div className="mt-5 overflow-y-auto pr-3 no-scrollbar">{renderContent()}</div>
    </div>
  );
};

export default Tabs;

