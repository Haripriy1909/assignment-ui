import React, { useState, useRef } from "react";

const Gallery = () => {

  const [images, setImages] = useState([
    { id: 1, src: "https://picsum.photos/seed/start1/300/200", loading: false },
    { id: 2, src: "https://picsum.photos/seed/start2/300/200", loading: false },
    { id: 3, src: "https://picsum.photos/seed/start3/300/200", loading: false },
  ]);

  const scrollRef = useRef(null);


  const addImage = () => {
    const id = Date.now();
    const seed = `seed-${id}`;
    const newImg = {
      id,
      src: `https://picsum.photos/seed/${seed}/300/200`,
      loading: true,
    };

    setImages((prev) => [...prev, newImg]);

  
    setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTo({
          left: scrollRef.current.scrollWidth,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  
  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  
  const handleImageLoad = (id) => {
    setImages((prev) =>
      prev.map((img) => (img.id === id ? { ...img, loading: false } : img))
    );
  };

  return (
    <div className="bg-[#2a2b31] rounded-2xl shadow-lg overflow-hidden w-full md:w-[735px] h-auto md:h-[300px] p-6 font-jakarta">
     
      <div className="flex justify-between items-center mb-5 flex-wrap gap-3">
        <h2 className="text-white bg-[#141518] py-2 rounded-md px-4 text-lg font-semibold shadow-inner">
          Gallery
        </h2>

        <div className="flex items-center gap-3">
          <button
            onClick={addImage}
            className="bg-[#141518] hover:bg-[#4c4d55] px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg hover:shadow-[0_0_10px_rgba(255,255,255,0.4)] transition-all"
          >
            + Add Image
          </button>

          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="bg-[#141518] hover:bg-[#4c4d55] px-3 py-2 rounded-full text-white font-bold shadow-lg transition-all"
            >
              🡠
            </button>
            <button
              onClick={() => scroll("right")}
              className="bg-[#141518] hover:bg-[#4c4d55] px-3 py-2 rounded-full text-white font-bold shadow-lg transition-all"
            >
              🡢
            </button>
          </div>
        </div>
      </div>

    
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 scroll-smooth no-scrollbar p-2 mt-2"
      >
        {images.map((img) => (
          <div
            key={img.id}
            className="relative rounded-xl w-60 h-40 flex-shrink-0 overflow-hidden bg-[#1e1f24] shadow-md"
          >
            
            {img.loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#2a2b31] animate-pulse text-gray-400 text-sm">
                Loading...
              </div>
            )}

           
            <img
              src={img.src}
              alt={`gallery-${img.id}`}
              onLoad={() => handleImageLoad(img.id)}
              onError={(e) =>
                (e.target.src = "https://placehold.co/300x200?text=No+Image")
              }
              className={`rounded-xl w-full h-full object-cover transform transition-transform duration-500 hover:scale-110 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] ${
                img.loading ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
