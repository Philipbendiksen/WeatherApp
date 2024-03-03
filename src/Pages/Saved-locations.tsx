/* Detta är en hårdkodad lista med platser, som går att klicka på */

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";

function SavedLocations() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locations, setLocations] = useState([
    "Sälen",
    "Trysil",
    "Åre",
    "Stöten",
  ]);

  const addLocation = () => {
    if (searchTerm.trim() !== "") {
      setLocations((prevLocations) => [...prevLocations, searchTerm.trim()]);
      setSearchTerm("");
    }
  };

  return (
    <div className="flex flex-col md:w-72 w-40">
      <div className="flex flex-col">
        <div className="flex justify-between p-2">
          <span>Lägg till platser</span>
          <MagnifyingGlassIcon className="w-6 h-6" />
        </div>
        <div className="flex flex-col md:flex-row w-72">
          <input
            className="max-w-40"
            placeholder="Tänndalen..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="border-solid bg-gray-800 text-white w-20 p-2"
            onClick={addLocation}
          >
            Lägg till
          </button>
        </div>
      </div>

      <div className="flex justify-between p-4">
        <span className="ml-1 text-2xl">Sparade platser</span>
      </div>
      <ul className="max-w-min">
        {locations.map((location, index) => (
          <li key={index} className="cursor-pointer">
            <Link to={location}>{location}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SavedLocations;
