import { useRef, useEffect } from "react";

const ImageScroll = ({ startPosition, endPosition, src }) => {

    const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Update the position of the image based on the start and end positions
          // and the current scroll position
          const currentScroll = window.scrollY;
          const newPosition =
            startPosition +
            (currentScroll / (endPosition - startPosition)) *
              (endPosition - startPosition);
          imageRef.current.style.top = `${newPosition}px`;
        }
      },
      { root: null, rootMargin: "0px", threshold: 0 }
    );
    observer.observe(imageRef.current);
  }, []);
  return (
    <img ref={imageRef} src={src} alt="" />
  )
}

export default ImageScroll