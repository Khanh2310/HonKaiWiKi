import React from "react";

const CharacterList = ({ data }) => {
  const handlerClick = () => {
    console.log("Ndhaskjdhasjkdhjkasdjkh");
  };
  return (
    <div
      className="border cursor-pointer border-[#454444] px-2 pb-2 rounded-lg w-full max-w-[150px] flex items-center flex-col"
      onClick={handlerClick}
    >
      <img
        src={data?.characterImage}
        alt=""
        className="w-23 h-24 mb-4 object-cover cursor-pointer"
      />
      <span className="text-white text-base text-center cursor-pointer">
        {data?.name}
      </span>
    </div>
  );
};

export default CharacterList;
