import React from 'react';
import arrowup_icon from '../images/arrowup_icon.png';
import '../App.css';


const ScrollArrow = () =>{

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
      
        <img
        class = 'scroll_up_arrow'
        height='30px'
        width='30px'
        src={arrowup_icon}
        alt=''
        onClick={scrollTop}
        >
        </img>

  );
}

export default ScrollArrow;