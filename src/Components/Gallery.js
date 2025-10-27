import React, { useState, useRef } from "react";

const Gallery = () => {
  const [images, setImages] = useState([
    "https://picsum.photos/300/200?random=1",
    "https://picsum.photos/300/200?random=2",
    "https://picsum.photos/300/200?random=3",
  ]);

  const scrollRef = useRef(null);

 
  const addImage = () => {
    const timestamp = new Date().getTime(); // unique cache-busting
    const newImage = `https://picsum.photos/300/200?random=${timestamp}`;
    setImages((prevImages) => [...prevImages, newImage]);
  };

  
  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#2a2b31] rounded-2xl shadow-lg overflow-hidden w-full md:w-[735px] h-auto md:h-[300px] p-7 font-jakarta">
     
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <h2 className="text-white bg-[#141518] py-3 rounded-md px-5 text-lg font-semibold shadow-inner">
          Gallery
        </h2>

        
        <div className="flex items-center gap-4">
          <button
            onClick={addImage}
            className="bg-[#141518] hover:bg-[#4c4d55] px-5 py-3 rounded-full text-sm font-medium text-white shadow-lg hover:shadow-[0_0_12px_rgba(255,255,255,0.4)] transition-all"
          >
            + Add Image
          </button>

          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="bg-[#141518] hover:bg-[#4c4d55] px-4 py-3 rounded-full text-white font-bold shadow-lg transition-all"
            >
              🡠
            </button>
            <button
              onClick={() => scroll("right")}
              className="bg-[#141518] hover:bg-[#4c4d55] px-4 py-3 rounded-full text-white font-bold shadow-lg transition-all"
            >
              🡢
            </button>
          </div>
        </div>
      </div>

   
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 scroll-smooth no-scrollbar p-3 mt-2"
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`gallery-${index}`}
            loading="lazy"
            className="rounded-xl shadow-md w-60 h-40 flex-shrink-0 transform transition-transform duration-500 hover:scale-110 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;this component in not show the random image when one show iimage that second image not show so please manage the code and after solve the represent the codee
