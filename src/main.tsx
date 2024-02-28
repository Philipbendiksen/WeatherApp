import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import AppLayout from "./AppLayout.tsx";
import About from "./Pages/About.tsx";
import Complaints from "./Pages/Complaints.tsx";
import HomePage from "./Pages/HomePage.tsx";
import LocationPage from "./Pages/LocationPage.tsx";


const router = createBrowserRouter(
  createRoutesFromElements( 
    <Route path="/" Component={AppLayout}>
      <Route path="home" Component={HomePage} /> 
      <Route path=":name" Component={LocationPage} />
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
