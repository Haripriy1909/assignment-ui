import React from "react";
import Tabs from "./Components/Tabs";
import Gallery from "./Components/Gallery";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 flex justify-end">
      <div className="w-full md:w-2/3 lg:w-1/2 space-y-8  ">
        <Tabs />

        <div className="h-[4px] min-w-fit bg-[#31323a] rounded-full shadow-[inset_0_1px_1px_rgba(0,0,0,0.6)]" />

        <Gallery />
      </div>
    </div>
  );
}

export default App;
