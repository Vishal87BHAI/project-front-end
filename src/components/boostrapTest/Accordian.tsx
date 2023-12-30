import { Accordion } from "react-bootstrap";
import Navbar from "../navigation/Navbar";

export const Accordian = () => {
  return (
    <div>
      
      <div style={{ marginTop: "60px" }}>
        <Accordion alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordian #1</Accordion.Header>
            <Accordion.Body>
              hello what `s up? It is Accordian 1.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordian #2</Accordion.Header>
            <Accordion.Body>
              hello what `s up? It is Accordian 2.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};
