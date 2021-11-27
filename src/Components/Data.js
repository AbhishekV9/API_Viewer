import React,{useState} from "react";
import {InputGroup,FormControl,Navbar,Nav,Container,Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addPostBody } from "../Actions";
 
function Data(props){
    const dispatch = useDispatch()
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
                <Navbar.Brand eventKey="link-2" >Body</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link  eventKey="disabled" disabled >Params</Nav.Link>
                <Nav.Link  eventKey="disabled" disabled >Headers</Nav.Link>
                <Nav.Link  eventKey="disabled" disabled >Authorization</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            <span >
                <p className="s-1">Content Type &nbsp;&nbsp;&nbsp; application/json</p>
                <p className="s-1" style={{ fontSize:"20px"}}>Body</p>
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
                    <p className="des">You can add key value pair in Body by clicking Add button and you can Add Multiple key value pairs</p>
                </div>
                }
            </div>
        </div>
    )
}

export default Data;


