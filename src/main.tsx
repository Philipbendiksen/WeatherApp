import React from "react";
import ReactDOM from "react-dom/client";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./AppStyle";
import Footer from "./Footer";
import Header from "./Header";
import LocationInput from "./LocationInput";
import DisplayWeather from "./WheaterDisplay";

const router = createBrowserRouter(
  createRoutesFromElements( 
    <Route path="/" Component={App}>
      <Route index element={<Navigate to="explorer" />} />
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
