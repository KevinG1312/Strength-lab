import React from 'react';

const Header = () => {
  const headerStyle = {
    width: '100%',
    height: '25vh', // Adjust the height as needed
    overflow: 'hidden',
    position: 'relative',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  return (
    <div style={headerStyle}>
      <img
        src="./header-image.jpg" 
        alt="Header"
        style={imageStyle}
      />
    </div>
  );
};

export default Header;
