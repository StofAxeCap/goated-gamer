import { useEffect, useRef } from "react";

export default function ParticleField() {
  const c = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = c.current;
    if (!cv) return;
    const ctx = cv.getContext("2d")!;
    let id: number;
    const ps: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      s: number;
      o: number;
    }[] = [];
    const rs = () => {
      cv.width = cv.offsetWidth;
      cv.height = cv.offsetHeight;
    };
    rs();
    window.addEventListener("resize", rs);
    for (let i = 0; i < 50; i++)
      ps.push({
        x: Math.random() * cv.width,
        y: Math.random() * cv.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        s: Math.random() * 2 + 0.5,
        o: Math.random() * 0.5 + 0.1,
      });
    const d = () => {
      ctx.clearRect(0, 0, cv.width, cv.height);
      for (const p of ps) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = cv.width;
        if (p.x > cv.width) p.x = 0;
        if (p.y < 0) p.y = cv.height;
        if (p.y > cv.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.s, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245,158,11,${p.o})`;
        ctx.fill();
      }
      id = requestAnimationFrame(d);
    };
    d();
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", rs);
    };
  }, []);
  return (
    <canvas
      ref={c}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}
