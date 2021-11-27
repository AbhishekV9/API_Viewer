import  Header  from "./Header";
import Data from "./Data";
import { Response } from "./Response";
import { useState } from "react";
import 'react-json-pretty/themes/monikai.css';

function App() {

  const [showbody, setshowbody] = useState(false);
  const [success, setsuccess] = useState("");

  const handleformDisplay=(value)=>{
    setshowbody(value);
  }

  const handleSuccess=(value)=>{
    setsuccess(value)
  }
  
  return (
    <div className="App">
      <Header handleformDisplay={handleformDisplay}  handleSuccess={handleSuccess}/>
      <Data showBody={showbody}/>
      <Response success={success}/>
    </div>
  );
}

export default App;
