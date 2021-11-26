import React,{useState} from 'react';
import { DropdownButton, Dropdown, InputGroup, FormControl, Button } from 'react-bootstrap';

export const Header = () => {

    const [method, setmethod] = useState("GET");
    const [url, seturl] = useState("")

    const handleClick=()=>{
        seturl("")
    }
  
    return (
        <div className="header">
            <DropdownButton id="dropdown-basic-button" className="drop" title={method}>
                <Dropdown.Item onClick={()=>setmethod("GET")}>GET</Dropdown.Item>
                <Dropdown.Item onClick={()=>setmethod("POST")}>POST</Dropdown.Item>
                <Dropdown.Item onClick={()=>setmethod("PUT")}>PUT</Dropdown.Item>
                <Dropdown.Item onClick={()=>setmethod("PATCH")}>PATCH</Dropdown.Item>
                <Dropdown.Item onClick={()=>setmethod("DELETE")}>DELETE</Dropdown.Item>
            </DropdownButton>
            <InputGroup className="mb-3 w-9 " >
                <FormControl
                placeholder="https://example.com"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={url}
                onChange={(e)=>seturl(e.target.value)}
                />
                <Button variant="primary" id="button-addon2" onClick={()=>handleClick()}>
                SEND&nbsp;&nbsp;
                </Button>
            </InputGroup>
        </div>
    )
}
