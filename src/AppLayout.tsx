import { Link, Outlet } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MainArea from "./Pages/Main-area";
import Header from "./components/Header";
import LocationInput from "./components/LocationInput";
import SavedLocations from "./components/Saved-locations";

function AppLayout() {
  return (
    <div className="h-full flex flex-col">
      <Header />

      <div className="flex flex-1">
        
        {/* SIDEBAR */}
        <aside className="flex max-w-96 bg-slate-100 border-l-2 w-96 p-2 flex-col">
            <LocationInput />
            <SavedLocations /> 
        </aside>
       

       {/* Kolla koppling mellan "Home-page, MainArea, LocationPage! Dessa printar alla ut content i Main området. Kolla också vad outlet gör i Main. " */}
        <main >
          <Outlet />
          <MainArea /> 
          <HomePage />
        </main>

      </div>

      {/* Footer */}
      <Link to="Complaints" className="bg-gray-800 p-2 text-white max-w-100%">Complains about the weather? click here to get in contact with thor</Link>
    </div>
  );
}

export default AppLayout;
