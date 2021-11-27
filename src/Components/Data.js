import React,{useState} from "react";
import {InputGroup,FormControl,Navbar,Nav,Container,Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addPostBody } from "../Actions";
 
function Data(props){
    const dispatch = useDispatch()
    const [dataIn, setdataIn] = useState("Query Params");
    const [active, setActive] = useState('default');
    const [keys, setkeys] = useState("")
    const [values, setValues] = useState("")

    const handleAdd=()=>{
        dispatch(addPostBody(keys,values));
        setkeys("")
        setValues("");
    }
    return(
        
        <div>
            <Navbar bg="light" variant="light"
             activekey={active}
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
                {props.showBody && 
                <div>
                    <Button onClick={()=>handleAdd()} variant="dark" className="addButton"> &nbsp; &nbsp;Add &nbsp; &nbsp;</Button>
                    <div className="w-8" >
                    <InputGroup className="mb-3">
                        <InputGroup.Text className="m-20">Key</InputGroup.Text>
                        <FormControl aria-label="First name" className="m-20" name="key" value={keys} onChange={(e)=>setkeys(e.target.value)}/>
                        <InputGroup.Text className="m-20"  >Value</InputGroup.Text>
                        <FormControl aria-label="Last name" className="m-20" name="value" value={values} onChange={(e)=>setValues(e.target.value)} />
                    </InputGroup>                   
                    </div>
                    <p className="des">You Can Add Multiple Key Value Pairs By clicking on Add Button</p>
                </div>
                }
            </div>
        </div>
    )
}

export default Data;


