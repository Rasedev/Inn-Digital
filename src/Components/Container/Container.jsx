

import React from 'react';

const Container = ({ children }) => {
  return (
    // <div className="max-w-screen-lg mx-auto p-4">
    <div className="container max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl p-4 mx-auto">
      {children}
    </div>
  );
};

export default Container;


  




