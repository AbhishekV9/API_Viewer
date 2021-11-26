import React from "react";
import {InputGroup,FormControl,Navbar,Nav,Container} from 'react-bootstrap';

function Data(){
    return(
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                <Nav className="me-auto">
                <Nav.Link >Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            <InputGroup className="mb-3">
                <InputGroup.Text>Key</InputGroup.Text>
                <FormControl aria-label="First name" />
                <InputGroup.Text>Value</InputGroup.Text>
                <FormControl aria-label="Last name" />
            </InputGroup>
        </div>
    )
}

export default Data;