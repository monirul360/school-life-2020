import React, { useState } from "react";

const Model = ({ monirul }) => {
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => {
    setZoom(prevZoom => prevZoom + 0.1);
  };

  const handleZoomOut = () => {
    setZoom(prevZoom => prevZoom - 0.1);
  };
  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div style={{ border: "none" }} class="modal-header">
            <button
              type="button"
              class="close"
              data-bs-dismiss="modal"
            >X</button>
          </div>
          <div class="modal-body">

            <img style={{ transform: `scale(${zoom})` }} className="img-fluid" src={monirul?.photo} alt="" />
          </div>
          <div style={{ border: "none" }} class="modal-footer text-center">
            <button onClick={handleZoomIn}>Zoom In</button>
            <button onClick={handleZoomOut}>Zoom Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
