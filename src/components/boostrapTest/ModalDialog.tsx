import Navbar from "../navigation/Navbar";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { useState } from "react";

export const ModalDialog = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <div>
      
      <div style={{ marginTop: "100px" }}>
        {!show && (
          <Button variant="primary" onClick={handleShow}>
            Show Modal
          </Button>
        )}
        <div
          className="modal show"
          style={{ display: "block", position: "initial" }}
        >
          <Modal show={show} onHide={handleClose} backdrop="static" centered>
            <Modal.Dialog>
              <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <p>Modal body text goes here.</p>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={() => alert("Saved")}>
                  Save changes
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Modal>
        </div>
      </div>
    </div>
  );
};
