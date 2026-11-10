import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className="navbar navbar-dark sticky-top px-3 py-3"
      style={{
        backgroundColor: "rgba(15, 17, 23, 0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)"
      }}
    >
      <div className="container d-flex align-items-center justify-content-between">
        {/* Brand Logo */}
        <Link
          className="navbar-brand d-flex align-items-center gap-2 text-decoration-none m-0"
          to="/"
        >
          <span className="fs-4">🏎️</span>
          <span
            className="fw-black fs-4 tracking-wider"
            style={{
              letterSpacing: "2px",
              fontWeight: "900",
              background: "linear-gradient(45deg, #f59e0b, #fbbf24)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            APEX MOTORS
          </span>
        </Link>

        {/* Navigation Links - Horizontal Flex */}
        <div className="d-flex align-items-center gap-3">
          <Link
            to="/"
            className={`btn btn-sm px-3 py-2 fw-semibold rounded-pill ${
              isActive("/") ? "btn-light text-dark" : "btn-dark text-secondary"
            }`}
          >
            Home
          </Link>

          <Link
            to="/card"
            className={`btn btn-sm px-3 py-2 fw-semibold rounded-pill ${
              isActive("/card") ? "btn-light text-dark" : "btn-dark text-secondary"
            }`}
          >
            Showroom
          </Link>

          <Link
            to="/form"
            className="btn btn-sm px-3 py-2 fw-bold rounded-pill"
            style={{
              background: "linear-gradient(135deg, #f59e0b, #d97706)",
              color: "#000",
              border: "none"
            }}
          >
            + Add Car
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;