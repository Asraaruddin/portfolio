import React from "react";

function RevealOnScroll({ children, animation = "fade-up", duration = 1000 }) {
  return (
    <div data-aos={animation} data-aos-duration={duration}>
      {children}
    </div>
  );
}

export default RevealOnScroll;
