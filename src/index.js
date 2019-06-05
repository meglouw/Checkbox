import React from "react";
import ReactDOM from "react-dom";
import { Frame, useCycle } from "framer";

import "./styles.css";

function App() {
  const [opacity, cycle] = useCycle(0, 1);
  return (
    <div className="App">
      <Frame
        width={40}
        height={40}
        center
        border="4px solid #A9A9A9"
        borderRadius={8}
        background="White"
        onTap={function() {
          cycle();
        }}
      >
        <Frame size={40} background="white" borderRadius={8}>
          <Frame
            size={40}
            background="transparent"
            animate={{ opacity }}
            transition={{ duration: 0.1 }}
          >
            X
          </Frame>
        </Frame>
      </Frame>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
