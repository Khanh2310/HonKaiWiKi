import CharacterDetail from "modules/character/CharacterDetail";
import HomePage from "pages/HomePage";
import LayoutHomePage from "pages/LayoutHomePage";
import React from "react";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<LayoutHomePage></LayoutHomePage>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route
            path="/:slug"
            element={<CharacterDetail></CharacterDetail>}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
