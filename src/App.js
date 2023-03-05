import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Camera from "./Component/Camera/Camera";
import Home from "./Component/Home/Home";
import Nav from "./Component/Nav/Nav";
import Video from "./Component/Video/Video";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/video",
      element: <Video></Video>,
    },
    {
      path: "/camera",
      element: <Camera></Camera>,
    },
  ]);
  return (
    <div>
      <Nav></Nav>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
