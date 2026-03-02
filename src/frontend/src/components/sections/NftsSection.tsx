import { useState } from "react";
import { NFT_COLLECTIONS } from "../../data/gameData";

export default function NftsSection() {
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
        <h2 className="stitle">COLLECTIBLES</h2>
        <p className="ssub">NFTs & ORDINALS</p>
      </div>
      <div
        className="ggrid"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}
      >
        {NFT_COLLECTIONS.map((c) => (
          <NftCard key={c.name} c={c} />
        ))}
      </div>
    </section>
  );
}

function NftCard({ c }: { c: (typeof NFT_COLLECTIONS)[0] }) {
  const [h, setH] = useState(false);
  const a = c.type === "Ordinal" ? "#F7931A" : "#29ABE2";
  return (
    <a
      href={c.link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        textDecoration: "none",
        display: "block",
        background: h
          ? `linear-gradient(145deg,${a}12,#0d0d18)`
          : "linear-gradient(145deg,#111122,#0a0a14)",
        border: `1px solid ${h ? `${a}50` : "#1a1a30"}`,
        borderRadius: "20px",
        padding: "32px",
        transition: "all 0.4s",
        transform: h ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "24px",
        }}
      >
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "16px",
            background: `linear-gradient(135deg,${a}20,${a}05)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "32px",
            border: `1px solid ${a}30`,
          }}
        >
          {c.image}
        </div>
        <div>
          <h3
            style={{
              fontFamily: "'Rajdhani',sans-serif",
              fontWeight: 700,
              fontSize: "20px",
              color: "#fff",
              margin: 0,
            }}
          >
            {c.name}
          </h3>
          <span
            style={{
              fontFamily: "'Press Start 2P',monospace",
              fontSize: "8px",
              color: a,
            }}
          >
            {c.type.toUpperCase()}
          </span>
          <span
            style={{
              fontFamily: "'Rajdhani',sans-serif",
              fontSize: "13px",
              color: "#666",
              marginLeft: "8px",
            }}
          >
            {c.chain}
          </span>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "16px",
          background: "rgba(0,0,0,0.3)",
          borderRadius: "12px",
          padding: "16px",
        }}
      >
        {[
          { l: "Floor", v: c.floor },
          { l: "Items", v: c.items },
          { l: "Holders", v: c.holders },
        ].map((s) => (
          <div key={s.l} style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "'Rajdhani',sans-serif",
                fontWeight: 700,
                fontSize: "18px",
                color: a,
              }}
            >
              {s.v}
            </div>
            <div
              style={{
                fontFamily: "'Press Start 2P',monospace",
                fontSize: "7px",
                color: "#555",
                marginTop: "4px",
              }}
            >
              {s.l.toUpperCase()}
            </div>
          </div>
        ))}
      </div>
    </a>
  );
}
