import React, { useState } from "react";
import GuestsContext from "./GuestsContext";

const GuestsState = (props) => {
  const [husbandFamily, setHusbandFamily] = useState([
    { id: "0", name: "jane" },
    { id: "2", name: "doe" },
    { id: "3", name: "viz" },
  ]);
  const [husbandColleagues, setHusbandColleagues] = useState([
    { id: "0", name: "jane" },
    { id: "2", name: "kro" },
    { id: "3", name: "zing" },
  ]);
  const [wifeFamily, setWifeFamily] = useState([
    { id: "0", name: "bruce" },
    { id: "2", name: "ironMan" },
    { id: "3", name: "spiderman" },
  ]);
  const [wifeColleagues, setWifeColleagues] = useState([
    { id: "0", name: "kristen" },
    { id: "2", name: "steve" },
    { id: "3", name: "ballmer" },
  ]);
  const [general, setGeneral] = useState([
    { id: "0", name: "david" },
    { id: "2", name: "sheldon" },
    { id: "3", name: "leonard" },
  ]);

  return (
    <GuestsContext.Provider
      value={{
        husbandFamily,
        setHusbandFamily,
        husbandColleagues,
        setHusbandColleagues,
        wifeFamily,
        setWifeFamily,
        wifeColleagues,
        setWifeColleagues,
        general,
        setGeneral,
      }}
    >
      {props.children}
    </GuestsContext.Provider>
  );
};

export default GuestsState;
