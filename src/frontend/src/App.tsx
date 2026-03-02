import { useEffect, useState } from "react";
import ParticleField from "./components/ParticleField";
import CommunitySection from "./components/sections/CommunitySection";
import GamesSection from "./components/sections/GamesSection";
import LeaderboardsSection from "./components/sections/LeaderboardsSection";
import NftsSection from "./components/sections/NftsSection";
import TokenSection from "./components/sections/TokenSection";
import TournamentsSection from "./components/sections/TournamentsSection";
import { useInternetIdentity } from "./hooks/useInternetIdentity";

const INITIAL_MSGS = [
  {
    user: "GoatKing99",
    msg: "Who's grinding Night Stalker rn? 🔦",
    time: "2m",
    color: "#F59E0B",
  },
  {
    user: "CryptoGoat",
    msg: "Just minted a rare Ordinal LFG!! 🚀",
    time: "5m",
    color: "#10B981",
  },
  {
    user: "PixelQueen",
    msg: "Goat League tourney starts at 8pm EST",
    time: "8m",
    color: "#EC4899",
  },
  {
    user: "ChainRunner",
    msg: "ICP pumping today 📈",
    time: "12m",
    color: "#8B5CF6",
  },
];

export default function GoatedGamerHub() {
  const [sec, setSec] = useState("games");
  const [mobMenu, setMobMenu] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [msgs, setMsgs] = useState(INITIAL_MSGS);

  const { identity, login, clear, isLoggingIn, isInitializing } =
    useInternetIdentity();
  const loggedIn = !!identity;

  useEffect(() => {
    const fn = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navs = [
    { id: "games", l: "GAMES", i: "🎮" },
    { id: "leaderboards", l: "LEADERBOARDS", i: "🏆" },
    { id: "tournaments", l: "TOURNAMENTS", i: "⚔️" },
    { id: "nfts", l: "COLLECTIBLES", i: "💎" },
    { id: "token", l: "TOKEN", i: "🪙" },
    { id: "community", l: "COMMUNITY", i: "💬" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#07070e",
        color: "#fff",
        fontFamily: "'Rajdhani',sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Rajdhani:wght@400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&display=swap');
        *{margin:0;padding:0;box-sizing:border-box}::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:#0a0a14}::-webkit-scrollbar-thumb{background:#F59E0B30;border-radius:3px}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        @keyframes pulse-glow{0%,100%{box-shadow:0 0 20px #F59E0B20}50%{box-shadow:0 0 40px #F59E0B40}}
        @keyframes slide-up{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
        @keyframes scan-line{0%{top:-10%}100%{top:110%}}
        @keyframes text-flicker{0%,100%{opacity:1}93%{opacity:0.8}94%{opacity:1}96%{opacity:0.9}97%{opacity:1}}
        @keyframes legendary-glow{0%,100%{box-shadow:0 0 20px rgba(245,158,11,0.2),0 0 40px rgba(245,158,11,0.1)}50%{box-shadow:0 0 30px rgba(245,158,11,0.4),0 0 60px rgba(245,158,11,0.2)}}
        .nav-item{position:relative;cursor:pointer;padding:8px 12px;border-radius:8px;transition:all 0.3s;display:flex;align-items:center;gap:6px}
        .nav-item:hover{background:rgba(245,158,11,0.08)}.nav-item.active{background:rgba(245,158,11,0.12)}
        .nav-item.active::after{content:'';position:absolute;bottom:-1px;left:20%;right:20%;height:2px;background:#F59E0B;border-radius:1px}
        .hero-glow{position:absolute;width:500px;height:500px;border-radius:50%;filter:blur(120px);opacity:0.15;pointer-events:none}
        .stitle{font-family:'Orbitron',sans-serif;font-weight:800;font-size:36px;letter-spacing:2px;margin-bottom:8px;background:linear-gradient(135deg,#F59E0B,#F97316,#EAB308);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .ssub{font-family:'Press Start 2P',monospace;font-size:10px;color:#555;letter-spacing:3px;margin-bottom:48px}
        @media(max-width:768px){.stitle{font-size:24px!important}.desktop-nav{display:none!important}.mobile-menu-btn{display:flex!important}.ggrid{grid-template-columns:1fr!important}.hero-title{font-size:42px!important}.lb-stats{display:none!important}}
      `}</style>

      {/* NAV */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrollY > 50 ? "rgba(7,7,14,0.92)" : "transparent",
          backdropFilter: scrollY > 50 ? "blur(20px)" : "none",
          borderBottom:
            scrollY > 50 ? "1px solid #ffffff08" : "1px solid transparent",
          transition: "all 0.4s",
          padding: "12px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <button
            type="button"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              cursor: "pointer",
              background: "none",
              border: "none",
              padding: 0,
            }}
            onClick={() => setSec("games")}
          >
            <span style={{ fontSize: "28px" }}>🐐</span>
            <span
              style={{
                fontFamily: "'Orbitron',sans-serif",
                fontWeight: 800,
                fontSize: "18px",
                background: "linear-gradient(135deg,#F59E0B,#F97316)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "2px",
              }}
            >
              GOATED GAMER
            </span>
          </button>
          <div
            className="desktop-nav"
            style={{ display: "flex", alignItems: "center", gap: "2px" }}
          >
            {navs.map((n) => (
              <button
                key={n.id}
                type="button"
                className={`nav-item ${sec === n.id ? "active" : ""}`}
                onClick={() => {
                  setSec(n.id);
                }}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                }}
              >
                <span style={{ fontSize: "13px" }}>{n.i}</span>
                <span
                  style={{
                    fontFamily: "'Press Start 2P',monospace",
                    fontSize: "7px",
                    color: sec === n.id ? "#F59E0B" : "#666",
                    letterSpacing: "1px",
                  }}
                >
                  {n.l}
                </span>
              </button>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <button
              type="button"
              onClick={() => (loggedIn ? clear() : login())}
              disabled={isLoggingIn || isInitializing}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 20px",
                borderRadius: "10px",
                border: loggedIn ? "1px solid #10B98130" : "none",
                cursor:
                  isLoggingIn || isInitializing ? "not-allowed" : "pointer",
                opacity: isLoggingIn || isInitializing ? 0.7 : 1,
                background: loggedIn
                  ? "linear-gradient(135deg,#10B98120,#10B98108)"
                  : "linear-gradient(135deg,#F59E0B,#F97316)",
                color: loggedIn ? "#10B981" : "#000",
                fontFamily: "'Rajdhani',sans-serif",
                fontWeight: 700,
                fontSize: "13px",
                letterSpacing: "1.5px",
              }}
            >
              {isLoggingIn || isInitializing ? (
                "..."
              ) : loggedIn ? (
                <>
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#10B981",
                      boxShadow: "0 0 8px #10B981",
                    }}
                  />
                  CONNECTED
                </>
              ) : (
                "🔐 CONNECT"
              )}
            </button>
            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setMobMenu(!mobMenu)}
              style={{
                display: "none",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                background: "#14141f",
                border: "1px solid #1a1a2e",
                color: "#F59E0B",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              ☰
            </button>
          </div>
        </div>
        {mobMenu && (
          <div
            style={{
              background: "rgba(7,7,14,0.98)",
              borderTop: "1px solid #1a1a2e",
              padding: "16px",
              marginTop: "12px",
              borderRadius: "12px",
            }}
          >
            {navs.map((n) => (
              <button
                key={n.id}
                type="button"
                onClick={() => {
                  setSec(n.id);
                  setMobMenu(false);
                }}
                style={{
                  padding: "12px 16px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  background:
                    sec === n.id ? "rgba(245,158,11,0.1)" : "transparent",
                  marginBottom: "4px",
                  border: "none",
                  width: "100%",
                  textAlign: "left",
                }}
              >
                <span>{n.i}</span>
                <span
                  style={{
                    fontFamily: "'Press Start 2P',monospace",
                    fontSize: "10px",
                    color: sec === n.id ? "#F59E0B" : "#888",
                  }}
                >
                  {n.l}
                </span>
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <ParticleField />
        <div
          className="hero-glow"
          style={{ top: "10%", left: "20%", background: "#F59E0B" }}
        />
        <div
          className="hero-glow"
          style={{ bottom: "10%", right: "15%", background: "#F97316" }}
        />
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "2px",
            background:
              "linear-gradient(90deg,transparent,rgba(245,158,11,0.1),transparent)",
            animation: "scan-line 4s linear infinite",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 2, padding: "0 24px" }}>
          <div
            style={{
              fontFamily: "'Press Start 2P',monospace",
              fontSize: "12px",
              color: "#F59E0B",
              letterSpacing: "6px",
              marginBottom: "24px",
              animation: "text-flicker 4s infinite",
            }}
          >
            ⚡ WELCOME TO THE HUB ⚡
          </div>
          <h1
            className="hero-title"
            style={{
              fontFamily: "'Orbitron',sans-serif",
              fontWeight: 900,
              fontSize: "72px",
              lineHeight: 1.05,
              marginBottom: "24px",
              background:
                "linear-gradient(135deg,#F59E0B 0%,#ffffff 40%,#F97316 70%,#EAB308 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 40px rgba(245,158,11,0.2))",
            }}
          >
            GOATED
            <br />
            GAMER
          </h1>
          <p
            style={{
              fontFamily: "'Press Start 2P',monospace",
              fontSize: "12px",
              color: "#888",
              letterSpacing: "4px",
              lineHeight: 2,
              maxWidth: "600px",
              margin: "0 auto 40px",
            }}
          >
            PLAY · COMPETE · COLLECT · EARN · DOMINATE
          </p>
          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              type="button"
              onClick={() => setSec("games")}
              style={{
                padding: "16px 40px",
                borderRadius: "12px",
                border: "none",
                cursor: "pointer",
                background: "linear-gradient(135deg,#F59E0B,#F97316)",
                color: "#000",
                fontFamily: "'Rajdhani',sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                animation: "pulse-glow 3s infinite",
              }}
            >
              🎮 PLAY GAMES
            </button>
            <button
              type="button"
              onClick={() => setSec("leaderboards")}
              style={{
                padding: "16px 40px",
                borderRadius: "12px",
                cursor: "pointer",
                background: "transparent",
                border: "1px solid #F59E0B40",
                color: "#F59E0B",
                fontFamily: "'Rajdhani',sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              🏆 LEADERBOARDS
            </button>
            <button
              type="button"
              onClick={() => setSec("tournaments")}
              style={{
                padding: "16px 40px",
                borderRadius: "12px",
                cursor: "pointer",
                background: "transparent",
                border: "1px solid #ffffff15",
                color: "#888",
                fontFamily: "'Rajdhani',sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              ⚔️ TOURNAMENTS
            </button>
          </div>
          <div
            style={{
              marginTop: "60px",
              display: "flex",
              justifyContent: "center",
              gap: "40px",
              flexWrap: "wrap",
            }}
          >
            {[
              { l: "GAMES TRACKED", v: "10", c: "#F59E0B" },
              { l: "PLAYERS", v: "12K+", c: "#10B981" },
              { l: "TOURNAMENTS", v: "24", c: "#EF4444" },
              { l: "PRIZE POOL", v: "$50K+", c: "#8B5CF6" },
              { l: "CHAIN", v: "ICP", c: "#29ABE2" },
            ].map((s) => (
              <div key={s.l} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "'Orbitron',sans-serif",
                    fontWeight: 800,
                    fontSize: "28px",
                    color: s.c,
                    filter: `drop-shadow(0 0 10px ${s.c}40)`,
                  }}
                >
                  {s.v}
                </div>
                <div
                  style={{
                    fontFamily: "'Press Start 2P',monospace",
                    fontSize: "8px",
                    color: "#555",
                    letterSpacing: "2px",
                    marginTop: "6px",
                  }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            left: "50%",
            transform: "translateX(-50%)",
            animation: "float 2s ease-in-out infinite",
          }}
        >
          <div
            style={{
              fontFamily: "'Press Start 2P',monospace",
              fontSize: "8px",
              color: "#333",
              letterSpacing: "3px",
              textAlign: "center",
            }}
          >
            SCROLL DOWN
            <br />
            <span style={{ fontSize: "16px" }}>▾</span>
          </div>
        </div>
      </section>

      {/* SECTIONS */}
      {sec === "games" && <GamesSection />}
      {sec === "leaderboards" && <LeaderboardsSection setLoggedIn={() => {}} />}
      {sec === "tournaments" && <TournamentsSection />}
      {sec === "nfts" && <NftsSection />}
      {sec === "token" && <TokenSection />}
      {sec === "community" && (
        <CommunitySection loggedIn={loggedIn} msgs={msgs} setMsgs={setMsgs} />
      )}

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid #1a1a2e",
          padding: "40px 24px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "'Orbitron',sans-serif",
            fontWeight: 800,
            fontSize: "16px",
            background: "linear-gradient(135deg,#F59E0B,#F97316)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "12px",
            letterSpacing: "3px",
          }}
        >
          GOATED GAMER
        </div>
        <div
          style={{
            fontFamily: "'Press Start 2P',monospace",
            fontSize: "8px",
            color: "#333",
            letterSpacing: "2px",
          }}
        >
          BUILT ON INTERNET COMPUTER · POWERED BY THE COMMUNITY
        </div>
      </footer>
    </div>
  );
}
