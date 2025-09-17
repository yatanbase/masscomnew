import React from "react";

// सही file names के साथ import
import pdfPhd1 from "../asset/fg/phd_syllabus1.pdf"; 
import pdfPhd2 from "../asset/fg/ma-sly.pdf"; 

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
      transition: "all 0.3s ease-in-out",
      transform: "scale(1)",
      boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
    },
    cardHover: {
      transform: "scale(1.05)",
      boxShadow: "0 12px 25px rgba(0,0,0,0.2)",
      filter: "brightness(1.1)",
    },
    cardTitle: {
      fontSize: "24px",
      marginBottom: "10px",
    },
    cardSubtitle: {
      fontSize: "16px",
      opacity: "0.9",
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
    if (pdfUrl) {
      window.open(pdfUrl, "_blank");
    } else {
      alert("PDF not found!");
    }
  };

  const cards = [
    {
      title: "3 Month Training",
      subtitle: "Intensive short-term program to boost your skills quickly.",
      pdf: pdfPhd1,
      bg: "linear-gradient(135deg, #4e73df, #1d3bb8)",
    },
    {
      title: "5 Month Training",
      subtitle: "In-depth training with practical projects and mentorship.",
      pdf: pdfPhd2,
      bg: "linear-gradient(135deg, #1cc88a, #0e8058)",
    },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.cardGrid}>
        {cards.map((card, index) => (
          <div
            key={index}
            style={{ ...styles.card, background: card.bg }}
            onClick={() => openPdf(card.pdf)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <h2 style={styles.cardTitle}>{card.title}</h2>
            <p style={styles.cardSubtitle}>{card.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page112;
