import React from "react";

const Heading = ({ children }) => {
  return (
    <>
      <h1 className="text-center mt-5 text-xl text-white font-bold">
        {children}
      </h1>
      ;
    </>
  );
};

export default Heading;
