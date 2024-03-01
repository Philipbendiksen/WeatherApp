/* Detta är en del av Main ytan */

import { useParams } from "react-router-dom";

function LocationPage() {
  const params = useParams();
  return (
    <div className="flex flex-col">
      <p className="bg-slate-500 p-2 flex-1 font-bold text-yellow-500 text-center text-5xl">
        {params.name}
      </p>
    </div>
  );
}

export default LocationPage;
