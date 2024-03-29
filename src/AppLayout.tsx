import { Link, Outlet } from "react-router-dom";
import SavedLocations from "./Pages/Saved-locations";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LocationInput from "./components/LocationInput";

function AppLayout() {
  return (
    <div className="h-full flex flex-col">
      <Header />

      <div className="flex flex-1">
        {/* SIDEBAR */}
        <aside className="flex bg-slate-100 border-l-2 md:w-72 w-44 flex-col">
          <LocationInput />
          <SavedLocations />
        </aside>

        {/* Kolla koppling mellan "Home-page, MainArea, LocationPage! Dessa printar alla ut content i Main området. " */}
        <main>
          <Outlet />
        </main>
      </div>

      <Link
        to="Complaints"
        className="bg-gray-800 p-2  text-white flex md:w-72 w-44"
      >
        Complains about the weather? click here to get in contact with thor
      </Link>
      <Footer />
    </div>
  );
}

export default AppLayout;
