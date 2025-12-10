
"use client"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
export default function Map() {
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="map">
                <MapContainer
                  center={[28.6139, 77.209]}
                  zoom={18}
                  style={{ height: "400px", width: "100%" }}
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                  <Marker position={[28.6139, 77.209]}>
                    <Popup>New Delhi</Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
