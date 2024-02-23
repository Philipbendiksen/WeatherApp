import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function LocationInput() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between p-2">
        <span>SEARCH LOCATION</span>
        <MagnifyingGlassIcon className="w-6 h-6" />
      </div>

      <input placeholder="Search" />
    </div>
  );
}

export default LocationInput;


