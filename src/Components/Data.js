import React,{useState} from "react";
import {InputGroup,FormControl,Navbar,Nav,Container,Button} from 'react-bootstrap';

function Data(){

    const [dataIn, setdataIn] = useState("Query Params");
    const [active, setActive] = useState('default');
    const [arr, setarr] = useState([null])

    const addPair=()=>{
        console.log("hii")
        setarr(arr=>[...arr,null])
    }
    return(
        <div>
            <Navbar bg="light" variant="light"
             activeKey={active}
             onSelect={(selectedKey) => setActive(selectedKey)}
            >
                <Container>
                <Nav className="me-auto">
                <Nav.Link eventKey="default" onClick={()=>setdataIn("Query Params")}>Params</Nav.Link>
                <Nav.Link eventKey="link-1" onClick={()=>setdataIn("Headers")}>Headers</Nav.Link>
                <Nav.Link eventKey="link-2" onClick={()=>setdataIn("Body")}>Body</Nav.Link>
                <Nav.Link eventKey="link-3" onClick={()=>setdataIn("Authorization")}>Authorization</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            <span >
                <p className="s-1">Content Type &nbsp;&nbsp;&nbsp; application/json</p>
                <p className="s-1" style={{ fontSize:"20px"}}>{dataIn}</p>
            </span>
            <div className="bg">
            <Button variant="dark" className="addbutton" onClick={()=>addPair()}>&nbsp; ADD &nbsp;</Button>
               {arr.map(()=>{
                    return(
                    <div className="w-8">
                        <InputGroup className="mb-3">
                            <InputGroup.Text className="m-20">Key</InputGroup.Text>
                            <FormControl aria-label="First name" className="m-20"/>
                            <InputGroup.Text className="m-20">Value</InputGroup.Text>
                            <FormControl aria-label="Last name" className="m-20"/>
                        </InputGroup>
                        <Button variant="danger" className="deleteButton">&nbsp; Delete &nbsp;</Button>
                     </div>
                    )
               })}

            </div>
        </div>
    )
}

export default Data;