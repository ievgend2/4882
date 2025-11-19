import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import HouseRules from "./pages/HouseRules.jsx";
import HowTo from "./pages/HowTo.jsx";
import Places from "./pages/Places.jsx";

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div>
          <h1>4882 Retreat</h1>
          <p>Guest guide and house manual</p>
        </div>
        <nav className="main-nav">
          <NavLink
            end
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Property Info
          </NavLink>
          <NavLink
            to="/house-rules"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            House Rules
          </NavLink>
          <NavLink
            to="/how-to"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            How-To Guides
          </NavLink>
          <NavLink
            to="/places"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Local Spots
          </NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/house-rules" element={<HouseRules />} />
          <Route path="/how-to" element={<HowTo />} />
          <Route path="/places" element={<Places />} />
        </Routes>
      </main>

      <footer className="site-footer">Need help? Text us anytime.</footer>
    </div>
  );
}

export default App;
