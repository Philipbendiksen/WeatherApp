
/* Detta är en hårdkodad lista med platser, som går att klicka på */

import { SetStateAction, useState } from "react";
import LocationPage from "./LocationPage";


function SavedLocations() {
  const [selectedLocation, setSelectedLocation] = useState('Sälen');

  const handleClick = (location: SetStateAction<string>) => {
    console.log('Listelementet klickades:', location);
    setSelectedLocation(location);
  };

  const locations = ['Sälen', 'Trysil', 'Åre', 'Stöten'];

  return (
    <div className="flex flex-col">
      <div className="flex justify-between p-4">
        <span className="ml-1 text-2xl">Sparade platser</span>
      </div>
      <ul className="max-w-min">
        {locations.map((location, index) => (
          <li key={index} onClick={() => handleClick(location)} className="cursor-pointer">
            {location}
          </li>
        ))}
      </ul>
      <LocationPage selectedLocation={selectedLocation} />
    </div>
  );
}

export default SavedLocations;

