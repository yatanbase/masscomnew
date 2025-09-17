import React from "react";
import pdfPhd from "../asset/fg/phd_syllabus.pdf"; // एक ही PDF import की गई है

const Page112 = () => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      padding: "20px",
      background: "linear-gradient(135deg, #f0f4ff, #e8faff)",
    },
    cardGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "40px",
      maxWidth: "800px",
      width: "100%",
    },
    card: {
      borderRadius: "20px",
      color: "#fff",
      padding: "40px 20px",
      cursor: "pointer",
      textAlign: "center",
      boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
      transition: "all 0.3s ease-in-out",
      fontSize: "22px",
      fontWeight: "bold",
      height: "350px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    cardTitle: {
      fontSize: "28px",
      marginBottom: "15px",
    },
    cardSubtitle: {
      fontSize: "16px",
      fontWeight: "normal",
      opacity: "0.9",
    },
    cardHover: {
      transform: "translateY(-10px) scale(1.03)",
      boxShadow: "0 12px 25px rgba(0,0,0,0.25)",
      filter: "brightness(1.1)",
    },
  };

  const handleMouseEnter = (e) => {
    Object.assign(e.currentTarget.style, styles.cardHover);
  };

  const handleMouseLeave = (e) => {
    Object.assign(e.currentTarget.style, {
      transform: "scale(1)",
      boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
      filter: "brightness(1)",
    });
  };

  const openPdf = (pdfUrl) => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <div style={styles.container}>
      <div style={styles.cardGrid}>
        {/* पहला कार्ड */}
        <div
          style={{
            ...styles.card,
            background: "linear-gradient(135deg, #4e73df, #1d3bb8)",
          }}
          onClick={() => openPdf(pdfPhd)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h2 style={styles.cardTitle}>3 Month Training</h2>
          <p style={styles.cardSubtitle}>
            Intensive short-term program to boost your skills quickly.
          </p>
        </div>

        {/* दूसरा कार्ड */}
        <div
          style={{
            ...styles.card,
            background: "linear-gradient(135deg, #1cc88a, #0e8058)",
          }}
          onClick={() => openPdf(pdfPhd)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h2 style={styles.cardTitle}>5 Month Training</h2>
          <p style={styles.cardSubtitle}>
            In-depth training with practical projects and mentorship.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page112;
