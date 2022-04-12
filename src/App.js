import React from "react";
import getData from "./getData";

const App = () => {

  const data = getData(1).then((response) => console.log(response));
  
  return <div className="App"><h1>Hello world</h1></div>;
};

export default App;
