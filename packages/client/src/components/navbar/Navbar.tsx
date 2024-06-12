import "./Navbar.scss";
const Navbar = () => {
  return (
    <nav>
      <div className="left">
        <a id="logo" href="/">
          MomoEstate
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agent</a>
      </div>
      <div className="right">
        <a href="/">Sign in</a>
        <a id="signUp" href="/">
          Sign up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
