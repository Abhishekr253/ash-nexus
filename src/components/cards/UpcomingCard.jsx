import { ChevronRight } from "lucide-react";

const CARD_BG = "#F4F1EC";
const TEXT = "#1b1a18";
const MUTED = "#6d6660";

export default function UpcomingCard() {
  return (
    <div style={{ width: "100%"}}>
      <div
        style={{
          borderRadius: 38,
          background: "linear-gradient(180deg,#faf8f4,#efebe4)",
          padding: "clamp(18px, 4vw, 28px) clamp(18px, 4vw, 32px)",
          display: "flex",
          flexDirection: "column",
          boxShadow:
            "-18px -18px 35px rgba(255,255,255,.9),16px 16px 35px rgba(180,165,150,.18)",
        }}
      >
        <p
          style={{
            fontSize: "clamp(10px, 1.5vw, 12px)",
            letterSpacing: ".35em",
            color: TEXT,
            fontWeight: 700,
            marginBottom: "clamp(10px, 2vw, 14px)",
          }}
        >
          UPCOMING
        </p>

        {/* Time Panel */}
        <div
          style={{
            width: "100%",
            borderRadius: 90,
            background: CARD_BG,
            padding: "clamp(14px, 3vw, 20px) 0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            boxShadow:
              "inset 8px 8px 20px rgba(220,212,201,.7), inset -8px -8px 20px rgba(255,255,255,.9)",
          }}
        >
          {/* Left Dot */}
          <div
            style={{
              position: "absolute",
              left: "clamp(14px, 4vw, 28px)",
              top: "50%",
              transform: "translateY(-50%)",
              width: "clamp(7px, 1.5vw, 10px)",
              height: "clamp(7px, 1.5vw, 10px)",
              borderRadius: "50%",
              background: TEXT,
            }}
          />

          <p
            style={{
              fontSize: "clamp(9px, 1.8vw, 11px)",
              letterSpacing: ".30em",
              color: MUTED,
              fontWeight: 900,
              marginBottom: "clamp(2px, 0.5vw, 4px)",
            }}
          >
            TODAY
          </p>

          <div style={{ display: "flex", alignItems: "flex-end", gap: "clamp(1px, 0.5vw, 3px)" }}>
            <span
              style={{
                fontSize: "clamp(28px, 7vw, 52px)",
                fontWeight: 300,
                color: TEXT,
                lineHeight: 1,
              }}
            >
              10
            </span>
            <span
              style={{
                fontSize: "clamp(22px, 5.5vw, 40px)",
                fontWeight: 300,
                color: TEXT,
                lineHeight: 1,
              }}
            >
              :
            </span>
            <span
              style={{
                fontSize: "clamp(28px, 7vw, 52px)",
                fontWeight: 300,
                color: TEXT,
                lineHeight: 1,
              }}
            >
              00
            </span>
            <span
              style={{
                marginLeft: "clamp(4px, 1vw, 8px)",
                marginBottom: "clamp(4px, 1vw, 8px)",
                fontSize: "clamp(10px, 2vw, 13px)",
                fontWeight: 800,
                letterSpacing: ".18em",
                color: MUTED,
              }}
            >
              AM
            </span>
          </div>

          <p
            style={{
              marginTop: "clamp(3px, 1vw, 6px)",
              fontSize: "clamp(9px, 1.8vw, 11px)",
              letterSpacing: ".28em",
              color: MUTED,
              fontWeight: 900,
            }}
          >
            PRIVATE SESSION
          </p>
        </div>

        {/* View Schedule */}
        <div
          style={{
            marginTop: "clamp(12px, 2.5vw, 18px)",
            width: "100%",
            maxWidth: 340,
            height: "clamp(42px, 7vw, 52px)",
            alignSelf: "center",
            borderRadius: 999,
            background: CARD_BG,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "clamp(8px, 2vw, 14px)",
            boxShadow:
              "inset 6px 6px 14px rgba(220,212,201,.6), inset -6px -6px 14px rgba(255,255,255,.9)",
          }}
        >
          <button
            style={{
              width: "clamp(30px, 5vw, 38px)",
              height: "clamp(30px, 5vw, 38px)",
              borderRadius: "50%",
              border: "none",
              background: TEXT,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <ChevronRight
              color="white"
              size="clamp(12px, 2vw, 16px)"
              strokeWidth={3}
            />
          </button>

          <span
            style={{
              fontSize: "clamp(9px, 1.8vw, 11px)",
              letterSpacing: ".28em",
              color: MUTED,
              fontWeight: 700,
            }}
          >
            VIEW SCHEDULE
          </span>
        </div>
      </div>
    </div>
  );
}