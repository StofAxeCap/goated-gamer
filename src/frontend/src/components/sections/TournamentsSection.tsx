import { useState } from "react";
import { TOURNAMENTS } from "../../data/gameData";

export default function TournamentsSection() {
  const [tFilter, setTFilter] = useState("ALL");
  const filteredT =
    tFilter === "ALL"
      ? TOURNAMENTS
      : TOURNAMENTS.filter((t) => t.status === tFilter);

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
      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <h2 className="stitle">TOURNAMENTS</h2>
        <p className="ssub">COMPETE · WIN · EARN PRIZES</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {["ALL", "REGISTERING", "LIVE", "UPCOMING"].map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setTFilter(f)}
              style={{
                padding: "8px 16px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                background: tFilter === f ? "#F59E0B15" : "transparent",
                color: tFilter === f ? "#F59E0B" : "#555",
                fontFamily: "'Press Start 2P',monospace",
                fontSize: "8px",
              }}
            >
              {f}
            </button>
          ))}
        </div>
        <button
          type="button"
          style={{
            padding: "10px 24px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            background: "linear-gradient(135deg,#F59E0B,#F97316)",
            color: "#000",
            fontFamily: "'Rajdhani',sans-serif",
            fontWeight: 700,
            fontSize: "14px",
            letterSpacing: "2px",
          }}
        >
          + CREATE TOURNAMENT
        </button>
      </div>
      <div
        className="ggrid"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}
      >
        {filteredT.map((t) => (
          <TournamentCard key={t.id} t={t} />
        ))}
      </div>
    </section>
  );
}

function TournamentCard({ t }: { t: (typeof TOURNAMENTS)[0] }) {
  const [h, setH] = useState(false);
  const sc: Record<string, { bg: string; text: string; l: string }> = {
    REGISTERING: { bg: "#10B98118", text: "#10B981", l: "🟢 OPEN" },
    LIVE: { bg: "#EF444418", text: "#EF4444", l: "🔴 LIVE" },
    UPCOMING: { bg: "#3B82F618", text: "#3B82F6", l: "🔵 SOON" },
    COMPLETED: { bg: "#6B728018", text: "#6B7280", l: "✅ DONE" },
  };
  const s = sc[t.status];
  const fill = (t.registered / t.maxPlayers) * 100;
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: h
          ? `linear-gradient(135deg,${t.color}10,#0d0d18)`
          : "linear-gradient(135deg,#111122,#0a0a14)",
        border: `1px solid ${h ? `${t.color}50` : "#1a1a30"}`,
        borderRadius: "20px",
        padding: "24px",
        cursor: "pointer",
        transition: "all 0.4s",
        transform: h ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "12px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "28px" }}>{t.gameIcon}</span>
          <div>
            <h3
              style={{
                fontFamily: "'Rajdhani',sans-serif",
                fontWeight: 700,
                fontSize: "18px",
                color: "#fff",
                margin: 0,
              }}
            >
              {t.title}
            </h3>
            <span
              style={{
                fontFamily: "'Press Start 2P',monospace",
                fontSize: "7px",
                color: "#888",
              }}
            >
              {t.game}
            </span>
          </div>
        </div>
        <span
          style={{
            background: s.bg,
            color: s.text,
            padding: "4px 10px",
            borderRadius: "16px",
            fontSize: "9px",
            fontWeight: 700,
            fontFamily: "'Press Start 2P',monospace",
            whiteSpace: "nowrap",
          }}
        >
          {s.l}
        </span>
      </div>
      <p
        style={{
          fontFamily: "'Rajdhani',sans-serif",
          fontSize: "14px",
          color: "#777",
          marginBottom: "16px",
        }}
      >
        {t.description}
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "8px",
          marginBottom: "16px",
        }}
      >
        {[
          { v: t.prizePool, l: "PRIZE", c: "#F59E0B" },
          {
            v: t.entryFee,
            l: "ENTRY",
            c: t.entryFee === "FREE" ? "#10B981" : "#F97316",
          },
          { v: t.startDate, l: "DATE", c: "#3B82F6" },
        ].map((x) => (
          <div key={x.l} style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "'Rajdhani',sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                color: x.c,
              }}
            >
              {x.v}
            </div>
            <div
              style={{
                fontFamily: "'Press Start 2P',monospace",
                fontSize: "6px",
                color: "#444",
              }}
            >
              {x.l}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          height: "5px",
          borderRadius: "3px",
          background: "#0a0a14",
          overflow: "hidden",
          border: "1px solid #1a1a2e",
          marginBottom: "12px",
        }}
      >
        <div
          style={{
            width: `${fill}%`,
            height: "100%",
            borderRadius: "3px",
            background: `linear-gradient(90deg,${t.color},${t.color}80)`,
          }}
        />
      </div>
      <button
        type="button"
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
          background: ["REGISTERING", "LIVE"].includes(t.status)
            ? `linear-gradient(135deg,${t.color},${t.color}cc)`
            : `${t.color}15`,
          color: ["REGISTERING", "LIVE"].includes(t.status) ? "#000" : t.color,
          fontFamily: "'Rajdhani',sans-serif",
          fontWeight: 700,
          fontSize: "13px",
          letterSpacing: "2px",
          textTransform: "uppercase",
        }}
      >
        {t.status === "REGISTERING"
          ? "⚡ REGISTER"
          : t.status === "LIVE"
            ? "📺 WATCH"
            : "🔔 REMIND ME"}
      </button>
    </div>
  );
}
