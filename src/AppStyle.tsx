import { HomeIcon } from "@heroicons/react/16/solid";
import {
  MagnifyingGlassIcon
} from "@heroicons/react/24/outline";
import { Link, Outlet } from "react-router-dom";

///          DOMÄN        MAPP      PARAMS            QUERY PARAMS
/// http://www.site.com/products/12345/fin-soffa?färg=rosa&storlek=small

function App() {
  return (
    <div className="h-full flex flex-col">
      <Link to="Header" className="bg-slate-100 p-2 border-b-2">HEADER</Link>

      <div className="flex flex-1">
        <aside className="flex bg-slate-100 p-2 border-r-2">
          <div className="flex flex-col">
            <Link to="/WheaterDisplay">
              <HomeIcon className="h-20 w-20 p-4 cursor-pointer" />
            </Link>
            <Link to="LocationInput">
              <MagnifyingGlassIcon className="h-20 w-20 p-4 cursor-pointer" />
            </Link>
           
            
          </div>
          <div className="border-l-2 w-96">
            <Outlet />
          </div>
        </aside>

        <main className="bg-slate-500 p-2 flex-1 font-bold text-yellow-500 text-center text-5xl" >SÄLEN</main>
      </div>

      <Link to="Footer" className="bg-gray-800 p-2 border-t-2 text-white">Complains about the weather? click here to get in contact with thor</Link>
    </div>
  );
}

export default App;
