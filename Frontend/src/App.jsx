import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState, useEffect } from 'react';

const App = () => {
  const [xValue, setxValue] = useState(0);
  const [yValue, setyValue] = useState(0);
  const [roti, setRoti] = useState(0);
  const imageRef = useRef();


  const clamp = (value, min, max) => Math.max(min, Math.min(value, max));

  const moveImage = () => {
    const img = imageRef.current;
    const { innerWidth, innerHeight } = window;

    const imgWidth = img.offsetWidth;
    const imgHeight = img.offsetHeight;

    const maxX = innerWidth - imgWidth;
    const maxY = innerHeight - imgHeight;

    const randomX = clamp(gsap.utils.random(-700, 700, 100), -500, maxX);
    const randomY = clamp(gsap.utils.random(-300, 300, 100), -300, maxY);
    const randomRot = gsap.utils.random(-360, 360, 100);

    setxValue(randomX);
    setyValue(randomY);
    setRoti(randomRot);
  };

  useGSAP(() => {
    gsap.to(imageRef.current, {
      x: xValue,
      y: yValue,
      rotate: roti,
      duration: 0.6,
      ease: "power2.out",
    });
  }, [xValue, yValue, roti]);

  return (
    <main style={{ height: "100vh", overflow: "hidden", position: "relative" }}>
      <img
        onClick={moveImage}
        ref={imageRef}
        style={{
          width: "150px",
          position: "absolute",
          cursor: "pointer",
        }}
        src="https://imgs.search.brave.com/OL7YxYM3nEJIhR4NQncHKrMAKWQjHoDRJFg70dz77Ss/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YW5pbWF0ZWRpbWFn/ZXMub3JnL2RhdGEv/bWVkaWEvMTk3L2Fu/aW1hdGVkLWZseS1p/bWFnZS0wMDM5Lmdp/Zg.gif"
        alt="Flying Object"
      />
    </main>
  );
};

export default App;