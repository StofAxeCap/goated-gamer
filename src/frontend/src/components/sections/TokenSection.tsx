import { TOKEN_DATA } from "../../data/gameData";

export default function TokenSection() {
  const t = TOKEN_DATA;
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
          marginBottom: "24px",
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
          {t.symbol}
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
            { l: "PRICE", v: t.price },
            { l: "MARKET CAP", v: t.marketCap },
            { l: "HOLDERS", v: t.holders },
            { l: "CHAIN", v: t.chain },
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
        <div style={{ marginBottom: "24px" }}>
          <div
            style={{
              fontFamily: "'Press Start 2P',monospace",
              fontSize: "7px",
              color: "#555",
              marginBottom: "8px",
            }}
          >
            TOTAL SUPPLY
          </div>
          <div
            style={{
              fontFamily: "'Orbitron',sans-serif",
              fontWeight: 700,
              fontSize: "20px",
              color: "#888",
            }}
          >
            {t.totalSupply} {t.symbol}
          </div>
        </div>
        <a
          href={t.viewLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
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
        </a>
      </div>

      {/* Use Cases */}
      <div
        style={{
          background: "linear-gradient(135deg,#111122,#0a0a14)",
          border: "1px solid #1a1a30",
          borderRadius: "20px",
          padding: "32px",
        }}
      >
        <h3
          style={{
            fontFamily: "'Orbitron',sans-serif",
            fontWeight: 700,
            fontSize: "18px",
            color: "#F59E0B",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Token Use Cases
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "16px",
          }}
        >
          {t.useCases.map((item) => (
            <div
              key={item.title}
              style={{
                padding: "20px",
                borderRadius: "12px",
                background: "rgba(0,0,0,0.3)",
                border: "1px solid #ffffff06",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "24px", marginBottom: "8px" }}>
                {item.icon}
              </div>
              <div
                style={{
                  fontFamily: "'Rajdhani',sans-serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  color: "#fff",
                  marginBottom: "6px",
                }}
              >
                {item.title}
              </div>
              <div
                style={{
                  fontFamily: "'Rajdhani',sans-serif",
                  fontSize: "13px",
                  color: "#666",
                  lineHeight: 1.4,
                }}
              >
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
