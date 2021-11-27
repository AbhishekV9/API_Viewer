import React,{useState} from 'react';
import { DropdownButton, Dropdown, InputGroup, FormControl, Button } from 'react-bootstrap';
import { changeMethod,emptyBody, saveResponse} from "../Actions";
import { useDispatch,connect } from 'react-redux'

const Header = (props) => {
    const dispatch = useDispatch()
    const [method, setmethod] = useState("GET");
    const [url, seturl] = useState("")

    function isValidURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
      return !!pattern.test(str);
      };
    
    const handleClick=(method,value)=>{
        setmethod(method);
        dispatch(emptyBody())
        props.handleformDisplay(value);
        dispatch(changeMethod(method));
    }

    const handleSend=()=>{
        if(url===""){
            alert("please Enter a Valid url")
            return
        }
        const isValid=isValidURL(url);
        if(isValid){
            dispatch(emptyBody())
            if(method!=="GET"){
                    fetch(url,{
                        method:method,
                        body: JSON.stringify(
                            props.postState
                        ),
                        headers:{ 'Content-Type': 'application/json' },
                    })
                    .then(res=>res.json())
                    .then(data=>{
                      dispatch(saveResponse(data));  
                    })
                    .catch((err)=>{
                        console.log(err);
                        dispatch(saveResponse(err))
                    })
                    return;  
            }
            fetch(url)
            .then(res=>res.json())
            .then(data=>{
                dispatch(saveResponse(data))
            }).catch((err)=>{
                console.log(err)
                dispatch(saveResponse(err))
            })
        }else{
            alert("Please Enter a valid url")

        }
    }
  
    return (
        <>
        <div className="header">
            <DropdownButton id="dropdown-basic-button" className="drop" title={method}>
                <Dropdown.Item onClick={()=>handleClick('GET',false)}>GET</Dropdown.Item>
                <Dropdown.Item onClick={()=>handleClick('POST',true)}>POST</Dropdown.Item>
                <Dropdown.Item onClick={()=>handleClick('PUT',true)}>PUT</Dropdown.Item>
                <Dropdown.Item onClick={()=>handleClick('PATCH',true)}>PATCH</Dropdown.Item>
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
                <Button variant="primary" id="button-addon2" onClick={()=>handleSend()}>
                SEND&nbsp;&nbsp;
                </Button>
            </InputGroup>
        </div>
        </>
    )
}

function mapStatetoprops(state){
    return{
      postState:state.postState
    }
  }
  

  const connectedComponent=connect(mapStatetoprops)(Header);
  
  export default connectedComponent;