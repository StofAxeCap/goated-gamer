import { TRACKED_GAMES } from "../data/gameData";
import { getTier } from "../utils/tierUtils";

interface PlayerCardProps {
  player: {
    rank: number;
    name: string;
    avatar: string;
    gp: number;
    games: Record<
      string,
      { kd: number | null; wins: number | null; rank: string }
    >;
    totalWins: number;
    totalKills: number;
    hoursPlayed: number;
    tournamentsWon: number;
    linked: string[];
  };
  expanded: boolean;
  onToggle: () => void;
}

export default function PlayerCard({
  player,
  expanded,
  onToggle,
}: PlayerCardProps) {
  const tier = getTier(player.gp);
  const isHOF = player.gp >= 10000;
  return (
    <button
      type="button"
      onClick={onToggle}
      style={{
        background: expanded
          ? `linear-gradient(135deg, ${tier.color}12, #0d0d18, ${tier.color}05)`
          : "linear-gradient(135deg, #111122, #0a0a14)",
        border: `1px solid ${expanded ? `${tier.color}40` : "#1a1a2e"}`,
        borderRadius: "16px",
        padding: "20px",
        cursor: "pointer",
        transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
        transform: expanded ? "scale(1.01)" : "scale(1)",
        boxShadow: expanded ? `0 12px 40px ${tier.color}15` : "none",
        marginBottom: "8px",
        width: "100%",
        textAlign: "left",
        color: "inherit",
        fontFamily: "inherit",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        {/* Rank */}
        <div style={{ width: "44px", textAlign: "center" }}>
          {player.rank <= 3 ? (
            <span style={{ fontSize: "24px" }}>
              {["🥇", "🥈", "🥉"][player.rank - 1]}
            </span>
          ) : (
            <span
              style={{
                fontFamily: "'Orbitron',sans-serif",
                fontWeight: 700,
                fontSize: "18px",
                color: "#555",
              }}
            >
              #{player.rank}
            </span>
          )}
        </div>
        {/* Avatar + Name */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flex: 1,
            minWidth: 0,
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              background: `linear-gradient(135deg, ${tier.color}20, ${tier.color}08)`,
              border: `2px solid ${tier.color}40`,
              boxShadow: isHOF ? `0 0 16px ${tier.glow}` : "none",
            }}
          >
            {player.avatar}
          </div>
          <div style={{ minWidth: 0 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  fontFamily: "'Rajdhani',sans-serif",
                  fontWeight: 700,
                  fontSize: "18px",
                  color: "#fff",
                }}
              >
                {player.name}
              </span>
              {isHOF && (
                <span
                  style={{
                    fontFamily: "'Press Start 2P',monospace",
                    fontSize: "7px",
                    color: "#F59E0B",
                    background: "#F59E0B15",
                    padding: "2px 8px",
                    borderRadius: "4px",
                    border: "1px solid #F59E0B30",
                  }}
                >
                  🐐 HALL OF FAME
                </span>
              )}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                marginTop: "2px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Press Start 2P',monospace",
                  fontSize: "8px",
                  color: tier.color,
                }}
              >
                {tier.badge} {tier.name}
              </span>
              <span
                style={{
                  fontFamily: "'Rajdhani',sans-serif",
                  fontSize: "12px",
                  color: "#444",
                }}
              >
                ·
              </span>
              <span
                style={{
                  fontFamily: "'Rajdhani',sans-serif",
                  fontSize: "13px",
                  color: "#555",
                }}
              >
                {player.linked.length} games linked
              </span>
            </div>
          </div>
        </div>
        {/* Key Stats */}
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          {[
            { v: player.gp.toLocaleString(), l: "GOAT PTS", c: tier.color },
            { v: player.totalWins.toLocaleString(), l: "WINS", c: "#10B981" },
            { v: player.totalKills.toLocaleString(), l: "KILLS", c: "#EF4444" },
            { v: player.tournamentsWon, l: "TOURNEYS", c: "#8B5CF6" },
          ].map((s) => (
            <div key={s.l} style={{ textAlign: "center", minWidth: "60px" }}>
              <div
                style={{
                  fontFamily: "'Orbitron',sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  color: s.c,
                }}
              >
                {s.v}
              </div>
              <div
                style={{
                  fontFamily: "'Press Start 2P',monospace",
                  fontSize: "6px",
                  color: "#444",
                  marginTop: "2px",
                }}
              >
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Expanded Detail */}
      {expanded && (
        <div
          style={{
            marginTop: "20px",
            paddingTop: "20px",
            borderTop: "1px solid #ffffff08",
          }}
        >
          <div
            style={{
              fontFamily: "'Press Start 2P',monospace",
              fontSize: "8px",
              color: "#555",
              marginBottom: "12px",
              letterSpacing: "1.5px",
            }}
          >
            LINKED GAME STATS
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "10px",
            }}
          >
            {Object.entries(player.games).map(([game, stats]) => {
              const gInfo = TRACKED_GAMES.find((g) => g.name === game) || {
                icon: "🎮",
                color: "#888",
              };
              return (
                <div
                  key={game}
                  style={{
                    background: "rgba(0,0,0,0.3)",
                    borderRadius: "10px",
                    padding: "14px",
                    border: `1px solid ${gInfo.color}15`,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "8px",
                    }}
                  >
                    <span style={{ fontSize: "16px" }}>{gInfo.icon}</span>
                    <span
                      style={{
                        fontFamily: "'Rajdhani',sans-serif",
                        fontWeight: 700,
                        fontSize: "14px",
                        color: gInfo.color,
                      }}
                    >
                      {game}
                    </span>
                  </div>
                  <div
                    style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
                  >
                    {stats.kd && (
                      <div>
                        <span
                          style={{
                            fontFamily: "'Orbitron',sans-serif",
                            fontSize: "14px",
                            fontWeight: 700,
                            color: "#F59E0B",
                          }}
                        >
                          {stats.kd}
                        </span>
                        <span
                          style={{
                            fontFamily: "'Press Start 2P',monospace",
                            fontSize: "6px",
                            color: "#444",
                            marginLeft: "4px",
                          }}
                        >
                          K/D
                        </span>
                      </div>
                    )}
                    {stats.wins && (
                      <div>
                        <span
                          style={{
                            fontFamily: "'Orbitron',sans-serif",
                            fontSize: "14px",
                            fontWeight: 700,
                            color: "#10B981",
                          }}
                        >
                          {stats.wins}
                        </span>
                        <span
                          style={{
                            fontFamily: "'Press Start 2P',monospace",
                            fontSize: "6px",
                            color: "#444",
                            marginLeft: "4px",
                          }}
                        >
                          WINS
                        </span>
                      </div>
                    )}
                    <div
                      style={{
                        fontFamily: "'Rajdhani',sans-serif",
                        fontSize: "13px",
                        color: gInfo.color,
                        fontWeight: 600,
                      }}
                    >
                      {stats.rank}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "12px",
              flexWrap: "wrap",
            }}
          >
            {player.linked.map((g) => {
              const gi = TRACKED_GAMES.find((x) => x.name === g);
              return gi ? (
                <span
                  key={g}
                  style={{
                    fontFamily: "'Press Start 2P',monospace",
                    fontSize: "7px",
                    color: gi.color,
                    background: `${gi.color}10`,
                    padding: "4px 8px",
                    borderRadius: "6px",
                    border: `1px solid ${gi.color}20`,
                  }}
                >
                  {gi.icon} {g}
                </span>
              ) : null;
            })}
          </div>
        </div>
      )}
    </button>
  );
}
