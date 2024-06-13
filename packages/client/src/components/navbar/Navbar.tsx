import { Menu } from "lucide-react";
import "./Navbar.scss";
import useToggle from "@/hooks/useToggle";
const Navbar = () => {
  const { isToggle, setIsToggle } = useToggle();

  console.log(isToggle);

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
        <div id="menuIconContainer">
          <Menu id="menuIcon" onClick={() => setIsToggle((prev) => !prev)} />
        </div>
        <div className={`${isToggle ? "menuList showMenu" : "menuList"}`}>
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
