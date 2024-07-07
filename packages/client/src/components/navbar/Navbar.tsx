import { Menu } from "lucide-react";
import "./Navbar.scss";
import useToggle from "@/hooks/useToggle";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { isToggle, setIsToggle } = useToggle();

  // console.log(isToggle);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMousedown = (event: any) => {
    if (!event.target.classList.contains("mobileNavbar")) {
      setIsToggle(false);
    }
    // console.log(event.target.className);
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
        <Link id="signIn" to="/">
          Sign in
        </Link>
        <Link id="signUp" to="/">
          Sign up
        </Link>
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
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Agent</Link>
            <Link to="/">Sign in</Link>
            <Link to="/">Sign up</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
