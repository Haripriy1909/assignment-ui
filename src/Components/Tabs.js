import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <p className="text-gray-300 mt-4 leading-relaxed font-normal text-[18px] md:text-[20px]">
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at
            this awesome company for 3 years now.
            <br />
            <br />
            I was born and raised in Albany, NY & have been living in Santa Carla for the
            past 10 years with my wife Tiffany and my 4-year-old twin daughters – Emma
            and Ella. Both of them are just starting school, so my calendar is usually
            blocked between 9–10 AM. This is a fun, busy time for our family!
          </p>
        );
      case "exp":
        return (
          <p className="text-gray-300 mt-4 leading-relaxed font-normal text-[18px] md:text-[20px]">
            I’ve worked with multiple enterprise clients to help optimize CRM pipelines,
            increase conversion rates, and improve customer experience using Salesforce
            automation tools. I enjoy problem-solving and data-driven decision making.
          </p>
        );
      case "rec":
        return (
          <p className="text-gray-300 mt-4 leading-relaxed font-normal text-[18px] md:text-[20px]">
            Dave is highly recommended by clients for his communication skills and
            strategic thinking. A strong collaborator and team player who delivers
            measurable results consistently.
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#1a1b20] p-5 md:p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.4)] w-full md:w-[720px] h-[320px] font-jakarta text-white">
    
      <div className="flex justify-between bg-[#2a2b31] rounded-2xl p-2 shadow-inner">
        {["about", "exp", "rec"].map((tab) => (
          <button
            key={tab}
            className={`flex-1 py-3 rounded-xl mx-1 text-sm font-semibold transition-all duration-300 ${
              activeTab === tab
                ? "bg-[#3a3b42] text-white shadow-md"
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

     
      <div className="mt-5 overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-[#3a3b42] scrollbar-track-[#1a1b20]">
        {renderContent()}
      </div>
    </div>
  );
};

export default Tabs;
