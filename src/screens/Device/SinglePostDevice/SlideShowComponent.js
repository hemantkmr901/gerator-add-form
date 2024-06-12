// import React, { useState } from 'react';
// import './SlideShowComponent.css';

// const SlideShowComponent = () => {
//   const [currentSlide, setCurrentSlide] = useState(null); 

//   const slides = [
//     {
//       src: "/img/rectangle-5.png",
//       caption: "Caption Text"
//     },
//     {
//       src: "/img/rectangle-6.png",
//       caption: "Caption Two"
//     },
//     {
//       src: "/img/rectangle-7.png",
//       caption: "Caption Three"
//     },
//     {
//       src: "/img/rectangle-8.png",
//       caption: "Caption Three"
//     },
//     {
//       src: "/img/rectangle-9.png",
//       caption: "Caption Three",        
//     },



//         {
//       src: "/img/rectangle-5.png",
//       caption: "Caption Text"
//     },
//     {
//       src: "/img/rectangle-6.png",
//       caption: "Caption Two"
//     },
//     {
//       src: "/img/rectangle-7.png",
//       caption: "Caption Three"
//     },
//     {
//       src: "/img/rectangle-8.png",
//       caption: "Caption Three"
//     },
//     {
//       src: "/img/rectangle-9.png",
//       caption: "Caption Three",        
//     },
//   ];
//   const nextSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide === null ? 0 : (prevSlide + 1) % slides.length));
//   };
  
//   const prevSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide === null ? slides.length - 1 : (prevSlide - 1 + slides.length) % slides.length));
//   };
  

//   const setSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <div className="slideshow-container">
//       {slides.map((slide, index) => (
//         <div
//           className={`mySlides fade ${currentSlide === null || index === currentSlide ? 'active' : ''}`}
//           key={index}
//           style={{ display: currentSlide === null || index === currentSlide ? 'block' : 'block' }}
//         >
//           <div className="numbertext">{index + 1} / {slides.length}</div>
//           <div className={`slide slide${index + 1}`}> 
//           <img src={slide.src} style={{ width: '100%' }} alt={`Slide ${index + 1}`} />
//           <div className="text">{slide.caption}</div>
//         </div>
//         </div>
//       ))}

//       <img className="prev" alt="Group" src="/img/group-1073.png" onClick={prevSlide}/>
//       <img className="next" alt="Group" src="/img/group-1074.png" onClick={nextSlide} />

//       <div style={{ textAlign: 'center' }}>
//         {slides.map((_, index) => (
//           <span
//             className={`dot ${index === currentSlide ? 'active' : ''}`}
//             key={index}
//             onClick={() => setSlide(index)}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SlideShowComponent;


import React, { useRef,useState } from 'react';
import './SlideShowComponent.css';

const SlideShowComponent = () => {
  const slideshowRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentModalImageIndex, setCurrentModalImageIndex] = useState(null);

  const slides = [
    { src: "/img/rectangle-5.png",id:"img-01", caption: "Caption Text" },
    { src: "/img/rectangle-6.png",id:"img-02",  caption: "Caption Two" },
    { src: "/img/rectangle-7.png",id:"img-03",  caption: "Caption Three" },
    { src: "/img/rectangle-8.png", caption: "Caption Three" },
    { src: "/img/rectangle-9.png", caption: "Caption Three" },
    { src: "/img/rectangle-5.png", caption: "Caption Text" },
    { src: "/img/rectangle-6.png", caption: "Caption Two" },
    { src: "/img/rectangle-7.png", caption: "Caption Three" },
    { src: "/img/rectangle-8.png", caption: "Caption Three" },
    { src: "/img/rectangle-9.png", caption: "Caption Three" },
  ];


  const nextSlide = () => {
    if (slideshowRef.current) {
      const slideWidth = slideshowRef.current.querySelector('.mySlides').offsetWidth;
      slideshowRef.current.scrollBy({ left: slideWidth, behavior: 'smooth' });
    }
    if (modalOpen) {
      setCurrentModalImageIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }
  };

  const prevSlide = () => {
    if (slideshowRef.current) {
      const slideWidth = slideshowRef.current.querySelector('.mySlides').offsetWidth;
      slideshowRef.current.scrollBy({ left: -slideWidth, behavior: 'smooth' });
    }
    if (modalOpen) {
      setCurrentModalImageIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    }
  };


  const openModal = (index) => {
    setCurrentModalImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentModalImageIndex(null);
  };

  return (
    <div className="slideshow-wrapper">
      <div className="slideshow-container" ref={slideshowRef}>
        {slides.map((slide, index) => (
          <div className="mySlides fade" key={index}>
            <div className="slide">
              <img src={slide.src} style={{ width: '100%' }} alt={`Slide ${index + 1}`}  onClick={() => openModal(index)}/>
              <div className="numbertext">{index + 1} / {slides.length}</div>
            </div>
          </div>
        ))}
      </div>

      <img className="prev" alt="Previous" src="/img/group-1073.png" onClick={prevSlide} />
      <img className="next" alt="Next" src="/img/group-1074.png" onClick={nextSlide} />

      {modalOpen && currentModalImageIndex !== null && currentModalImageIndex >= 0 && currentModalImageIndex < slides.length && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>&times;</span>
          <img
            className="modal-content"
            src={slides[currentModalImageIndex].src}
            alt={`Modal Slide ${currentModalImageIndex + 1}`}
          />
          <img className="prev" alt="Previous" src="/img/group-1073.png" onClick={(e) => { e.stopPropagation(); prevSlide(); }} />
          <img className="next" alt="Next" src="/img/group-1074.png" onClick={(e) => { e.stopPropagation(); nextSlide(); }} />
        </div>
      )}
    </div>
  );
};


export default SlideShowComponent;
