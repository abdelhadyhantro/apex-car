import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const isRent = product.type === "Rent";

  return (
    <div className="col-md-6 col-lg-3 mb-4">
      <div
        className="card h-100 rounded-4 overflow-hidden shadow-sm"
        style={{
          backgroundColor: "#131722",
          border: "1px solid rgba(255, 255, 255, 0.08)"
        }}
      >
        {/* Clickable Image -> opens details */}
        <Link
          to={`/car/${product.id}`}
          className="position-relative d-block overflow-hidden"
          style={{ height: "230px", backgroundColor: "#080a0f" }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-100 h-100"
            style={{ 
              objectFit: "cover", 
              objectPosition: "center 90%" // نزلناها لتحت أكتر حتى تاخد السيارة من تحت
            }}
          />

          <span
            className="badge position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill fw-bold"
            style={{
              backgroundColor: isRent ? "#06b6d4" : "#10b981",
              color: "#000",
              letterSpacing: "0.5px"
            }}
          >
            {isRent ? "RENT" : "BUY"}
          </span>
        </Link>

        {/* Card Body */}
        <div className="card-body d-flex flex-column p-4">
          <small
            className="text-uppercase fw-bold mb-1"
            style={{ color: "#f59e0b", letterSpacing: "1px", fontSize: "0.75rem" }}
          >
            {product.brand}
          </small>

          <Link
            to={`/car/${product.id}`}
            className="text-decoration-none text-white"
          >
            <h5 className="card-title fw-bold mb-2">
              {product.name}
            </h5>
          </Link>

          <p
            className="card-text text-secondary small mb-3"
            style={{ minHeight: "38px" }}
          >
            {product.description}
          </p>

          <div className="mt-auto pt-3 border-top border-secondary border-opacity-25">
            <div className="d-flex justify-content-between align-items-baseline mb-3">
              <span className="text-secondary small">Rate</span>
              <span className="fw-bold fs-5 text-white">
                ${product.price.toLocaleString()}
                {isRent && (
                  <small className="text-secondary fw-normal fs-6"> /day</small>
                )}
              </span>
            </div>

            <Link
              to={`/car/${product.id}`}
              className="btn btn-sm w-100 fw-bold rounded-pill text-center text-decoration-none py-2"
              style={{
                backgroundColor: isRent ? "#06b6d4" : "#10b981",
                color: "#000"
              }}
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;