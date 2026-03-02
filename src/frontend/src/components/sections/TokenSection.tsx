export default function TokenSection() {
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
        <h2 className="stitle">$GOATED TOKEN</h2>
        <p className="ssub">FUEL THE ECOSYSTEM</p>
      </div>
      <div
        style={{
          background: "linear-gradient(145deg,#14141f,#0d0d18)",
          border: "1px solid #F59E0B20",
          borderRadius: "24px",
          padding: "48px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "64px",
            marginBottom: "16px",
            animation: "float 3s ease-in-out infinite",
          }}
        >
          🪙
        </div>
        <div
          style={{
            fontFamily: "'Orbitron',sans-serif",
            fontWeight: 900,
            fontSize: "48px",
            color: "#F59E0B",
            marginBottom: "32px",
          }}
        >
          $GOATED
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          {[
            { l: "PRICE", v: "--" },
            { l: "MARKET CAP", v: "--" },
            { l: "HOLDERS", v: "--" },
            { l: "CHAIN", v: "ICP" },
          ].map((x) => (
            <div
              key={x.l}
              style={{
                background: "linear-gradient(135deg,#111122,#0a0a14)",
                border: "1px solid #1a1a30",
                borderRadius: "16px",
                padding: "24px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Press Start 2P',monospace",
                  fontSize: "7px",
                  color: "#555",
                  marginBottom: "8px",
                }}
              >
                {x.l}
              </div>
              <div
                style={{
                  fontFamily: "'Orbitron',sans-serif",
                  fontWeight: 700,
                  fontSize: "24px",
                  color: "#F59E0B",
                }}
              >
                {x.v}
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          style={{
            padding: "16px 48px",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",
            background: "linear-gradient(135deg,#F59E0B,#F97316)",
            color: "#000",
            fontFamily: "'Rajdhani',sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            letterSpacing: "3px",
          }}
        >
          VIEW TOKEN →
        </button>
      </div>
    </section>
  );
}
