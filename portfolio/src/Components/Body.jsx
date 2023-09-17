import React from 'react';
import img from '../picture/Project1.png';
import budget from '../picture/budget.png';
import Coming from '../picture/Coming.jpg';

const Body = () => {
  const styles = {
    imageLink: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden', // Hide overflowing content
    },
    image: {
      maxWidth: '100%',
      height: '100%',
      transition: 'transform 0.3s ease', // Add transition for smoother effect with ease timing function
    },
  };

  const handleImageHover = (event) => {
    event.currentTarget.querySelector('img').style.transform = 'scale(1.1)';
  };

  const handleImageLeave = (event) => {
    event.currentTarget.querySelector('img').style.transform = 'scale(1)';
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr 1fr 1fr)', marginTop: 300, minHeight: 50 }}>
      <div style={{ display: 'grid', rowGap: -50, gridTemplateColumns: 'repeat(1, 1fr)', justifyContent: 'center', alignItems: 'center' }}>
        <a href="https://budget-allocation-app-khizer406-git.vercel.app/" target="_blank" style={styles.imageLink} onMouseEnter={handleImageHover} onMouseLeave={handleImageLeave}>
          <img
            src={budget}
            alt="Error"
            style={styles.image}
          />
        </a>
        <a href="https://" target="_blank" style={styles.imageLink} onMouseEnter={handleImageHover} onMouseLeave={handleImageLeave}>
          <img
            src={Coming}
            alt="Error"
            style={styles.image}
          />
        </a>
      </div>

      <div style={{ display: 'grid', rowGap: 100, gridTemplateColumns: 'repeat(1, 1fr)', justifyContent: 'center', alignItems: 'center' }}>
        <a href="https://hackathon1-1-khizer406-git.vercel.app/" target="_blank" style={styles.imageLink} onMouseEnter={handleImageHover} onMouseLeave={handleImageLeave}>
          <img
            src={img}
            alt="Error"
            style={styles.image}
          />
        </a>
        <a href="https://" target="_blank" style={styles.imageLink} onMouseEnter={handleImageHover} onMouseLeave={handleImageLeave}>
          <img
            src={Coming}
            alt="Error"
            style={styles.image}
          />
        </a>
        <a href="https://" target="_blank" style={styles.imageLink} onMouseEnter={handleImageHover} onMouseLeave={handleImageLeave}>
          <img
            src={Coming}
            alt="Error"
            style={styles.image}
          />
        </a>
      </div>

      <div style={{ display: 'grid', rowGap: -50, gridTemplateColumns: 'repeat(1, 1fr)', justifyContent: 'center', alignItems: 'center' }}>
        <a href="https://" target="_blank" style={styles.imageLink} onMouseEnter={handleImageHover} onMouseLeave={handleImageLeave}>
          <img
            src={Coming}
            alt="Error"
            style={styles.image}
          />
        </a>
        <a href="https://" target="_blank" style={styles.imageLink} onMouseEnter={handleImageHover} onMouseLeave={handleImageLeave}>
          <img
            src={Coming}
            alt="Error"
            style={styles.image}
          />
        </a>
      </div>
    </div>
  );
};

export default Body;