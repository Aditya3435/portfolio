import React from 'react';

const CursorPointer = ({ x, y }) => {
  const cursorStyle = {
    left: x,
    top: y,
  };

  return (
    <div
      className="bg-white fixed rounded-full mix-blend-difference w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
      style={cursorStyle}
    ></div>
  );
};

export default CursorPointer;
