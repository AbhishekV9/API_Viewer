import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import JSONPretty from 'react-json-pretty';
export const Response = (props) => {
    var JSONPrettyMon = require('react-json-pretty/dist/monikai');
  const response = useSelector((state) => state.response);
  console.log(response)
  return (
    <div>
      <div style={{ fontSize: '20px' }}>
        <span>Status:&nbsp;&nbsp;{props.success.length > 0 && props.success==="Success"? <span className="Green">{props.success}</span>:<span className="Red">{props.success}</span>}</span>
        <span style={{ marginLeft: '100px' }}>Time:</span>
      </div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>JSON</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link eventKey="link-1">RAW</Nav.Link>
            <Nav.Link eventKey="link-1">HEADERS</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="Response">
        <JSONPretty id="json-pretty" data={props.success==="Success" ? response:response.message } theme={JSONPrettyMon}></JSONPretty>
      </div>
    </div>
  );
};
