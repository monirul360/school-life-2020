import React, { useState } from "react";
import {
  TransformWrapper,
  TransformComponent,
  ReactZoomPanPinchRef,
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
            <TransformWrapper
              initialScale={0}
              initialPositionX={0}
              initialPositionY={0}
            >
              <React.Fragment>
                <TransformComponent>
                  <img
                    className="img-fluid"
                    style={{ transform: `scale(${scale})` }}
                    src={monirul?.photo}
                    alt="" />
                </TransformComponent>
              </React.Fragment>
            </TransformWrapper>
          </div>
        </div>
      </div>
      <div className="footer">
        <button onClick={handleZoomIn}>Zoom In</button>
        <button onClick={handleZoomOut}>Zoom Out</button>
        <button onClick={handleRestore}>Restore</button>
      </div>
    </div >
  );
};

export default Model;
