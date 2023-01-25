import "./styles.css";
import facts from "./bananas.json";
import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

function App({ facts }) {
  const [bananas, setBananas] = useState([]);

  useEffect(() => {
    let bananasWithIDs = facts.map((fact) => ({ id: uuid(), fact: fact }));
    setBananas(bananasWithIDs);
  }, [facts]);

  let runFacts = () =>
    bananas.map((fact, idx) => (
      <li key={fact.id}>
        <span className="emoji" role="img" aria-label="banana emoji">
          🍌
        </span>
        {fact.fact}
      </li>
    ));

  return (
    <div className="App">
      {/* <img src={Bananas} className="App-logo" alt="logo" /> */}
      <section className="facts">
        <ul>{runFacts()}</ul>
      </section>
    </div>
  );
}

export default App;
