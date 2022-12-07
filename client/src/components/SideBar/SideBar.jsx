import "./SideBar.css";
import { useState } from "react";
import { display } from "@mui/system";

export default function SideBar() {
  const [fact, setFact] = useState("");
  const searchCatFacts = async (fact) => {
    const response = await fetch(
      `https://catfact.ninja/fact?max_length=${fact}`
    );
    const data = await response.json();
    console.log(data.fact);
    setFact(data.fact);
  };

  return (
    <div className="sidebar">
      {/* {searchCatFacts()} */}
      <img className="cat" src="/images/cat1.png" alt="" />
      <button className="cat-fact-button" onClick={() => searchCatFacts()}>Random Cat Fact</button>
      <h4 className="sb">{fact}</h4>
    </div>
  );
}
