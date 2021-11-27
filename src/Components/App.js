import { Header } from "./Header";
import Data from "./Data";
import { Response } from "./Response";
import { useState } from "react";

function App() {

  const [showbody, setshowbody] = useState(false);

  const handleformDisplay=(value)=>{
    console.log(value)
    setshowbody(value);
  }
  
  return (
    <div className="App">
      <Header handleformDisplay={handleformDisplay} />
      <Data showBody={showbody}/>
      <Response/>
    </div>
  );
}

export default App;
