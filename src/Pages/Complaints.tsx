

function Complaints() {
    return (
      <div className="flex flex-col">
        <h2 className="text-xl flex justify-center ">Klagmål</h2>
        <textarea 
           rows={8} 
          className="mt-2 bg-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-md"> </textarea>
        <button
        type="submit"
        className=" items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-slate-500 hover:backdrop:bg-slate-700"
    
        >Skicka</button>
      </div>
    );
  }
  
  export default Complaints;
  
  