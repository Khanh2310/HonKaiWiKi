import React from "react";
import OverView from "./OverView";
import Abilities from "./Abilities";
import Eidolon from "./Eidolon";
import Build from "./Build";
import Team from "./Team";
import Ascension from "./Ascension";

const MenuBuild = () => {
  return (
    <div className="flex items-center justify-around mb-10">
      <OverView></OverView>
      <Abilities></Abilities>
      <Eidolon></Eidolon>
      <Build></Build>
      <Team></Team>
      <Ascension></Ascension>
    </div>
  );
};

export default MenuBuild;
