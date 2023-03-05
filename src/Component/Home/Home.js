import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Model from "./Model";
import Photo from "./Photo";

const Home = () => {
  const [photo, setPhoto] = useState([]);
  const [monirul, setmonirul] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/photo")
      .then((res) => res.json())
      .then((data) => setPhoto(data));
  }, []);
  return (
    <div>
      <section className="photo-album">
        {photo.map((m) => (
          <Photo m={m} setmonirul={setmonirul}></Photo>
        ))}
      </section>
      <Model monirul={monirul}></Model>
    </div>
  );
};

export default Home;