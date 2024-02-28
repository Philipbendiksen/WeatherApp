/* Detta är en del av Main ytan */


function LocationPage({ selectedLocation }: { selectedLocation: string })

{
  return (
    <div className="flex flex-col">
      <p className="bg-slate-500 p-2 flex-1 font-bold text-yellow-500 text-center text-5xl">{selectedLocation}</p>
    </div>
  );
}

export default LocationPage;


