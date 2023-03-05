import React from "react";

const Photo = ({ m, setmonirul }) => {
  return (
    <>
      <div className="photo-items">
        <div
          onClick={() => setmonirul(m)}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img src={m.photo} alt="" />
        </div>
      </div>
      {/* ========== */}
    </>
  );
};

export default Photo;
