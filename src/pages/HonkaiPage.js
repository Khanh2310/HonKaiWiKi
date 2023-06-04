import { Heading } from "components/Heading";
import Title from "components/Title/Title";
import React from "react";
import CharacterList from "./CharacterList";

const HonkaiPage = () => {
  const honkaiElement = [
    {
      image: "./Images/Star_Rail_Element/Crystal.webp",
      link: "Crystal",
      active: true,
    },
    {
      image: "./Images/Star_Rail_Element/Star_Rail_Element_Physical.webp",
      link: "Physical",
      active: false,
    },
    {
      image: "./Images/Star_Rail_Element/Element_Wind.webp",
      link: "Wind",
      active: false,
    },
    {
      image: "./Images/Star_Rail_Element/Star_Rail_Element_Quantum.webp",
      link: "Quantum",
      active: false,
    },
    {
      image: "./Images/Star_Rail_Element/Element_Ice.webp",
      link: "Ice",
      active: false,
    },
    {
      image: "./Images/Star_Rail_Element/Element_Fire.webp",
      link: "Fire",
      active: false,
    },
    {
      image: "./Images/Star_Rail_Element/Star_Rail_Element_Imaginary.webp",
      link: "Imaginary",
      active: false,
    },
    {
      image: "./Images/Star_Rail_Element/Star_Rail_Element_Lightning.webp",
      link: "Lightning",
      active: false,
    },
  ];
  const character = [
    {
      characterImage:
        "./Images/Star_Rail_Character/honkailab_yukong__build.webp",
      name: "Yukong Build",
    },
    {
      characterImage:
        "./Images/Star_Rail_Character/Tingyun_Honkai_star_rail_honkailab.webp",
      name: "Tingyun Build",
    },
    {
      characterImage:
        "./Images/Star_Rail_Character/Qingque_Honkai_star_rail_honkailab.webp",
      name: "Qingque Build",
    },
    {
      characterImage:
        "./Images/Star_Rail_Character/Luocha_Honkai_star_rail_Honkailab_s.webp",
      name: "Luocha Build",
    },
    {
      characterImage:
        "./Images/Star_Rail_Character/starrailmaincharacter__s-1.webp",
      name: "Trailblazer (Fire) Build",
    },
    {
      characterImage:
        "./Images/Star_Rail_Character/starrailmaincharacter__s.webp",
      name: "Trailblazer (Physical) Build",
    },
    {
      characterImage:
        "./Images/Star_Rail_Character/Yanqing_Honkai_star_rail_honkailab.webp",
      name: "Yanqing Build",
    },
    {
      characterImage:
        "./Images/Star_Rail_Character/Bailu_Honkai_star_rail_honkailab.webp",
      name: "Bailu Build",
    },
    {
      characterImage:
        "./Images/Star_Rail_Character/Blade_honkai_star_rail_honkailab_s.webp",
      name: "Blade Build",
    },
    {
      characterImage:
        "./Images/Star_Rail_Character/Sushang_Honkai_star_rail_Honkailab_s.webp",
      name: "Sushang Build",
    },
    {
      characterImage:
        "./Images/Star_Rail_Character/arlan_honkai_star_rail_honkailab_s.webp",
      name: "Arlan Build",
    },
    {
      characterImage:
        "./Images/Star_Rail_Character/Herta_honkai_star_rail_honkailab_s.webp",
      name: "Herta Build",
    },
    {
      characterImage:
        "./Images/Star_Rail_Character/silver_wolf_honkai_star_rail_honkailab_s.webp",
      name: "Silver Wolf Build",
    },
    {
      characterImage:
        "./Images/Star_Rail_Character/Jing_Yuan_honkai_star_rail_honkailab_s.webp",
      name: "Jing Yuan Build",
    },
    {
      characterImage:
        "./Images/Star_Rail_Character/Kafka_Star_rail_character_s.webp",
      name: "Kafka Build",
    },
    {
      characterImage:
        "./Images/Star_Rail_Character/Sampo_Honkai_star_rail_Honkailab_s.webp",
      name: "Sampo Build",
    },
    {
      characterImage:
        "./Images/Star_Rail_Character/Hook_Honkai_star_rail_Honkailab_s.webp",
      name: "Hook Build",
    },
    {
      characterImage:
        "./Images/Star_Rail_Character/Serval_Honkai_star_rail_Honkailab_s.webp",
      name: "Serval Build",
    },
    {
      characterImage:
        "./Images/Star_Rail_Character/Natasha_Honkai_star_rail_Honkailab_s.webp",
      name: "Natasha Build",
    },
    {
      characterImage:
        "./Images/Star_Rail_Character/Bronya_honkai_star_rail_honkailab_s.webp",
      name: "Bronya Build",
    },
    {
      characterImage:
        "./Images/Star_Rail_Character/Pela_Honkai_star_rail_Honkailab_s.webp",
      name: "Pela Build",
    },
    {
      characterImage:
        "./Images/Star_Rail_Character/asta_honkai_star_rail_honkailab_s.webp",
      name: "Asta Build",
    },
    {
      characterImage:
        "./Images/Star_Rail_Character/Clara_honkai_star_rail_honkailab_s.webp",
      name: "Clara Build",
    },
    {
      characterImage:
        "./Images/Star_Rail_Character/Seele_honkai_star_rail_honkailab_s.webp",
      name: "Seele Build",
    },
    {
      characterImage:
        "./Images/Star_Rail_Character/Gepard_honkai_star_rail_honkailab_s.webp",
      name: "Gepard Build",
    },
    {
      characterImage:
        "./Images/Star_Rail_Character/March7th_Honkai_star_rail_Honkailab_s.webp",
      name: "March 7th Build",
    },
    {
      characterImage:
        "./Images/Star_Rail_Character/Danheng_Honkai_star_rail_Honkailab_s.webp",
      name: "Dan Heng Build",
    },
    {
      characterImage:
        "./Images/Star_Rail_Character/Welt_Honkai_star_rail_Honkailab_s.webp",
      name: "Welt Build",
    },
    {
      characterImage:
        "./Images/Star_Rail_Character/Himeko_Honkai_star_rail_s.webp",
      name: "Himeko Build",
    },
  ];

  return (
    <>
      <Title>
        From the Mihoyo Honkai Star Rail announcement, we found total 26
        Characters in Honkai Star Rail. Click the Character icon for more
        details about each character, which includes Character build, Light
        cones and their background information.
      </Title>
      <Heading>New Honkai Star Rail Characters</Heading>

      <div className="flex items-center justify-center gap-x-5 mt-5 mb-5">
        {honkaiElement.length > 0 &&
          honkaiElement.map((item) => (
            <div
              className={`${
                item?.active ? "bg-[#838383] p-[10px]" : ""
              } flex items-center rounded-lg`}
              key={item.image}
            >
              <img src={item.image} alt="" className="w-12 h-12" />
            </div>
          ))}
      </div>
      <div className="grid grid-cols-7 gap-y-5">
        {character.length > 0 &&
          character.map((items) => (
            <CharacterList data={items} key={items.name}></CharacterList>
          ))}
      </div>
    </>
  );
};

export default HonkaiPage;
