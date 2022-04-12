import React from "react";
import GetData from "./GetData";

const App = () => {

  (async function data() {
    let datas = await GetData(1);
    console.log(datas);
  })();
  
  return <div className="App"><h1>Hello world</h1></div>;
};

export default App;
