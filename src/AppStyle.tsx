import { HomeIcon } from "@heroicons/react/16/solid";
import {
  MagnifyingGlassIcon
} from "@heroicons/react/24/outline";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="h-full flex flex-col">
      <Link to="Header" className=" flex justify-end pr-6 bg-gray-800 p-2 border-t-1 text-white">Läs mer</Link>

      <div className="flex flex-1">
        <aside className="flex max-w-96 bg-slate-100">
          <div className="flex flex-col w-20 bg-slate-500">
            <Link to="WheaterDisplay">
              <HomeIcon className="p-4 cursor-pointer" />
            </Link>
            <Link to="LocationInput">
              <MagnifyingGlassIcon className="p-4 cursor-pointer" />
            </Link>

            
          </div>
          <div className="border-l-2 w-96 p-2 ">
            <Outlet />
          </div>
        </aside>

        <main className="bg-slate-500 p-2 flex-1 font-bold text-yellow-500 text-center text-5xl" >SÄLEN</main>
      </div>

      <Link to="Footer" className="bg-gray-800 p-2 text-white max-w-100%">Complains about the weather? click here to get in contact with thor</Link>
    </div>
  );
}

export default App;
