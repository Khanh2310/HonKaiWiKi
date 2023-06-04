import React from "react";

const Skills = ({ name }) => {
  const skills = [
    {
      images: "./Images/skills/Qingque/E.webp",
    },
    {
      images: "./Images/skills/Qingque/Q.webp",
    },
    {
      images: "./Images/skills/Qingque/Talent.webp",
    },
    {
      images: "./Images/skills/Qingque/A.webp",
    },
  ];
  return (
    <>
      <div className="charactershadow rounded-2xl mb-10">
        <h2 className="text-center font-bold text-lg text-white p-10">
          {name ? name : `Qingque`} Skills
        </h2>
      </div>
      <div className="charactershadow rounded-2xl">
        <h2 className="text-center font-bold text-lg text-white p-10">
          {name ? name : `Qingque`} Abilities Priority
        </h2>
        <div className="grid grid-cols-4 w-[500px] mx-auto">
          {skills.length > 0 &&
            skills.map((items) => (
              <div className="flex items-center justify-center">
                <img
                  src={items.images}
                  alt=""
                  srcset=""
                  key={items.images}
                  className="inline-block w-20"
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
