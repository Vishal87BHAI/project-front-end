import Navbar from "../navigation/Navbar";
import { Map, Scene } from "@esri/react-arcgis";

export const EsriMaps = () => {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "20px" }}>
        <Scene />
      </div>
    </div>
  );
};
