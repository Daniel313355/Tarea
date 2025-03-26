import React from "react";
import ChangeBackground from "./ChangeBackground";
import ModifyTexts from "./ModifyTexts";
import ValidateNumber from "./ValidateNumber";
import ShowObjectData from "./ShowObjectData";
import ShowListData from "./ShowListData";

function App() {
  return (
    <div>
      <h1>Prueba Técnica</h1>
      <ChangeBackground />
      <ModifyTexts />
      <ValidateNumber />
      <ShowObjectData />
      <ShowListData />
    </div>
  );
}

export default App;
