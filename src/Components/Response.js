import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import JSONPretty from 'react-json-pretty';
export const Response = () => {
    var JSONPrettyMon = require('react-json-pretty/dist/monikai');
  const response = useSelector((state) => state.response);
  console.log(response)
  return (
    <div>
      <div style={{ fontSize: '20px' }}>
        <span>Status:&nbsp;&nbsp;{response.status}</span>
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
        <JSONPretty id="json-pretty" data={response} theme={JSONPrettyMon}></JSONPretty>
      </div>
    </div>
  );
};
