export default function EnergyCard() {
  return (
    <div
      style={{
        borderRadius: "clamp(24px, 5vw, 42px)",
        padding: "clamp(18px, 4vw, 32px)",
        background: "linear-gradient(145deg,#f4f1ec,#ebe7e2)",
        boxShadow:
          "-14px -14px 30px rgba(255,255,255,.9),14px 14px 28px rgba(160,145,128,.16)",
        display: "flex",
        flexDirection: "column",
        gap: "clamp(12px, 3vw, 22px)",
      }}
    >
      <p
        style={{
          fontSize: "clamp(8px, 1.4vw, 17px)",
          letterSpacing: ".35em",
          color: "#2b2826",
          fontWeight: 500,
          margin: 0,
        }}
      >
        ENERGY REVIEW
      </p>

      <div
        style={{
          borderRadius: "clamp(16px, 3vw, 28px)",
          background: "linear-gradient(145deg,#ebe7e2,#f5f2ee)",
          boxShadow:
            "inset 6px 6px 16px rgba(160,145,128,.18), inset -6px -6px 16px rgba(255,255,255,.85)",
          padding: "clamp(12px, 2.5vw, 20px)",
        }}
      >
        <svg viewBox="0 0 460 120" style={{ width: "100%", display: "block" }}>
          <path
            d="M20 70 C60 45 95 45 130 72 C170 100 210 28 250 55 C290 82 330 30 370 60 C395 80 420 52 440 38"
            fill="none"
            stroke="#272523"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          {[
            [20, 70],
            [130, 72],
            [250, 55],
            [370, 60],
            [440, 38],
          ].map(([x, y], i) => (
            <g key={i}>
              <line
                x1={x}
                y1={0}
                x2={x}
                y2={120}
                stroke="#d8d3cc"
                strokeWidth="0.8"
              />
              {i === 4 ? (
                <>
                  <circle
                    cx={x}
                    cy={y}
                    r={11}
                    fill="#ffffff"
                    stroke="#e5dfd7"
                    strokeWidth="1.5"
                  />
                  <circle cx={x} cy={y} r={8} fill="#1d1c1a" />
                </>
              ) : (
                <circle cx={x} cy={y} r={3.5} fill="#1d1c1a" />
              )}
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
