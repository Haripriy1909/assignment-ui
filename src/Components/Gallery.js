import React, { useState } from "react";

const Gallery = () => {
  const [images, setImages] = useState([
    "https://picsum.photos/300/200?random=1",
    "https://picsum.photos/300/200?random=2",
    "https://picsum.photos/300/200?random=3",
  ]);

  const addImage = () => {
   
    const timestamp = new Date().getTime();
    const newImage = `https://picsum.photos/300/200?random=${timestamp}`;

    setImages((prevImages) => [...prevImages, newImage]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#141518] text-white font-jakarta px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Gallery</h1>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-5xl">
        {images.map((img, index) => (
          <div
            key={index}
            className="bg-[#2a2b31] rounded-xl p-2 flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-300"
          >
            <img
              src={img}
              alt={`Random ${index}`}
              className="rounded-lg object-cover w-full h-[200px]"
            />
          </div>
        ))}
      </div>

    
      <button
        onClick={addImage}
        className="mt-8 bg-[#3a3b42] hover:bg-[#50515a] text-white font-semibold py-2 px-6 rounded-xl transition-colors duration-300"
      >
        + Add Image
      </button>
    </div>
  );
};

export default Gallery;
