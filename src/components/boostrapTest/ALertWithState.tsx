import { useState } from "react";
import { Alert, Badge, Button, Col, Container, Dropdown, DropdownButton, Row } from "react-bootstrap";
import Navbar from "../navigation/Navbar";

export const AlertWithState = () => {
  const [show, setShow] = useState(true);
  const [flat, setFlat] = useState(true);
  const [grid, setGrid] = useState(true);

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "60px" }}>
        <Alert show={show} variant="success">
          <Alert.Heading>How's it going?!</Alert.Heading>
          <p>hello Alert. It is alert with variant success.</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Close me y'all!
            </Button>
          </div>
        </Alert>
        <Alert show={flat} variant="dark">
          <Alert.Heading>It is a Flat Alert</Alert.Heading>
          <p>Click button to hide it</p>
          <hr />
          <Button
            variant="outline-primary"
            onClick={() => setFlat(false)}
            style={{ margin: "10px" }}
          >
            Hide flat Alert
          </Button>
        </Alert>

        {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
        {!flat && (
          <Button
            variant="outline-dark"
            onClick={() => setFlat(true)}
            style={{ margin: "10px" }}
          >
            flat button
          </Button>
        )}
        <Button onClick={() => setGrid(!grid)} style={{ margin: "10px" }}>
          {grid ? "Hide Grid" : "Show Grid"}{" "}
          <Badge pill bg="secondary">
            3
          </Badge>
        </Button>
        {grid && (
          <Container style={{ marginTop: "20px" }}>
            <Row style={{ background: "yellow" }}>
              <Col>here is row 1 column 1</Col>
              <Col>here is row 1 column 2</Col>
              <Col>here is row 1 column 3</Col>
            </Row>
            <Row style={{ background: "orange" }}>
              <Col>here is row 2 column 1</Col>
              <Col>here is row 2 column 2</Col>
            </Row>
            <Row
              className="justify-content-md-center"
              style={{ background: "green" }}
            >
              <Col xs lg="2">
                1 of 3
              </Col>
              <Col md="auto">Variable width content</Col>
              <Col xs lg="2">
                3 of 3
              </Col>
            </Row>
            <DropdownButton
              title="Dropdown"
              id="bg-nested-dropdown"
              style={{marginTop: "20px"}}
            >
              <Dropdown.Item eventKey="1" onClick={()=> alert("alert from dropdown 1")}>Dropdown link 1</Dropdown.Item>
              <Dropdown.Item eventKey="2" onClick={()=> alert("alert from dropdown 2")}>Dropdown link 2</Dropdown.Item>
            </DropdownButton>
          </Container>
        )}
      </div>
    </div>
  );
};
