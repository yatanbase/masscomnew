import React from "react";
<<<<<<< HEAD


const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://sjmc.ac.in';
const pdfPhd1 = baseUrl + "/Doc/17.pdf";
const pdfPhd2 = baseUrl + "/Doc/16.pdf";

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
      cursor: "pointer",
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
    },
  };

  const openPdf = (pdfUrl) => {
    if (pdfUrl) {
      window.open(pdfUrl, "_blank", "noopener,noreferrer");
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
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h2 style={styles.cardTitle}>{card.title}</h2>
            <p style={styles.cardSubtitle}>{card.subtitle}</p>
          </div>
        ))}
=======
import { useNavigate } from "react-router-dom";

const Page112 = () => {
  const navigate = useNavigate();

  // Example stats (replace with real data / props / API later)
  const stats = {
    totalBookings: 120,
    availableRooms: 35,
  };

  const styles = {
    container: {
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      fontSize: "28px",
      marginBottom: "20px",
      color: "#333",
    },
    cardGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "20px",
    },
    card: {
      borderRadius: "10px",
      color: "#fff",
      padding: "20px",
      cursor: "pointer",
      textAlign: "center",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      transition: "transform 0.2s",
    },
    cardTitle: {
      fontSize: "18px",
      marginBottom: "10px",
    },
    cardValue: {
      fontSize: "24px",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📊 Admin Dashboard</h1>
      <div style={styles.cardGrid}>
        <div
          style={{ ...styles.card, backgroundColor: "#4e73df" }}
          onClick={() => navigate("/admin/bookings")}
        >
          <h3 style={styles.cardTitle}>Total Bookings</h3>
          <p style={styles.cardValue}>{stats.totalBookings}</p>
        </div>

        <div
          style={{ ...styles.card, backgroundColor: "#1cc88a" }}
          onClick={() => navigate("/admin/rooms")}
        >
          <h3 style={styles.cardTitle}>Available Rooms</h3>
          <p style={styles.cardValue}>{stats.availableRooms}</p>
        </div>
>>>>>>> efab9b5e58169bb6b38ec75c9e2d08b7c94b73cd
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Page112;
=======
export default Page112;
>>>>>>> efab9b5e58169bb6b38ec75c9e2d08b7c94b73cd
