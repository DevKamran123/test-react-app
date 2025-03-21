import React from "react";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <h1> react + typescript counter</h1>
      <Counter initialCount={5} />
    </div>
  );
}

export default App;
