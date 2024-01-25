import React from "react";
import { createRoot } from "react-dom";

const App = () => {
  return (
    <div>
      <div>My Social Network App is beeing cooked</div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
