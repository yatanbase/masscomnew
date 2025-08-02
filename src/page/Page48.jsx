import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../components/HomeButton";

// ✅ Import Images
import Image1 from "../asset/Our gallery/FILM MASTERCLASS/image (1).jpg";
import Image2 from "../asset/Our gallery/FILM MASTERCLASS/image (2).jpg";
import Image3 from "../asset/Our gallery/FILM MASTERCLASS/image (3).jpg";
import Image4 from "../asset/Our gallery/FILM MASTERCLASS/image (4).jpg";
import Image5 from "../asset/Our gallery/FILM MASTERCLASS/image (5).jpg";
import Image6 from "../asset/Our gallery/FILM MASTERCLASS/image (6).jpg";
import Image7 from "../asset/Our gallery/FILM MASTERCLASS/image (7).jpg";

const images = [
  { src: Image1, title: "Film Acting Masterclass – 1", date: "March 2025" },
  { src: Image2, title: "Film Acting Masterclass – 2", date: "March 2025" },
  { src: Image3, title: "Film Acting Masterclass – 3", date: "March 2025" },
  { src: Image4, title: "Film Acting Masterclass – 4", date: "March 2025" },
  { src: Image5, title: "Film Acting Masterclass – 5", date: "March 2025" },
  { src: Image6, title: "Film Acting Masterclass – 6", date: "March 2025" },
  { src: Image7, title: "Film Acting Masterclass – 7", date: "March 2025" },
];

const Page48 = () => {
  const [zoomIndex, setZoomIndex] = useState(null);

  const handleNext = () => setZoomIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () => setZoomIndex((prev) => (prev - 1 + images.length) % images.length);

  const styles = {
    container: { margin: "50px" },
    card: { background: "#fff", borderRadius: "12px", boxShadow: "0 6px 15px rgba(0,0,0,0.2)", marginTop: "30px" },

    // ✅ Grid Layout
    grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "15px" },

    imgBox: { position: "relative", borderRadius: "8px", overflow: "hidden", cursor: "zoom-in" },
    img: { width: "100%", height: "230px", objectFit: "cover", transition: "transform 0.3s ease" },

    overlay: { position: "absolute", bottom: 0, left: 0, right: 0, background: "rgba(0,0,0,0.6)", color: "#fff", textAlign: "center", padding: "8px", fontSize: "14px", opacity: 0, transition: "opacity 0.3s ease" },

    zoom: { position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(0,0,0,0.9)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 9999 },

    arrow: { position: "absolute", top: "50%", fontSize: "3rem", color: "#fff", cursor: "pointer", userSelect: "none", transform: "translateY(-50%)" },
    close: { position: "absolute", top: 20, right: 30, fontSize: "2.5rem", color: "#fff", cursor: "pointer" },
    caption: { color: "#fff", marginTop: "10px", fontSize: "18px", textAlign: "center" }
  };

  return (
    <div style={styles.container}>
      <Home />
      <div className="container">
        <div className="p-4 mx-auto text-center" style={styles.card}>
          <h2 className="mb-4 fw-bold text-primary">
            🎬 Film Acting Masterclass by AKU & BSFD & FC
          </h2>

          {/* ✅ Responsive Grid */}
          <div style={styles.grid}>
            {images.map((img, i) => (
              <div
                key={i}
                style={styles.imgBox}
                onMouseEnter={(e) => e.currentTarget.querySelector(".overlay").style.opacity = 1}
                onMouseLeave={(e) => e.currentTarget.querySelector(".overlay").style.opacity = 0}
                onClick={() => setZoomIndex(i)}
              >
                <img src={img.src} alt={img.title} style={styles.img} />
                <div className="overlay" style={styles.overlay}>{img.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Fullscreen Zoom */}
      {zoomIndex !== null && (
        <div style={styles.zoom}>
          <span style={styles.close} onClick={() => setZoomIndex(null)}>&times;</span>
          <span style={{ ...styles.arrow, left: "30px" }} onClick={handlePrev}>&#10094;</span>

          <img src={images[zoomIndex].src} alt="Zoomed" style={{ maxWidth: "90%", maxHeight: "80%", borderRadius: "8px" }} />

          <span style={{ ...styles.arrow, right: "30px" }} onClick={handleNext}>&#10095;</span>

          <div style={styles.caption}>
            {images[zoomIndex].title} – {images[zoomIndex].date}  
            <br /><small>Image {zoomIndex + 1} of {images.length}</small>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page48;
