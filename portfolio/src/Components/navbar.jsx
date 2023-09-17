import React, { useEffect, useState } from 'react';
import img from "../picture/Khizer.jpg"
const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [navbarTransform, setNavbarTransform] = useState('translateY(0)');

  useEffect(() => {
    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        // Scrolling up, show the navbar  
        setNavbarTransform('translateY(0)');
      } else {
        // Scrolling down, hide the navbar
        setNavbarTransform('translateY(-100%)');
      }
      setPrevScrollPos(currentScrollPos);
    };
  }, [prevScrollPos]);

  const styles = {
    navbar: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      padding: '10px',
      paddingTop: '30px',
      transition: 'transform 0.3s ease', // Add a smooth transition for transform property
      zIndex: 1000, // Ensure the navbar appears above other content
      transform: navbarTransform,
    },
  };

  return (
    <nav style={styles.navbar}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 3fr 1fr',fontSize:20,justifyContent:'center',alignItems:'center'}}>       
            <div style={{display:'grid',gridTemplateColumns:'1fr 4fr',fontSize:20,justifyContent:'center',alignItems:'center'}}>
                <img src={img} alt="Eror" height={40} width={40} style={{borderRadius:50}}/>
                <span >Muhammad khizer Jilani</span>
            </div>
            <div style={{display:'flex',justifyContent:'center',fontSize:50,alignItems:'center',position:'relative'}}>Welcome to my portfolio</div>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',fontSize:20,justifyContent:'center',alignItems:'center'}}>
                <div>Work</div>
                <a href="https://github.com/khizer406-git"><div style={{color:'white'}}>Github</div></a>
                <a href="https://www.linkedin.com/in/khizer-jilani-406kk/"><div style={{color:'white'}}>Linkedin</div></a>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
