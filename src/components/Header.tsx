import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-end pr-6 bg-gray-800 p-2 border-t-1 text-white">
      <Link to="about">Läs mer</Link>
    </header>
  );
}

export default Header;