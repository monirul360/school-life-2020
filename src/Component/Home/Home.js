import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import Model from "./Model";
import Photo from "./Photo";
import Loading from "./../Loading/Loading";
const Home = () => {
  // const [photo, setPhoto] = useState([]);
  const [monirul, setmonirul] = useState(null);

  // useEffect(() => {
  //   fetch("https://school-life.onrender.com/photo")
  //     .then((res) => res.json())
  //     .then((data) => setPhoto(data));
  // }, []);
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://school-life.onrender.com/photo').then(
        (res) => res.json(),
      ),
  })

  if (isLoading) return <Loading></Loading>

  if (error) return 'An error has occurred: ' + error.message


  return (
    <div>
      <section className="photo-album">
        {data.map((m) => (
          <Photo key={m._id} m={m} setmonirul={setmonirul}></Photo>
        ))}
      </section>
      <Model monirul={monirul}></Model>
    </div>
  );
};

export default Home;
