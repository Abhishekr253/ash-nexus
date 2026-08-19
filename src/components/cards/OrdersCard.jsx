import { ChevronRight } from "lucide-react";

export default function OrdersCard() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "clamp(16px, 3vw, 38px)",
        padding: "clamp(12px, 2.5vw, 28px)",
        background: "linear-gradient(145deg,#f4f1ec,#ebe7e2)",
        boxShadow:
          "-16px -16px 30px rgba(255,255,255,.9), 16px 16px 32px rgba(160,145,128,.16)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxSizing: "border-box",
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
        ORDERS
      </p>

      <div
        style={{
          width: "100%",
          borderRadius: 999,
          background: "linear-gradient(145deg,#ebe7e2,#f5f2ee)",
          boxShadow:
            "inset 6px 6px 16px rgba(160,145,128,.18), inset -6px -6px 16px rgba(255,255,255,.85)",
          padding: "clamp(10px, 2vw, 28px) clamp(10px, 2vw, 24px)",
          display: "flex",
          alignItems: "center",
          gap: "clamp(4px, 1vw, 14px)",
          boxSizing: "border-box",
          minWidth: 0,
        }}
      >
        {/* dot */}
        <div
          style={{
            width: "clamp(6px, 1vw, 11px)",
            height: "clamp(6px, 1vw, 11px)",
            borderRadius: "50%",
            background: "#1b1a18",
            flexShrink: 0,
          }}
        />

        {/* order number */}
        <span
          style={{
            flex: 1,
            fontSize: "clamp(7px, 1.2vw, 15px)",
            letterSpacing: ".12em",
            color: "#3c3936",
            fontWeight: 600,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            minWidth: 0,
          }}
        >
          ORDER #78291
        </span>

        {/* status */}
        <span
          style={{
            fontSize: "clamp(6px, 1vw, 13px)",
            letterSpacing: ".18em",
            color: "#78706a",
            fontWeight: 600,
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          DELIVERED
        </span>

        {/* button */}
        <button
          style={{
            width: "clamp(20px, 3vw, 42px)",
            height: "clamp(20px, 3vw, 42px)",
            borderRadius: "50%",
            border: "none",
            background: "#1b1a18",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            flexShrink: 0,
            padding: 0,
          }}
        >
          <ChevronRight
            color="white"
            size="clamp(8px, 1.4vw, 16px)"
            strokeWidth={3}
          />
        </button>
      </div>

      <div style={{ height: "clamp(4px, 0.8vw, 12px)" }} />
    </div>
  );
}