import { Play } from "lucide-react";

const CARD_BG = "#f4f1ec";
const TEXT = "#1b1a18";
const W = 580;
const H = 240;

export default function VideosCard() {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          width: "100%",
          borderRadius: "clamp(20px, 4vw, 38px)",
          padding: "clamp(16px, 3vw, 28px)",
          background: "linear-gradient(180deg,#f8f6f3,#ece8e3)",
          boxShadow:
            "-16px -16px 30px rgba(255,255,255,.9), 16px 16px 32px rgba(177,165,150,.18)",
        }}
      >
        <p
          style={{
            margin: 0,
            marginBottom: "clamp(12px, 3vw, 22px)",
            fontSize: "clamp(8px, 1.4vw, 17px)",
            letterSpacing: ".35em",
            color: "#2b2826",
            fontWeight: 500,
          }}
        >
          VIDEOS
        </p>

        <div
          style={{
            position: "relative",
            width: "100%",
            borderRadius: "clamp(24px, 4vw, 50px)",
            aspectRatio: `${W} / ${H}`,
            overflow: "hidden",
            background: CARD_BG,
            boxShadow: `
              inset 12px 12px 28px rgba(160,145,130,0.10),
              inset -12px -12px 28px rgba(255,255,255,0.75)
            `,
          }}
        >
          <svg
            viewBox={`0 0 ${W} ${H}`}
            width="100%"
            height="100%"
            style={{ position: "absolute", inset: 0, display: "block" }}
            aria-hidden
          >
            <defs>
              <filter
                id="videosRibbonShadow"
                x="-70%"
                y="-70%"
                width="240%"
                height="240%"
              >
                <feDropShadow
                  dx="0"
                  dy="8"
                  stdDeviation="12"
                  floodColor="#000000"
                  floodOpacity="0.12"
                />
                <feDropShadow
                  dx="0"
                  dy="-4"
                  stdDeviation="8"
                  floodColor="#ffffff"
                  floodOpacity="0.55"
                />
              </filter>
              <linearGradient
                id="leftRibbonGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#f8f6f3" />
                <stop offset="100%" stopColor="#ece8e3" />
              </linearGradient>
              <linearGradient
                id="ribbonGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#f8f6f3" />
                <stop offset="100%" stopColor="#ece8e3" />
              </linearGradient>
            </defs>

            {/* Right ribbon */}
            <path
              d="M 600 -10 C 550 -10, -130 0, 700 600"
              fill="none"
              stroke="url(#leftRibbonGradient)"
              strokeWidth="50"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#videosRibbonShadow)"
            />

            {/* Left ribbon */}
            <path
              d="M 0 95 C 40 90 120 70 232 160 C 250 165 275 200 302 215 C 304 228 550 350 350 220 C 300 175 276 156 232 132 C 154 68 70 50 0 60 Z"
              fill="none"
              stroke="url(#leftRibbonGradient)"
              strokeWidth="35"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#videosRibbonShadow)"
            />
          </svg>

          <button
            type="button"
            aria-label="Play video"
            style={{
              position: "absolute",
              left: "47%",
              top: "50%",
              width: "clamp(36px, 8vw, 58px)",
              height: "clamp(36px, 8vw, 58px)",
              border: "none",
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
              background: "#000000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <Play
              size="clamp(12px, 3vw, 20px)"
              fill="white"
              color="white"
              strokeWidth={0}
              style={{ marginLeft: 2 }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
