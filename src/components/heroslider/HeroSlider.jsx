import React, { useEffect, useState } from "react";
import "./heroSlider.css";
import { Link } from "react-router-dom";

const sliderImages = [
  "https://m.media-amazon.com/images/G/31/img21/MA2023/PD23/sbcheader/Hero._SX3000_QL85_FMpng_.png?",
  "https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JuneWRS/eventpage/pc/CML/CML-1._SX3000_QL85_.jpg",
  "https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JuneWRS/eventpage/pc/CML/CML-8._SX3000_QL85_.jpg?",
];

const HeroSlider = () => {
  const [selectedSlide, setSelectedSlide] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setSelectedSlide((selectedSlide) =>
        selectedSlide < 2 ? selectedSlide + 1 : 0
      );
    }, 4000);
  }, []);

  return (
    <div>
      <Link to="/store">
        <img src={sliderImages[selectedSlide]} alt="" />
      </Link>
    </div>
  );
};

export default HeroSlider;
