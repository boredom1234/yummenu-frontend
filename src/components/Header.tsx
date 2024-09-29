import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import logoImg from "../assets/YumMenuFav.png";

const Header = () => {
  return (
    <div className="border-b-2 border-b-customGreen py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center text-3xl font-bold tracking-tight text-customGreen"
        >
          <img className="w-8 h-8 mr-2" src={logoImg} alt="YumMenu Logo" />
          YumMenu
        </Link>
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
