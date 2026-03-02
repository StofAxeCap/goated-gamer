import { useState } from "react";
import {
  HALL_OF_FAME,
  LEADERBOARD_DATA,
  TIERS,
  TRACKED_GAMES,
} from "../../data/gameData";
import { useInternetIdentity } from "../../hooks/useInternetIdentity";
import { getTier } from "../../utils/tierUtils";
import PlayerCard from "../PlayerCard";

export default function LeaderboardsSection({
  setLoggedIn: _setLoggedIn,
}: { setLoggedIn: (v: boolean) => void }) {
  const { login } = useInternetIdentity();
  const [lbGame, setLbGame] = useState("All Games");
  const [lbTab, setLbTab] = useState("rankings");
  const [expandedPlayer, setExpandedPlayer] = useState<string | null>(null);

  const filteredLB =
    lbGame === "All Games"
      ? LEADERBOARD_DATA
      : LEADERBOARD_DATA.filter((p) => p.linked.includes(lbGame)).sort(
          (a, b) => {
            const aStats = a.games[lbGame];
            const bStats = b.games[lbGame];
            if (!aStats && !bStats) return 0;
            if (!aStats) return 1;
            if (!bStats) return -1;
            return (
              ((bStats.wins as number) || 0) - ((aStats.wins as number) || 0)
            );
          },
        );

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
        <h2 className="stitle">LEADERBOARDS</h2>
        <p className="ssub">THE GREATEST GOATS OF ALL TIME</p>
      </div>

      {/* Sub-tabs */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "4px",
          marginBottom: "32px",
        }}
      >
        {[
          { id: "rankings", l: "🏆 RANKINGS" },
          { id: "halloffame", l: "🐐 HALL OF FAME" },
          { id: "tiers", l: "⭐ TIER SYSTEM" },
        ].map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setLbTab(t.id)}
            style={{
              padding: "10px 24px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              background: lbTab === t.id ? "#F59E0B15" : "transparent",
              color: lbTab === t.id ? "#F59E0B" : "#555",
              fontFamily: "'Press Start 2P',monospace",
              fontSize: "9px",
              letterSpacing: "1px",
              transition: "all 0.3s",
              borderBottom:
                lbTab === t.id ? "2px solid #F59E0B" : "2px solid transparent",
            }}
          >
            {t.l}
          </button>
        ))}
      </div>

      {lbTab === "rankings" && (
        <>
          <div
            style={{
              display: "flex",
              gap: "6px",
              marginBottom: "24px",
              overflowX: "auto",
              paddingBottom: "8px",
            }}
          >
            {TRACKED_GAMES.map((g) => (
              <button
                key={g.name}
                type="button"
                onClick={() => setLbGame(g.name)}
                style={{
                  padding: "8px 16px",
                  borderRadius: "10px",
                  border: `1px solid ${lbGame === g.name ? `${g.color}50` : "#1a1a2e"}`,
                  cursor: "pointer",
                  background: lbGame === g.name ? `${g.color}15` : "#0a0a14",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  whiteSpace: "nowrap",
                  transition: "all 0.3s",
                }}
              >
                <span style={{ fontSize: "14px" }}>{g.icon}</span>
                <span
                  style={{
                    fontFamily: "'Rajdhani',sans-serif",
                    fontWeight: 600,
                    fontSize: "13px",
                    color: lbGame === g.name ? g.color : "#666",
                  }}
                >
                  {g.name}
                </span>
              </button>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "12px 20px",
              marginBottom: "4px",
            }}
          >
            <div style={{ width: "44px" }} />
            <div style={{ flex: 1, marginLeft: "76px" }}>
              <span
                style={{
                  fontFamily: "'Press Start 2P',monospace",
                  fontSize: "7px",
                  color: "#444",
                  letterSpacing: "1.5px",
                }}
              >
                PLAYER
              </span>
            </div>
            <div className="lb-stats" style={{ display: "flex", gap: "24px" }}>
              {["GOAT PTS", "WINS", "KILLS", "TOURNEYS"].map((h) => (
                <div key={h} style={{ width: "60px", textAlign: "center" }}>
                  <span
                    style={{
                      fontFamily: "'Press Start 2P',monospace",
                      fontSize: "6px",
                      color: "#444",
                      letterSpacing: "1px",
                    }}
                  >
                    {h}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {filteredLB.map((p, i) => (
            <PlayerCard
              key={p.name}
              player={{
                ...p,
                rank: i + 1,
                games: p.games as unknown as Record<
                  string,
                  { kd: number | null; wins: number | null; rank: string }
                >,
              }}
              expanded={expandedPlayer === p.name}
              onToggle={() =>
                setExpandedPlayer(expandedPlayer === p.name ? null : p.name)
              }
            />
          ))}
          <div
            style={{
              marginTop: "32px",
              background: "linear-gradient(135deg,#111122,#0a0a14)",
              border: "1px solid #1a1a30",
              borderRadius: "16px",
              padding: "24px",
            }}
          >
            <div
              style={{
                fontFamily: "'Press Start 2P',monospace",
                fontSize: "8px",
                color: "#555",
                marginBottom: "16px",
                letterSpacing: "2px",
                textAlign: "center",
              }}
            >
              📡 FREE API DATA SOURCES
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                gap: "10px",
              }}
            >
              {TRACKED_GAMES.filter((g) => g.api).map((g) => (
                <div
                  key={g.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px",
                    borderRadius: "8px",
                    background: "rgba(0,0,0,0.3)",
                  }}
                >
                  <span style={{ fontSize: "16px" }}>{g.icon}</span>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Rajdhani',sans-serif",
                        fontWeight: 600,
                        fontSize: "13px",
                        color: "#ddd",
                      }}
                    >
                      {g.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Rajdhani',sans-serif",
                        fontSize: "11px",
                        color: g.api!.startsWith("NATIVE")
                          ? "#F59E0B"
                          : "#10B981",
                      }}
                    >
                      {g.api}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {lbTab === "halloffame" && (
        <div>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div style={{ fontSize: "64px", marginBottom: "12px" }}>🐐</div>
            <p
              style={{
                fontFamily: "'Rajdhani',sans-serif",
                fontSize: "18px",
                color: "#888",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              The Hall of Fame honors players who reach{" "}
              <strong style={{ color: "#F59E0B" }}>
                Legendary tier (10,000+ Goat Points)
              </strong>{" "}
              through exceptional performance across multiple games. These are
              the greatest competitors in Goated Gamer history.
            </p>
          </div>
          {HALL_OF_FAME.map((player, i) => (
            <div
              key={player.name}
              style={{
                background:
                  "linear-gradient(135deg, rgba(245,158,11,0.06), #0d0d18, rgba(245,158,11,0.03))",
                border: "1px solid #F59E0B25",
                borderRadius: "24px",
                padding: "36px",
                marginBottom: "20px",
                position: "relative",
                overflow: "hidden",
                animation: "legendary-glow 4s ease-in-out infinite",
                animationDelay: `${i * 0.5}s`,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-60px",
                  right: "-60px",
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(245,158,11,0.06), transparent 70%)",
                }}
              />
              <div
                style={{
                  display: "flex",
                  gap: "24px",
                  alignItems: "flex-start",
                  position: "relative",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "40px",
                    background: "linear-gradient(135deg,#F59E0B20,#F59E0B08)",
                    border: "2px solid #F59E0B40",
                    boxShadow: "0 0 30px rgba(245,158,11,0.2)",
                  }}
                >
                  {player.avatar}
                </div>
                <div style={{ flex: 1, minWidth: "250px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "4px",
                      flexWrap: "wrap",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "'Orbitron',sans-serif",
                        fontWeight: 800,
                        fontSize: "24px",
                        color: "#fff",
                        margin: 0,
                      }}
                    >
                      {player.name}
                    </h3>
                    <span
                      style={{
                        fontFamily: "'Press Start 2P',monospace",
                        fontSize: "8px",
                        color: "#F59E0B",
                        background: "#F59E0B15",
                        padding: "4px 10px",
                        borderRadius: "6px",
                        border: "1px solid #F59E0B30",
                      }}
                    >
                      🐐 LEGENDARY
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: "'Rajdhani',sans-serif",
                      fontWeight: 600,
                      fontSize: "16px",
                      color: "#F59E0B",
                      marginBottom: "8px",
                      fontStyle: "italic",
                    }}
                  >
                    "{player.title}"
                  </div>
                  <p
                    style={{
                      fontFamily: "'Rajdhani',sans-serif",
                      fontSize: "15px",
                      color: "#888",
                      lineHeight: 1.6,
                      marginBottom: "12px",
                    }}
                  >
                    {player.achievement}
                  </p>
                  <div
                    style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
                  >
                    <div
                      style={{
                        background: "rgba(0,0,0,0.3)",
                        borderRadius: "8px",
                        padding: "8px 14px",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Orbitron',sans-serif",
                          fontWeight: 700,
                          fontSize: "18px",
                          color: "#F59E0B",
                        }}
                      >
                        {player.gp.toLocaleString()}
                      </span>
                      <span
                        style={{
                          fontFamily: "'Press Start 2P',monospace",
                          fontSize: "6px",
                          color: "#555",
                          marginLeft: "6px",
                        }}
                      >
                        GOAT PTS
                      </span>
                    </div>
                    <div
                      style={{
                        background: "rgba(0,0,0,0.3)",
                        borderRadius: "8px",
                        padding: "8px 14px",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Rajdhani',sans-serif",
                          fontWeight: 600,
                          fontSize: "14px",
                          color: "#888",
                        }}
                      >
                        Inducted: {player.inducted}
                      </span>
                    </div>
                    <div
                      style={{
                        background: "rgba(245,158,11,0.08)",
                        borderRadius: "8px",
                        padding: "8px 14px",
                        border: "1px solid #F59E0B15",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Rajdhani',sans-serif",
                          fontWeight: 600,
                          fontSize: "14px",
                          color: "#F59E0B",
                        }}
                      >
                        🏅 {player.signature}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div
            style={{
              textAlign: "center",
              marginTop: "40px",
              padding: "32px",
              background: "linear-gradient(135deg,#111122,#0a0a14)",
              borderRadius: "20px",
              border: "1px solid #1a1a30",
            }}
          >
            <div
              style={{
                fontFamily: "'Orbitron',sans-serif",
                fontWeight: 700,
                fontSize: "18px",
                color: "#fff",
                marginBottom: "8px",
              }}
            >
              Want your name in the Hall of Fame?
            </div>
            <p
              style={{
                fontFamily: "'Rajdhani',sans-serif",
                fontSize: "15px",
                color: "#777",
                maxWidth: "500px",
                margin: "0 auto 20px",
                lineHeight: 1.5,
              }}
            >
              Reach 10,000 Goat Points by competing across games, winning
              tournaments, and climbing leaderboards. Link your game accounts to
              start earning.
            </p>
            <button
              type="button"
              onClick={() => login()}
              style={{
                padding: "14px 36px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                background: "linear-gradient(135deg,#F59E0B,#F97316)",
                color: "#000",
                fontFamily: "'Rajdhani',sans-serif",
                fontWeight: 700,
                fontSize: "15px",
                letterSpacing: "2px",
              }}
            >
              🔐 CONNECT & START EARNING
            </button>
          </div>
        </div>
      )}

      {lbTab === "tiers" && (
        <div>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <p
              style={{
                fontFamily: "'Rajdhani',sans-serif",
                fontSize: "18px",
                color: "#888",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Goat Points (GP) are earned across all linked games. Wins, kills,
              tournament placements, and community contributions all count.
              Reach Legendary to enter the Hall of Fame.
            </p>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                style={{
                  background: `linear-gradient(135deg, ${tier.color}08, #0d0d18)`,
                  border: `1px solid ${tier.color}25`,
                  borderRadius: "16px",
                  padding: "24px",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  boxShadow:
                    tier.name === "LEGENDARY"
                      ? `0 0 30px ${tier.glow}`
                      : "none",
                }}
              >
                <div
                  style={{
                    fontSize: "36px",
                    width: "50px",
                    textAlign: "center",
                  }}
                >
                  {tier.badge}
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "4px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Orbitron',sans-serif",
                        fontWeight: 800,
                        fontSize: "20px",
                        color: tier.color,
                      }}
                    >
                      {tier.name}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Press Start 2P',monospace",
                        fontSize: "8px",
                        color: "#555",
                      }}
                    >
                      {tier.min.toLocaleString()}+ GP
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: "'Rajdhani',sans-serif",
                      fontSize: "15px",
                      color: "#777",
                    }}
                  >
                    {tier.desc}
                  </p>
                </div>
                <div style={{ textAlign: "center", minWidth: "80px" }}>
                  <div
                    style={{
                      fontFamily: "'Orbitron',sans-serif",
                      fontWeight: 700,
                      fontSize: "20px",
                      color: tier.color,
                    }}
                  >
                    {
                      LEADERBOARD_DATA.filter(
                        (p) => getTier(p.gp).name === tier.name,
                      ).length
                    }
                  </div>
                  <div
                    style={{
                      fontFamily: "'Press Start 2P',monospace",
                      fontSize: "7px",
                      color: "#444",
                    }}
                  >
                    PLAYERS
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: "32px",
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
              How to Earn Goat Points
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "16px",
              }}
            >
              {[
                {
                  icon: "🎮",
                  title: "Game Wins",
                  pts: "+10-50 GP",
                  desc: "Win matches across any linked game",
                },
                {
                  icon: "🏆",
                  title: "Tournament Wins",
                  pts: "+200-1000 GP",
                  desc: "Place in Goated Gamer tournaments",
                },
                {
                  icon: "📈",
                  title: "Rank Ups",
                  pts: "+50-500 GP",
                  desc: "Climb ranks in external games",
                },
                {
                  icon: "🔥",
                  title: "Kill Streaks",
                  pts: "+5-25 GP",
                  desc: "Exceptional in-game performances",
                },
                {
                  icon: "📅",
                  title: "Daily Play",
                  pts: "+5 GP/day",
                  desc: "Play any linked game daily",
                },
                {
                  icon: "🗳️",
                  title: "Community",
                  pts: "+10-50 GP",
                  desc: "DAO votes, events, contributions",
                },
              ].map((item) => (
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
                      marginBottom: "4px",
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Orbitron',sans-serif",
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#F59E0B",
                      marginBottom: "6px",
                    }}
                  >
                    {item.pts}
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
        </div>
      )}
    </section>
  );
}
