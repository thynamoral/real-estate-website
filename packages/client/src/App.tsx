import "./sass/layout.scss";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/homePage/HomePage";

function App() {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
