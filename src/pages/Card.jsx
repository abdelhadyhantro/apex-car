// src/pages/Card.jsx
import { useState } from "react";
import ProductCard from "../components/ProductCard.jsx";

function Card({ products }) {
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [dealType, setDealType] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Your exact luxury brands
  const brands = [
    "All",
    "Mercedes-Benz",
    "BMW",
    "Porsche",
    "Range Rover",
    // "McLaren",
    // "Ferrari",
    // "Lamborghini",
    // "Rolls-Royce"
  ];

  const filteredProducts = products.filter((car) => {
    const matchesBrand = selectedBrand === "All" || car.brand === selectedBrand;
    const matchesType = dealType === "All" || car.type === dealType;
    const matchesSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesBrand && matchesType && matchesSearch;
  });

  return (
    <div style={{ backgroundColor: "#0b0d13", minHeight: "100vh", color: "#fff" }} className="py-5">
      <div className="container">
        {/* Header */}
        <div className="d-flex flex-wrap justify-content-between align-items-end mb-4 gap-3">
          <div>
            <h1 className="fw-black mb-1">CURRENT SHOWROOM</h1>
            <p className="text-secondary mb-0">Browse and reserve luxury models</p>
          </div>

          <div className="btn-group p-1 rounded-pill" style={{ backgroundColor: "#131722" }}>
            {["All", "Rent", "Buy"].map((type) => (
              <button
                key={type}
                className={`btn btn-sm px-3 rounded-pill fw-bold ${
                  dealType === type ? "btn-warning text-dark" : "text-secondary"
                }`}
                onClick={() => setDealType(type)}
              >
                {type === "All" ? "All Deals" : type === "Rent" ? "For Rent" : "For Sale"}
              </button>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="mb-4">
          <input
            type="text"
            className="form-control py-3 px-4 rounded-pill border-0 text-white"
            style={{ backgroundColor: "#131722" }}
            placeholder="🔍 Search (e.g. Maybach, Brabus, Competition, 911 GT3, Cullinan)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Brand Buttons */}
        <div className="d-flex flex-wrap gap-2 mb-5">
          {brands.map((brand) => (
            <button
              key={brand}
              className={`btn btn-sm px-3 py-2 rounded-pill fw-semibold ${
                selectedBrand === brand ? "btn-light text-dark" : "btn-dark text-secondary"
              }`}
              style={{ border: "1px solid rgba(255, 255, 255, 0.08)" }}
              onClick={() => setSelectedBrand(brand)}
            >
              {brand}
            </button>
          ))}
        </div>

        {/* Cars Grid */}
        {filteredProducts.length === 0 ? (
          <div className="p-5 text-center rounded-4" style={{ backgroundColor: "#131722" }}>
            <h4 className="text-secondary">No vehicles found matching your criteria.</h4>
          </div>
        ) : (
          <div className="row">
            {filteredProducts.map((car) => (
              <ProductCard
                key={car.id}
                product={car}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;