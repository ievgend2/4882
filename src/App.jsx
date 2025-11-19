import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import HowTo from "./pages/HowTo.jsx";

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div>
          <h1>4882 Retreat</h1>
          <p>Guest guide and house manual</p>
        </div>
        <nav className="main-nav">
          <NavLink end to="/" className={({ isActive }) => (isActive ? "active" : "")}
          >
            Property Info
          </NavLink>
          <NavLink to="/how-to" className={({ isActive }) => (isActive ? "active" : "")}
          >
            How-To Guides
          </NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-to" element={<HowTo />} />
        </Routes>
      </main>

      <footer className="site-footer">Need help? Text us anytime.</footer>
    </div>
  );
}

export default App;
