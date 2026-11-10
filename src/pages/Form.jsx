import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form({ onAdd }) {
  const [brand, setBrand] = useState("Mercedes-Benz");
  const [name, setName] = useState("");
  const [type, setType] = useState("Rent");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const newCar = {
      id: Date.now(),
      brand,
      name,
      type,
      price: Number(price),
      image,
      video,
      images: [
        { label: "Front View", url: image },
        { label: "Interior", url: "" },
        { label: "Rear View", url: "" }
      ],
      description
    };

    onAdd(newCar);
    navigate("/card");
  }

  return (
    <div style={{ backgroundColor: "#0b0d13", minHeight: "100vh", color: "#fff" }} className="py-5">
      <div className="container" style={{ maxWidth: "600px" }}>
        <div
          className="p-4 p-md-5 rounded-4 shadow"
          style={{ backgroundColor: "#131722", border: "1px solid rgba(255, 255, 255, 0.08)" }}
        >
          <h2 className="fw-black mb-1">LIST A VEHICLE</h2>
          <p className="text-secondary mb-4 small">Add a new supercar to the showroom</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label text-secondary small fw-bold">BRAND</label>
              <select
                className="form-select border-0 text-white"
                style={{ backgroundColor: "#1c2230" }}
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              >
                <option value="Mercedes-Benz">Mercedes-Benz</option>
                <option value="BMW">BMW</option>
                <option value="Porsche">Porsche</option>
                <option value="Range Rover">Range Rover</option>
                <option value="McLaren">McLaren</option>
                <option value="Ferrari">Ferrari</option>
                <option value="Lamborghini">Lamborghini</option>
                <option value="Rolls-Royce">Rolls-Royce</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label text-secondary small fw-bold">MODEL NAME</label>
              <input
                type="text"
                className="form-control border-0 text-white"
                style={{ backgroundColor: "#1c2230" }}
                placeholder="e.g. S63 AMG or M4 Competition"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <label className="form-label text-secondary small fw-bold">DEAL TYPE</label>
                <select
                  className="form-select border-0 text-white"
                  style={{ backgroundColor: "#1c2230" }}
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="Rent">Rent (Daily rate)</option>
                  <option value="Buy">Buy (Total price)</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label text-secondary small fw-bold">PRICE ($)</label>
                <input
                  type="number"
                  className="form-control border-0 text-white"
                  style={{ backgroundColor: "#1c2230" }}
                  placeholder="e.g. 500"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  min="0"
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label text-secondary small fw-bold">IMAGE URL</label>
              <input
                type="text"
                className="form-control border-0 text-white"
                style={{ backgroundColor: "#1c2230" }}
                placeholder="https://..."
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
              />
            </div>

            {/* Video Input */}
            <div className="mb-3">
              <label className="form-label text-secondary small fw-bold">VIDEO URL (YouTube or MP4)</label>
              <input
                type="text"
                className="form-control border-0 text-white"
                style={{ backgroundColor: "#1c2230" }}
                placeholder="https://www.youtube.com/watch?v=... or .mp4"
                value={video}
                onChange={(e) => setVideo(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="form-label text-secondary small fw-bold">SPECS / DESCRIPTION</label>
              <textarea
                className="form-control border-0 text-white"
                style={{ backgroundColor: "#1c2230" }}
                rows="2"
                placeholder="e.g. 4.0L Twin-Turbo V8 - 603 HP"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="btn btn-warning w-100 py-3 fw-bold rounded-pill text-dark"
            >
              Confirm & Publish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;