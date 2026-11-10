import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function CarDetails({ products }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const car = products.find((item) => item.id === Number(id));

  if (!car) {
    return (
      <div style={{ backgroundColor: "#0b0d13", minHeight: "100vh", color: "#fff" }} className="py-5 text-center">
        <div className="container py-5">
          <h2>Vehicle Not Found</h2>
          <Link to="/card" className="btn btn-warning mt-3 rounded-pill px-4">
            Back to Showroom
          </Link>
        </div>
      </div>
    );
  }

  const validImages = (car.images || []).filter((img) => img.url && img.url.trim() !== "");
  
  const gallery = validImages.length > 0
    ? validImages
    : [{ label: "Main View", url: car.image || "" }];

  const [selectedImage, setSelectedImage] = useState(gallery[0]?.url || car.image || "");
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setSelectedImage(gallery[0]?.url || car.image || "");
    setActiveTab(0);
  }, [car]);

  const isRent = car.type === "Rent";

  const isYouTube = car.video && (car.video.includes("youtube.com") || car.video.includes("youtu.be"));
  const getEmbedUrl = (url) => {
    if (!url) return "";
    if (url.includes("watch?v=")) return url.replace("watch?v=", "embed/");
    if (url.includes("youtu.be/")) return url.replace("youtu.be/", "www.youtube.com/embed/");
    return url;
  };

  return (
    <div style={{ backgroundColor: "#0b0d13", minHeight: "100vh", color: "#fff" }} className="py-5">
      <div className="container">
        <button
          onClick={() => navigate(-1)}
          className="btn btn-outline-secondary rounded-pill px-4 mb-4"
        >
          ← Back to Fleet
        </button>

        <div className="row g-5">
          {/* LEFT: Media Screen (Normal full image) */}
          <div className="col-lg-7">
            {/* Main Screen: Normal uncropped view */}
            <div
              className="rounded-4 overflow-hidden shadow position-relative mb-3 d-flex align-items-center justify-content-center"
              style={{
                height: "480px",
                backgroundColor: "#080a0f",
                border: "1px solid rgba(255, 255, 255, 0.1)"
              }}
            >
              {activeTab === "video" ? (
                car.video ? (
                  isYouTube ? (
                    <iframe
                      src={getEmbedUrl(car.video)}
                      title={`${car.name} video`}
                      className="w-100 h-100 border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video
                      key={car.video}
                      controls
                      autoPlay
                      playsInline
                      className="w-100 h-100"
                      style={{ objectFit: "contain", backgroundColor: "#000" }}
                    >
                      <source src={car.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )
                ) : (
                  <div className="text-secondary text-center p-4">
                    <span className="fs-1">🎬</span>
                    <p className="mt-2 mb-0">No video added for this vehicle yet.</p>
                  </div>
                )
              ) : selectedImage ? (
                /* Normal full uncropped view */
                <img
                  src={selectedImage}
                  alt={car.name}
                  className="w-100 h-100"
                  style={{ 
                    objectFit: "contain", // Normal display: shows 100% of the picture
                    objectPosition: "center", // Normal center position
                    transition: "all 0.3s ease" 
                  }}
                />
              ) : (
                <div className="text-secondary text-center p-4">
                  <span className="fs-1">📸</span>
                  <p className="mt-2 mb-0">No image available.</p>
                </div>
              )}

              <span
                className="badge position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill fw-bold"
                style={{
                  backgroundColor: isRent ? "#06b6d4" : "#10b981",
                  color: "#000"
                }}
              >
                {isRent ? "FOR RENT" : "FOR SALE"}
              </span>
            </div>

            {/* Thumbnails below: Normal clean view */}
            <div className="d-flex gap-2">
              {gallery.map((imgObj, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedImage(imgObj.url);
                    setActiveTab(index);
                  }}
                  className="rounded-3 overflow-hidden text-center"
                  style={{
                    flex: 1,
                    cursor: "pointer",
                    border:
                      activeTab === index
                        ? "2px solid #f59e0b"
                        : "2px solid rgba(255, 255, 255, 0.1)",
                    opacity: activeTab === index ? 1 : 0.6,
                    transition: "all 0.2s ease"
                  }}
                >
                  <img
                    src={imgObj.url}
                    alt={imgObj.label}
                    style={{ 
                      height: "85px", 
                      width: "100%", 
                      objectFit: "cover", 
                      objectPosition: "center", // Normal center thumbnails
                      backgroundColor: "#1c2230" 
                    }}
                  />
                  <div
                    className="small py-1 text-uppercase fw-bold"
                    style={{
                      fontSize: "0.65rem",
                      backgroundColor: "#131722",
                      color: activeTab === index ? "#f59e0b" : "#888"
                    }}
                  >
                    {imgObj.label}
                  </div>
                </div>
              ))}

              {/* 🎬 Video Tab */}
              {car.video && (
                <div
                  onClick={() => setActiveTab("video")}
                  className="rounded-3 overflow-hidden text-center d-flex flex-column justify-content-center align-items-center"
                  style={{
                    flex: 1,
                    cursor: "pointer",
                    height: "112px",
                    border:
                      activeTab === "video"
                        ? "2px solid #f59e0b"
                        : "2px solid rgba(255, 255, 255, 0.1)",
                    backgroundColor: activeTab === "video" ? "#1e2433" : "#131722",
                    opacity: activeTab === "video" ? 1 : 0.7,
                    transition: "all 0.2s ease"
                  }}
                >
                  <span className="fs-4">🎬</span>
                  <span
                    className="small fw-bold text-uppercase mt-1"
                    style={{
                      fontSize: "0.65rem",
                      color: activeTab === "video" ? "#f59e0b" : "#aaa"
                    }}
                  >
                    Exhaust Video
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: Specs and Booking */}
          <div className="col-lg-5 d-flex flex-column justify-content-between">
            <div>
              <span
                className="text-uppercase fw-bold"
                style={{ color: "#f59e0b", letterSpacing: "1.5px", fontSize: "0.85rem" }}
              >
                {car.brand}
              </span>

              <h1 className="fw-black text-white mt-1 mb-3">{car.name}</h1>

              <h2 className="fw-bold mb-4" style={{ color: "#f59e0b" }}>
                ${car.price.toLocaleString()}
                {isRent && <span className="fs-5 text-secondary fw-normal"> / day</span>}
              </h2>

              <p className="text-secondary lead fs-6 mb-4">{car.description}</p>

              <div
                className="p-4 rounded-4 mb-4"
                style={{
                  backgroundColor: "#131722",
                  border: "1px solid rgba(255, 255, 255, 0.08)"
                }}
              >
                <h5 className="fw-bold text-white mb-3">Vehicle Specifications</h5>

                <div className="row g-3">
                  <div className="col-6">
                    <small className="text-secondary">Horsepower</small>
                    <div className="fw-bold fs-6 text-white">{car.hp || "600+ HP"}</div>
                  </div>
                  <div className="col-6">
                    <small className="text-secondary">0 - 60 mph</small>
                    <div className="fw-bold fs-6 text-white">{car.acceleration || "3.2 sec"}</div>
                  </div>
                  <div className="col-6">
                    <small className="text-secondary">Top Speed</small>
                    <div className="fw-bold fs-6 text-white">{car.topSpeed || "190+ mph"}</div>
                  </div>
                  <div className="col-6">
                    <small className="text-secondary">Transmission</small>
                    <div className="fw-bold fs-6 text-white">{car.transmission || "Automatic Shift"}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex gap-3">
              <button
                className="btn btn-warning w-100 py-3 fw-bold rounded-pill text-dark"
                onClick={() => alert(`Proceeding with reservation for ${car.name}`)}
              >
                {isRent ? "Book Rental Dates" : "Inquire to Purchase"}
              </button>

              <Link to="/card" className="btn btn-outline-light py-3 px-4 rounded-pill">
                Fleet
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;