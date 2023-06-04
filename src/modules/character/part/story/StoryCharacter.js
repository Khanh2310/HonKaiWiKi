import React from "react";

const StoryCharacter = () => {
  const stast = [
    {
      image: "./Images/Character_stats/HP.webp",
      desc: "hp",
      basic: "1023",
    },
    {
      image: "./Images/Character_stats/DEF.webp",
      desc: "def",
      basic: "441",
    },
    {
      image: "./Images/Character_stats/ATK.webp",
      desc: "atk",
      basic: "652",
    },
    {
      image: "./Images/Character_stats/SPD.webp",
      desc: "spd",
      basic: "98",
    },
    {
      image: "./Images/Character_stats/TAUNT.webp",
      desc: "taunt",
      basic: "75",
    },
  ];
  return (
    <div className="flex items-center justify-between gap-x-5  mb-10 ">
      <div className="w-full max-w-[450px] charactershadow rounded-2xl">
        <img
          src="./Images/Star_Rail_Character/Character_Qingque_Splash_Art-500x500.webp"
          alt=""
        />
        <h3 className="text-center text-white font-bold text-xl my-10">
          Qingque Stats at Max Lv
        </h3>
        <div className="flex items-center justify-evenly p-2">
          {stast.length > 0 &&
            stast.map((items) => (
              <div className="flex flex-col items-center gap-x-2 ">
                <img
                  src={items.image}
                  alt=""
                  key={items.image}
                  className="w-9 h-9"
                />
                <span className="text-Graytext text-xs uppercase">
                  {items.desc}
                </span>

                <span className="text-Graytext text-xs uppercase">
                  {items.basic}
                </span>
              </div>
            ))}
        </div>
      </div>
      <div className=" charactershadow rounded-2xl justify-center flex flex-col h-[640px] ">
        <div className="ml-5">
          <h1 className="text-white font-bold text-xl mb-5 ">Qingque Story</h1>
          <p className=" text-Graytext text-xl ">
            Qingque is a Diviner in the Divination Commission, who originally
            took the job to please her parents, and now makes plenty of time to
            slack off and play tiles while on the clock.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoryCharacter;
