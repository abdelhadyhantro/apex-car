import { Link } from "react-router-dom";

function Home() {
  const marqueeBrands = [
    "MERCEDES-AMG",
    "BMW M",
    "PORSCHE",
    "RANGE ROVER SV",
    //"MCLAREN",
   //"FERRARI",
   //"LAMBORGHINI",
   //"ROLLS-ROYCE"
  ];

  const features = [
    {
      icon: "✈️",
      title: "VIP White-Glove Delivery",
      description: "Direct-to-hangar, superyacht slip, or luxury villa drop-off anywhere in the region with enclosed transport."
    },
    {
      icon: "⚡",
      title: "Unrestricted Performance",
      description: "Every vehicle is delivered in full sport-plus calibration with active sport exhausts and verified maintenance."
    },
    {
      icon: "🛡️",
      title: "Bespoke Discretion & Security",
      description: "Full privacy protocols, comprehensive exotic coverage, and zero-hassle seamless acquisition."
    }
  ];

  return (
    <div style={{ backgroundColor: "#06070a", minHeight: "100vh", color: "#ffffff" }}>
      {/* 1. CINEMATIC HERO SECTION */}
      <section
        className="position-relative d-flex align-items-center justify-content-center text-center py-5"
        style={{
          minHeight: "88vh",
          backgroundImage: `
            radial-gradient(circle at 50% 40%, rgba(212, 175, 55, 0.12) 0%, rgba(6, 7, 10, 0.85) 60%, #06070a 100%),
            linear-gradient(to bottom, rgba(6, 7, 10, 0.4), #06070a),
            url('https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1800&auto=format&fit=crop')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center 65%",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="container py-5">
          {/* Elite Pill Tag */}
          <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill mb-4"
            style={{
              backgroundColor: "rgba(212, 175, 55, 0.1)",
              border: "1px solid rgba(212, 175, 55, 0.35)",
              backdropFilter: "blur(10px)"
            }}
          >
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "#d4af37" }} />
            <span
              className="text-uppercase fw-bold"
              style={{
                color: "#fcd34d",
                letterSpacing: "2.5px",
                fontSize: "0.72rem"
              }}
            >
              MONACO &bull; DUBAI &bull; BEVERLY HILLS FLEET
            </span>
          </div>

          {/* Main Hero Headline */}
          <h1
            className="display-2 fw-black text-uppercase mb-3"
            style={{
              letterSpacing: "4px",
              fontWeight: "900",
              lineHeight: "1.05"
            }}
          >
            DRIVE THE{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ffffff 20%, #d4af37 60%, #f59e0b 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              EXTRAORDINARY
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="lead text-secondary mx-auto mb-5"
            style={{
              maxWidth: "680px",
              fontSize: "1.15rem",
              lineHeight: "1.6",
              color: "rgba(255, 255, 255, 0.65)"
            }}
          >
            Curated exotic, supercar, and bespoke grand tourer rentals and acquisitions.
            Unrivaled performance from the world’s most celebrated automotive ateliers.
          </p>

          {/* CTA Buttons */}
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Link
              to="/card"
              className="btn btn-lg px-5 py-3 fw-bold rounded-pill shadow-lg text-decoration-none"
              style={{
                background: "linear-gradient(135deg, #d4af37 0%, #b8860b 100%)",
                color: "#000000",
                border: "none",
                letterSpacing: "1px",
                fontSize: "0.95rem",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(212, 175, 55, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Explore Showroom →
            </Link>

            <Link
              to="/form"
              className="btn btn-lg px-4 py-3 fw-semibold rounded-pill text-decoration-none"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "#ffffff",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)",
                letterSpacing: "1px",
                fontSize: "0.95rem",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.12)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
              }}
            >
              + List a Vehicle
            </Link>
          </div>
        </div>
      </section>

      {/* 2. HORIZONTAL MARQUEE / BRAND TICKER */}
      <section
        className="py-3 border-top border-bottom"
        style={{
          backgroundColor: "#090b10",
          borderColor: "rgba(255, 255, 255, 0.06) !important"
        }}
      >
        <div className="container">
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 text-center">
            {marqueeBrands.map((brand) => (
              <span
                key={brand}
                className="fw-bold px-2"
                style={{
                  fontSize: "0.78rem",
                  letterSpacing: "2.5px",
                  color: "rgba(255, 255, 255, 0.35)",
                  transition: "color 0.2s ease"
                }}
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FLOATING CARBON STATS */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div
                className="p-4 rounded-4 text-center h-100 position-relative overflow-hidden"
                style={{
                  backgroundColor: "#0d0f17",
                  border: "1px solid rgba(255, 255, 255, 0.07)"
                }}
              >
                <h2 className="display-4 fw-black mb-1" style={{ color: "#d4af37", letterSpacing: "1px" }}>
                  8
                </h2>
                <h6 className="fw-bold text-white text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.85rem" }}>
                  World-Class Marques
                </h6>
                <p className="text-secondary small mb-0 mt-2">
                  Hand-selected lineups from Affalterbach, Maranello, Sant'Agata, and Goodwood.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="p-4 rounded-4 text-center h-100 position-relative overflow-hidden"
                style={{
                  backgroundColor: "#0d0f17",
                  border: "1px solid rgba(212, 175, 55, 0.35)",
                  boxShadow: "0 0 30px rgba(212, 175, 55, 0.08)"
                }}
              >
                <h2 className="display-4 fw-black mb-1" style={{ color: "#d4af37", letterSpacing: "1px" }}>
                  64
                </h2>
                <h6 className="fw-bold text-white text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.85rem" }}>
                  Flagship Supercars
                </h6>
                <p className="text-secondary small mb-0 mt-2">
                  From 791 HP hybrid sedans to track-homologated GT3 RS aerodynamic beasts.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="p-4 rounded-4 text-center h-100 position-relative overflow-hidden"
                style={{
                  backgroundColor: "#0d0f17",
                  border: "1px solid rgba(255, 255, 255, 0.07)"
                }}
              >
                <h2 className="display-4 fw-black mb-1" style={{ color: "#d4af37", letterSpacing: "1px" }}>
                  100%
                </h2>
                <h6 className="fw-bold text-white text-uppercase" style={{ letterSpacing: "1.5px", fontSize: "0.85rem" }}>
                  Inspected & Verified
                </h6>
                <p className="text-secondary small mb-0 mt-2">
                  Zero compromises on mechanical health, factory warranties, and security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE APEX CONCIERGE EXPERIENCE */}
      <section className="py-5" style={{ backgroundColor: "#090b10" }}>
        <div className="container py-4">
          <div className="text-center mb-5">
            <span
              className="text-uppercase fw-bold"
              style={{ color: "#d4af37", letterSpacing: "2.5px", fontSize: "0.75rem" }}
            >
              BESPOKE CLIENT PRIVILEGES
            </span>
            <h2 className="display-5 fw-bold text-white mt-2">THE APEX STANDARD</h2>
            <p className="text-secondary mx-auto mt-2" style={{ maxWidth: "550px", fontSize: "0.95rem" }}>
              Every rental reservation and vehicle acquisition is accompanied by our signature concierge protocol.
            </p>
          </div>

          <div className="row g-4">
            {features.map((item, idx) => (
              <div key={idx} className="col-md-4">
                <div
                  className="p-4 rounded-4 h-100"
                  style={{
                    backgroundColor: "#0d0f17",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    transition: "border-color 0.3s ease"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.4)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.06)")}
                >
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-3 p-3 mb-3 fs-3"
                    style={{ backgroundColor: "rgba(212, 175, 55, 0.1)", color: "#d4af37" }}
                  >
                    {item.icon}
                  </div>
                  <h5 className="fw-bold text-white mb-2">{item.title}</h5>
                  <p className="text-secondary small mb-0" style={{ lineHeight: "1.6" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VIP SHOWROOM INVITATION BANNER */}
      <section className="py-5">
        <div className="container py-4">
          <div
            className="p-5 rounded-4 text-center position-relative overflow-hidden"
            style={{
              backgroundColor: "#0d0f17",
              border: "1px solid rgba(212, 175, 55, 0.3)",
              backgroundImage: "radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 70%)"
            }}
          >
            <h3 className="display-6 fw-bold text-white mb-2">READY TO TAKE THE WHEEL?</h3>
            <p className="text-secondary mx-auto mb-4" style={{ maxWidth: "580px" }}>
              Browse the live fleet now to reserve your next high-performance drive or acquire a crown jewel for your private collection.
            </p>
            <Link
              to="/card"
              className="btn btn-warning px-5 py-3 fw-bold rounded-pill text-dark text-decoration-none"
              style={{
                backgroundColor: "#d4af37",
                border: "none",
                letterSpacing: "1px",
                fontSize: "0.9rem"
              }}
            >
              Launch Current Showroom →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;