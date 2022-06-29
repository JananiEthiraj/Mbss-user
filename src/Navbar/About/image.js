import React, { useState } from "react";
import { SliderData } from "./imgdata";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaAngleLeft className="left-arrow" onClick={prevSlide} />

      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="travel" width={700} height={400} />
            )}
          </div>
        );
      })}

      <FaAngleRight className="right-arrow" onClick={nextSlide} />
    </section>
  );
};

export default ImageSlider;

// import React from 'react';
// import { Carousel } from 'react-bootstrap';
// import mb1 from '../../Assert/images/mb1.webp';
// import mb2 from '../../Assert/images/mb2.webp';
// import mb3 from '../../Assert/images/mb3.webp';
// import mb4 from '../../Assert/images/mb4.jpg';

// const Slidshow=()=>{
//     return(
//     <Carousel variant="dark">
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={mb1}
//           alt="First slide"
//         />

//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={mb2}
//           alt="Second slide"
//         />

//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={mb3}
//           alt="Third slide"
//         />
//              </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={mb4}
//           alt="Fourth slide"
//         />
//         <Carousel.Caption>
//           <h5>Fourth slide label</h5>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default Slidshow;
