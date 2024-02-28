import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import AppLayout from "./AppLayout";
import About from "./Pages/About";
import Complaints from "./Pages/Complaints";
import HomePage from "./Pages/HomePage";
import LocationPage from "./Pages/LocationPage";


const router = createBrowserRouter(
  createRoutesFromElements( 
    <Route path="/" Component={AppLayout}>
      <Route path="home" Component={HomePage} /> 
      <Route path=":name" children={LocationPage} />
      <Route path="about" Component={About} />
      <Route path="complaints" Component={Complaints} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
