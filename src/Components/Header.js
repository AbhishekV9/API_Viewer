import React,{useState} from 'react';
import { DropdownButton, Dropdown, InputGroup, FormControl, Button } from 'react-bootstrap';
import { changeMethod,emptyBody} from "../Actions";
import { useDispatch } from 'react-redux'

export const Header = (props) => {
    const dispatch = useDispatch()
    const [method, setmethod] = useState("GET");
    const [url, seturl] = useState("")

    

    const handleClick=(method,value)=>{
        setmethod(method);
        dispatch(emptyBody())
        props.handleformDisplay(value);
        dispatch(changeMethod(method));
    }
  
    return (
        <>
        <div className="header">
            <DropdownButton id="dropdown-basic-button" className="drop" title={method}>
                <Dropdown.Item onClick={()=>handleClick('GET',false)}>GET</Dropdown.Item>
                <Dropdown.Item onClick={()=>handleClick('POST',true)}>POST</Dropdown.Item>
                <Dropdown.Item onClick={()=>handleClick('PUT',true)}>PUT</Dropdown.Item>
                {/* //<Dropdown.Item onClick={()=>setmethod("PATCH")}>PATCH</Dropdown.Item> */}
                <Dropdown.Item onClick={()=>handleClick('DELETE',true)}>DELETE</Dropdown.Item>
            </DropdownButton>
            <InputGroup className="mb-3 w-9 " >
                <FormControl
                placeholder="https://example.com"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={url}
                onChange={(e)=>seturl(e.target.value)}
                />
                <Button variant="primary" id="button-addon2" >
                SEND&nbsp;&nbsp;
                </Button>
            </InputGroup>
        </div>
        </>
    )
}
