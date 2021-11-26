import React from 'react';
import { Navbar,Nav,Container } from 'react-bootstrap';

export const Response = () => {
    return (
        <div>
            <div style={{ fontSize:"20px"}}>
                <span>
                    Status:
                </span>
                <span style={{ marginLeft:"100px"}}>
                    Time:
                </span>
            </div>
            <Navbar bg="light" variant="light" >
                <Container>
                <Navbar.Brand>JSON</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link eventKey="link-1">RAW</Nav.Link>
                <Nav.Link eventKey="link-1">HEADERS</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            <div>
                
            </div>
        </div>
    )
}
