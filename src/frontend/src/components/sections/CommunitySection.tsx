import { useState } from "react";

interface Message {
  user: string;
  msg: string;
  time: string;
  color: string;
}

interface CommunitySectionProps {
  loggedIn: boolean;
  msgs: Message[];
  setMsgs: React.Dispatch<React.SetStateAction<Message[]>>;
}

export default function CommunitySection({
  loggedIn,
  msgs,
  setMsgs,
}: CommunitySectionProps) {
  const [newMsg, setNewMsg] = useState("");
  const sendMsg = () => {
    if (!newMsg.trim()) return;
    setMsgs((p) => [
      { user: "You", msg: newMsg, time: "now", color: "#F59E0B" },
      ...p,
    ]);
    setNewMsg("");
  };

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
        <h2 className="stitle">COMMUNITY HUB</h2>
        <p className="ssub">THE GOATED LOUNGE</p>
      </div>
      <div
        className="ggrid"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}
      >
        <div
          style={{
            background: "linear-gradient(135deg,#111122,#0a0a14)",
            border: "1px solid #1a1a30",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "16px 24px",
              borderBottom: "1px solid #1a1a30",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#10B981",
                  boxShadow: "0 0 8px #10B981",
                }}
              />
              <span
                style={{
                  fontFamily: "'Orbitron',sans-serif",
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "#fff",
                  letterSpacing: "2px",
                }}
              >
                LIVE CHAT
              </span>
            </div>
            <span
              style={{
                fontFamily: "'Press Start 2P',monospace",
                fontSize: "8px",
                color: "#10B981",
              }}
            >
              247 ONLINE
            </span>
          </div>
          <div
            style={{
              padding: "16px",
              height: "320px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {msgs.map((m, i) => (
              <div
                key={`${m.user}-${m.time}-${i}`}
                style={{
                  padding: "10px 14px",
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "4px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Rajdhani',sans-serif",
                      fontWeight: 700,
                      fontSize: "13px",
                      color: m.color,
                    }}
                  >
                    {m.user}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Press Start 2P',monospace",
                      fontSize: "7px",
                      color: "#444",
                    }}
                  >
                    {m.time}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: "'Rajdhani',sans-serif",
                    fontSize: "14px",
                    color: "#aaa",
                  }}
                >
                  {m.msg}
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              padding: "12px 16px",
              borderTop: "1px solid #1a1a30",
              display: "flex",
              gap: "8px",
            }}
          >
            <input
              value={newMsg}
              onChange={(e) => setNewMsg(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMsg()}
              placeholder={loggedIn ? "Type..." : "Connect to chat..."}
              disabled={!loggedIn}
              style={{
                flex: 1,
                padding: "10px 16px",
                borderRadius: "8px",
                background: "#0a0a14",
                border: "1px solid #1a1a30",
                color: "#fff",
                fontFamily: "'Rajdhani',sans-serif",
                fontSize: "14px",
                outline: "none",
              }}
            />
            <button
              type="button"
              onClick={sendMsg}
              disabled={!loggedIn}
              style={{
                padding: "10px 20px",
                borderRadius: "8px",
                border: "none",
                background: loggedIn ? "#F59E0B" : "#333",
                color: loggedIn ? "#000" : "#666",
                fontFamily: "'Rajdhani',sans-serif",
                fontWeight: 700,
                cursor: loggedIn ? "pointer" : "not-allowed",
              }}
            >
              SEND
            </button>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              background: "linear-gradient(135deg,#111122,#0a0a14)",
              border: "1px solid #1a1a30",
              borderRadius: "20px",
              padding: "24px",
            }}
          >
            <h3
              style={{
                fontFamily: "'Orbitron',sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                color: "#F59E0B",
                marginBottom: "16px",
              }}
            >
              🌐 CONNECT WITH US
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
              }}
            >
              {[
                { n: "Twitter / X", i: "𝕏", c: "#fff" },
                { n: "Discord", i: "💬", c: "#5865F2" },
                { n: "Telegram", i: "✈️", c: "#26A5E4" },
                { n: "YouTube", i: "▶️", c: "#FF0000" },
              ].map((s) => (
                <button
                  key={s.n}
                  type="button"
                  style={{
                    padding: "14px",
                    borderRadius: "10px",
                    border: `1px solid ${s.c}20`,
                    background: "#14141f",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <span style={{ fontSize: "18px" }}>{s.i}</span>
                  <span
                    style={{
                      fontFamily: "'Rajdhani',sans-serif",
                      fontWeight: 600,
                      fontSize: "14px",
                      color: s.c,
                    }}
                  >
                    {s.n}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div
            style={{
              background: "linear-gradient(135deg,#F59E0B08,#0a0a14)",
              border: "1px solid #F59E0B15",
              borderRadius: "20px",
              padding: "24px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: "'Press Start 2P',monospace",
                fontSize: "9px",
                color: "#F59E0B",
                letterSpacing: "2px",
                marginBottom: "16px",
              }}
            >
              COMMUNITY STATS
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              {[
                { l: "MEMBERS", v: "24.7K" },
                { l: "DAILY", v: "3.2K" },
                { l: "MSGS/DAY", v: "18K" },
              ].map((s) => (
                <div key={s.l}>
                  <div
                    style={{
                      fontFamily: "'Orbitron',sans-serif",
                      fontWeight: 700,
                      fontSize: "22px",
                      color: "#F59E0B",
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
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
