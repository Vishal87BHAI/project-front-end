import { useState } from "react";
import {
  Alert,
  Button,
  ListGroup,
  Offcanvas,
  OverlayTrigger,
  Spinner,
  Tooltip,
} from "react-bootstrap";
import Navbar from "../navigation/Navbar";

export const OffcanvasSidebar = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      Click to view sidebar
    </Tooltip>
  );

  return (
    <div>
      
      <div style={{ marginTop: "100px" }}>
        {!show && (
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <Button variant="primary" onClick={handleShow}>
              Show Sidebar
            </Button>
          </OverlayTrigger>
        )}
        <br />
        <Button
          variant="outline-dark"
          onClick={() => setLoading(!loading)}
          style={{ marginTop: "20px" }}
        >
          Click to Load
        </Button>
        <br /><br />
        {loading && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}

        <Offcanvas show={show} onHide={handleClose} scroll>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>item 1</ListGroup.Item>
              <ListGroup.Item>item 2</ListGroup.Item>
              <ListGroup.Item>item 3</ListGroup.Item>
              <ListGroup.Item>item 4</ListGroup.Item>
            </ListGroup>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
};
