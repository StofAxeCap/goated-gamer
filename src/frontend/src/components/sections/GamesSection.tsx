import { useState } from "react";
import { GAMES } from "../../data/gameData";

export default function GamesSection() {
  return (
    <section
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 24px",
        paddingTop: "40px",
        paddingBottom: "100px",
        animation: "slide-up 0.6s ease",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h2 className="stitle">GAME HUB</h2>
        <p className="ssub">SELECT YOUR BATTLEFIELD</p>
      </div>
      <div
        className="ggrid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
        }}
      >
        {GAMES.map((g) => (
          <GameCard key={g.id} game={g} />
        ))}
      </div>
    </section>
  );
}

function GameCard({ game: g }: { game: (typeof GAMES)[0] }) {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: h
          ? `linear-gradient(135deg,${g.color}15,${g.color}08,#0a0a0f)`
          : "linear-gradient(135deg,#14141f,#0a0a0f)",
        border: `1px solid ${h ? `${g.color}60` : "#1a1a2e"}`,
        borderRadius: "16px",
        padding: "28px",
        cursor: "pointer",
        transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
        transform: h ? "translateY(-6px)" : "translateY(0)",
        boxShadow: h
          ? `0 20px 60px ${g.color}20`
          : "0 4px 20px rgba(0,0,0,0.3)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {h && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: `linear-gradient(90deg,transparent,${g.color},transparent)`,
          }}
        />
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "16px",
        }}
      >
        <div style={{ fontSize: "40px" }}>{g.icon}</div>
        <span
          style={{
            background:
              g.status === "LIVE"
                ? "rgba(16,185,129,0.15)"
                : "rgba(245,158,11,0.15)",
            color: g.status === "LIVE" ? "#10B981" : "#F59E0B",
            padding: "4px 12px",
            borderRadius: "20px",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "1.5px",
            fontFamily: "'Press Start 2P',monospace",
            border: `1px solid ${g.status === "LIVE" ? "#10B98130" : "#F59E0B30"}`,
          }}
        >
          {g.status}
        </span>
      </div>
      <h3
        style={{
          fontFamily: "'Rajdhani',sans-serif",
          fontWeight: 700,
          fontSize: "22px",
          color: "#fff",
          marginBottom: "4px",
        }}
      >
        {g.title}
      </h3>
      <p
        style={{
          fontFamily: "'Press Start 2P',monospace",
          fontSize: "9px",
          color: g.color,
          marginBottom: "12px",
          letterSpacing: "1px",
        }}
      >
        {g.genre.toUpperCase()}
      </p>
      <p
        style={{
          fontFamily: "'Rajdhani',sans-serif",
          fontSize: "15px",
          color: "#8888aa",
          lineHeight: 1.5,
          marginBottom: "20px",
        }}
      >
        {g.desc}
      </p>
      <button
        type="button"
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "10px",
          border: "none",
          background: h ? g.color : `${g.color}20`,
          color: h ? "#000" : g.color,
          fontFamily: "'Rajdhani',sans-serif",
          fontWeight: 700,
          fontSize: "14px",
          letterSpacing: "2px",
          cursor: "pointer",
          transition: "all 0.3s",
          textTransform: "uppercase",
        }}
      >
        {g.status === "LIVE" ? "▶ PLAY NOW" : "🔔 NOTIFY ME"}
      </button>
    </div>
  );
}
