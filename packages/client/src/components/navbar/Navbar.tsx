import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useAppContext } from "@/contexts/AppProvider";
import useToggle from "@/hooks/useToggle";
import "./Navbar.scss";
import { userData } from "@/lib/mockData";
const Navbar = () => {
  const { isToggle, setIsToggle } = useToggle();
  const { state } = useAppContext();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMousedown = (event: MouseEvent) => {
    const menuElement = document.querySelector(".mobileNavbar");
    if (menuElement && !menuElement.contains(event.target as Node)) {
      setIsToggle(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleMousedown);
    return () => window.removeEventListener("mousedown", handleMousedown);
  }, []);

  return (
    <nav>
      <div className="left">
        <Link id="logo" to="/">
          MomoEstate
        </Link>
        <div className="navLinks">
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Agent</Link>
        </div>
      </div>
      <div className="right">
        {state.isAuthenticated ? (
          <div className="user">
            <img src={userData.img} />
            <span className="username">{userData.name}</span>
            <Link to="/profile">
              <span>Profile</span>
              <span className="notification">3</span>
            </Link>
          </div>
        ) : (
          <>
            <Link id="signIn" to="/">
              Sign in
            </Link>
            <Link id="signUp" to="/">
              Sign up
            </Link>
          </>
        )}
        {/* nav links menu for mobile/tablet */}
        {!isToggle && (
          <div id="menuIconContainer">
            <Menu id="menuIcon" onClick={() => setIsToggle(true)} />
          </div>
        )}
        {isToggle && (
          <div
            className={`${
              isToggle
                ? "menuList mobileNavbar showMenu"
                : "menuList mobileNavbar"
            }`}
          >
            <div id="menuIconContainer2">
              <Menu id="menuIcon" onClick={() => setIsToggle(true)} />
            </div>
            <Link to="/profile" onClick={() => setIsToggle(false)}>
              <span>Profile</span>
            </Link>
            <Link to="/" onClick={() => setIsToggle(false)}>
              Home
            </Link>
            <Link to="/" onClick={() => setIsToggle(false)}>
              About
            </Link>
            <Link to="/" onClick={() => setIsToggle(false)}>
              Contact
            </Link>
            <Link to="/" onClick={() => setIsToggle(false)}>
              Agent
            </Link>
            <Link to="/" onClick={() => setIsToggle(false)}>
              Sign in
            </Link>
            <Link to="/" onClick={() => setIsToggle(false)}>
              Sign up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
