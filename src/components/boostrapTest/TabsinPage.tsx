import { Spinner, Tab, Tabs } from "react-bootstrap";
import Navbar from "../navigation/Navbar";
import { Accordian } from "./Accordian";
import { FormValidation } from "./FormValidation";

export const TabsinPage = () => {
  return (
    <div>
      
      <div
        style={{
          marginTop: "100px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ height: "800px", width: "500px" }}>
          <Tabs
            defaultActiveKey="form"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="form" title="Form">
              <FormValidation />
            </Tab>
            <Tab eventKey="accordian" title="Accordian">
              <Accordian />
            </Tab>
            <Tab eventKey="others" title="Others">
              <Spinner />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
