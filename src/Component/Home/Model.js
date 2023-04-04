import React, { useState } from "react";
import {
  TransformWrapper,
  TransformComponent,
} from "react-zoom-pan-pinch";

const Model = ({ monirul }) => {

  const [scale, setScale] = useState(1); // initial scale value

  const handleZoomIn = () => {
    setScale(scale + 0.1); // increase scale by 0.1
  };

  const handleZoomOut = () => {
    if (scale > 0.2) {
      setScale(scale - 0.1); // decrease scale by 0.1, but don't allow scale to go below 0.2
    }
  };

  const handleRestore = () => {
    setScale(1); // reset scale to initial value
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
              class="btn-close bg-white"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div class="modal-body">
            <TransformWrapper>
              <TransformComponent>
                <img
                  className="img-fluid"
                  style={{ transform: `scale(${scale})` }}
                  src={monirul?.photo}
                  alt="" />
              </TransformComponent>
            </TransformWrapper>
          </div>
        </div>
      </div>
      <div className="footer">
        <button onClick={handleZoomIn}> + Zoom In</button>
        <button onClick={handleZoomOut}> - Zoom Out</button>
        <button onClick={handleRestore}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bootstrap-reboot" viewBox="0 0 16 16">
          <path d="M1.161 8a6.84 6.84 0 1 0 6.842-6.84.58.58 0 1 1 0-1.16 8 8 0 1 1-6.556 3.412l-.663-.577a.58.58 0 0 1 .227-.997l2.52-.69a.58.58 0 0 1 .728.633l-.332 2.592a.58.58 0 0 1-.956.364l-.643-.56A6.812 6.812 0 0 0 1.16 8z" />
          <path d="M6.641 11.671V8.843h1.57l1.498 2.828h1.314L9.377 8.665c.897-.3 1.427-1.106 1.427-2.1 0-1.37-.943-2.246-2.456-2.246H5.5v7.352h1.141zm0-3.75V5.277h1.57c.881 0 1.416.499 1.416 1.32 0 .84-.504 1.324-1.386 1.324h-1.6z" />
        </svg>Restore</button>
      </div>
    </div >
  );
};

export default Model;
