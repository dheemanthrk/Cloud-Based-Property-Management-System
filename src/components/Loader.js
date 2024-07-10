import React from 'react';
import { Hourglass } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-20 backdrop-blur-sm flex items-center justify-center z-50">
      <Hourglass />
    </div>
  );
};

export default Loader;
