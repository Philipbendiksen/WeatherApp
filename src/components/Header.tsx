import { HomeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header> 
      
        <div className="flex justify-between items-center pr-6 bg-gray-800 p-2 border-t-1 text-white"> 
      
       <Link to={"HomePage"} className="flex items-center"> <HomeIcon className="w-6 h-6 mr-2" /> HOME </Link>

      <Link to="about">Läs mer</Link>
       </div>

    </header>
    
  );
}

export default Header;

