import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import App from "./AppStyle";
import Footer from "./Pages/Footer";
import Header from "./Pages/Header";
import LocationInput from "./Pages/LocationInput";
import DisplayWeather from "./Pages/WheaterDisplay";

const router = createBrowserRouter(
  createRoutesFromElements( 
    <Route path="/" Component={App}>
      <Route path="WheaterDisplay" Component={DisplayWeather} />
      <Route path="LocationInput" Component={LocationInput} />
      <Route path="Header" Component={Header} /> 
      <Route path="Footer" Component={Footer} /> 
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
