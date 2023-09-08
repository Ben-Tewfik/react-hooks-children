import React from "react";
import Container from "./Container";

function App() {
  return (
    <div className="App">
      <Container header="Turtle" direction="">
        <ul className="list">
          <li>
            <span className="list-title">Clutch size:</span>
            Leatherback sea turtle: 110, Asian giant softshell turtle: 24 – 70
          </li>

          <li>
            <span className="list-title">Scientific name:</span> Testudines
          </li>
          <li>
            <span className="list-title">Domain:</span> Eukaryota
          </li>
          <li>
            <span className="list-title">Kingdom:</span> Animalia
          </li>
          <li>
            <span className="list-title">Order:</span> Testudines; Batsch, 1788
          </li>
          <li>
            <span className="list-title">Phylum:</span> Chordata
          </li>
        </ul>
      </Container>
      <Container textPosition="center">
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <p>
          Turtles are an order of reptiles known as Testudines, characterized by
          a special shell developed mainly from their ribs. Modern turtles are
          divided into two major groups, the Pleurodira and Cryptodira, which
          differ in the way the head retracts.
        </p>
      </Container>
    </div>
  );
}

export default App;
