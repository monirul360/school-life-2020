import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Model from "./Model";
import Photo from "./Photo";

const Home = () => {
  const [photo, setPhoto] = useState([]);
  const [monirul, setmonirul] = useState(null);
  //photo api https://school-life.onrender.com/photo
  useEffect(() => {
    fetch("gallary.json")
      .then((res) => res.json())
      .then((data) => setPhoto(data));
  }, []);
  return (
    <div>
      <section className="photo-album">
        {photo.map((m) => (
          <Photo key={m._id} m={m} setmonirul={setmonirul}></Photo>
        ))}
      </section>
      <Model monirul={monirul}></Model>
    </div>
  );
};

export default Home;
