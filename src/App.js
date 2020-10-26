import React from "react";
import "./App.css";
import LineChart from "./component/LineChart/LineChart";
import "../node_modules/react-vis/dist/style.css";

function App() {
  return (
    <div className="App">
      <LineChart />
    </div>
  );
}

export default App;
