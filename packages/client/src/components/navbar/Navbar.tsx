import { Menu } from "lucide-react";
import "./Navbar.scss";
import useToggle from "@/hooks/useToggle";
import { useEffect } from "react";
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
        <a id="logo" href="/">
          MomoEstate
        </a>
        <div className="navLinks">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agent</a>
        </div>
      </div>
      <div className="right">
        <a id="signIn" href="/">
          Sign in
        </a>
        <a id="signUp" href="/">
          Sign up
        </a>
        {/* nav links menu for mobile/tablet */}
        {!isToggle && (
          <div id="menuIconContainer">
            <Menu id="menuIcon" onClick={() => setIsToggle(true)} />
          </div>
        )}
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
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agent</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
