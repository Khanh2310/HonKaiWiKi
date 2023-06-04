import React from "react";
import MenuBuild from "./part/MenuBuild";
import StoryCharacter from "./part/story/StoryCharacter";
import Skills from "./part/skills/Skills";

const CharacterDetail = () => {
  const tier = [
    {
      name: "A",
    },
  ];
  const elements = [
    {
      name: "",
      image: "",
    },
  ];
  return (
    <>
      <div className=" relative banner w-full h-[200px] flex items-center justify-between rounded-md overflow-hidden mb-10 ">
        <div className="inset-0 top-0 absolute bg-gray-400 opacity-50"></div>
        <div className="top-0  gap-x-5 flex items-center z-10">
          <img
            src="./Images/Star_Rail_Character/Qingque_Honkai_star_rail_honkailab.webp"
            alt=""
            className="px-5"
          />
          <div className="flex flex-col gap-2 z-10">
            <span className="text-xl text-white font-bold">
              Honkai Star Rail Guide
            </span>
            <span className="text-xl text-white font-bold">
              Yukong Build Guide
            </span>
            <span className="text-xl text-red-700  font-bold">A Tier</span>
          </div>
        </div>
        <div className="absolute flex items-center gap-x-5 right-0 -translate-x-2/4 z-10">
          <img
            src="./Images/Star_Rail_Element/The-Erudition.webp"
            alt=""
            className="w-16 h-16 inline-block"
          />
          <img
            src="./Images/Star_Rail_Element/Star_Rail_Element_Quantum.webp"
            alt=""
            className="w-16 h-16  inline-block"
          />
        </div>
      </div>
      <MenuBuild></MenuBuild>
      <StoryCharacter></StoryCharacter>
      <Skills></Skills>
    </>
  );
};

export default CharacterDetail;
