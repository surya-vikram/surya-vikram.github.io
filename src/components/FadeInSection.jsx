// import { useState, useRef, useEffect } from "react";

// function FadeInSection(props) {
//   const [isVisible, setVisible] = useState(true);
//   const domRef = useRef();
//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => setVisible(entry.isIntersecting));
//     });
//     observer.observe(domRef.current);
//     return () => observer.unobserve(domRef.current);
//   }, []);
//   return (
//     <div
//       className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
//       ref={domRef}
//     >
//       {props.children}
//     </div>
//   );
// }

// export default FadeInSection;

// import { useState, useRef, useEffect } from "react";

// function FadeInSection(props) {
//   const [isVisible, setVisible] = useState(false);
//   const domRef = useRef();
//   const prevYRef = useRef(0);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         const currentY = entry.boundingClientRect.y;
//         const isScrollingDown = currentY < prevYRef.current;
//         prevYRef.current = currentY;

//         if (isScrollingDown && entry.isIntersecting) {
//           setVisible(true);
//         }
//       });
//     });

//     observer.observe(domRef.current);
//     return () => observer.unobserve(domRef.current);
//   }, []);

//   return (
//     <div
//       className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
//       ref={domRef}
//     >
//       {props.children}
//     </div>
//   );
// }

// export default FadeInSection;

import { useState, useRef, useEffect } from "react";

function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(true);
  const domRef = useRef();
  const prevYRef = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const currentY = entry.boundingClientRect.y;
        const scrollingDown = currentY < prevYRef.current;
        setIsScrollingDown(scrollingDown);
        prevYRef.current = currentY;

        if (scrollingDown && entry.isIntersecting) {
          setVisible(true);
        } else if (!scrollingDown && !entry.isIntersecting) {
          setVisible(false);
        }
      });
    });

    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""} ${
        isScrollingDown ? "scrolling-down" : "scrolling-up"
      }`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default FadeInSection;