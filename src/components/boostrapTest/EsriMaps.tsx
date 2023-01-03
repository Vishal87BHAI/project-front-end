import Navbar from "../navigation/Navbar";
import { Map, Scene } from "@esri/react-arcgis";

export const EsriMaps = () => {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "20px" }}>
        {/* <Map /> */}
        <Scene className="full-screen-map"
        mapProperties={{ basemap: 'satellite' }} />
      </div>
    </div>
  );
};
