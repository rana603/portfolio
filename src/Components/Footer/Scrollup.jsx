import React from 'react';
import './Scroll.css';

function Scrollup() {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll")
  })
  return (
    <a href="#" className='scrollup'>
      <i className="fa-solid fa-arrow-up"></i>
    </a>
  )
}

export default Scrollup;
