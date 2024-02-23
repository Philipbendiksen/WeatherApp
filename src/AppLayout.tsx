import { Link, Outlet } from "react-router-dom";
import SavedLocations from "./Pages/Saved-locations";
import Header from "./components/Header";
import LocationInput from "./components/LocationInput";

function AppLayout() {
  return (
    <div className="h-full flex flex-col">
      <Header />

      <div className="flex flex-1">
        
        {/* SIDEBAR */}
        <aside className="flex max-w-96 bg-slate-100 border-l-2 w-96 p-2 flex-col">
            <LocationInput />
            <SavedLocations /> {/* Döp om den till vad den faktiskt är */}
        </aside>
       
        <main className="flex flex-1 max-w-100%">
          <Outlet />
        </main>

      </div>

      {/* Footer */}
      <Link to="Footer" className="bg-gray-800 p-2 text-white max-w-100%">Complains about the weather? click here to get in contact with thor</Link>
    </div>
  );
}

export default AppLayout;
