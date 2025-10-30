import React from "react";

const Page112 = () => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
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
      textAlign: "center",
      transition: "all 0.3s ease-in-out",
      boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
    },
    cardTitle: {
      fontSize: "24px",
      marginBottom: "10px",
    },
    cardSubtitle: {
      fontSize: "16px",
      opacity: "0.9",
      marginBottom: "20px",
    },
    button: {
      backgroundColor: "#fff",
      color: "#333",
      padding: "10px 20px",
      borderRadius: "10px",
      textDecoration: "none",
      fontWeight: "bold",
      transition: "all 0.3s ease-in-out",
      display: "inline-block",
    },
  };

  const cards = [
    {
      title: "3 Month Training",
      subtitle: "Intensive short-term program to boost your skills quickly.",
      pdf: "/Doc/17.pdf", // ✅ Direct path from public/
      bg: "linear-gradient(135deg, #4e73df, #1d3bb8)",
    },
    {
      title: "5 Month Training",
      subtitle: "In-depth training with practical projects and mentorship.",
      pdf: "/Doc/16.pdf", // ✅ Direct path from public/
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
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h2 style={styles.cardTitle}>{card.title}</h2>
            <p style={styles.cardSubtitle}>{card.subtitle}</p>

            {/* ✅ Direct Open Button */}
            <a
              href={card.pdf}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.button}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#333";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#fff";
                e.currentTarget.style.color = "#333";
              }}
            >
              📄 View / Download PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page112;
