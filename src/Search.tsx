import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

function Search() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between p-4">
        <span className="ml-4">SEARCH</span>
        <EllipsisHorizontalIcon className="w-8 h-8" />
      </div>

      <input placeholder="Search" />
    </div>
  );
}

export default Search;
