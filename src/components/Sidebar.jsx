import {
  Home,
  Zap,
  Calendar,
  PlayCircle,
  Gift,
  ShoppingBag,
} from "lucide-react";

const navItems = [
  { id: "home", label: "HOME", icon: Home },
  { id: "energy", label: "ENERGY REVIEW", icon: Zap },
  { id: "schedule", label: "SCHEDULE", icon: Calendar },
  { id: "videos", label: "VIDEOS", icon: PlayCircle },
  { id: "gifts", label: "GIFTS", icon: Gift },
  { id: "orders", label: "ORDERS", icon: ShoppingBag },
];

export default function Sidebar({
  activeItem,
  onNavigate,
  isOpen,
  onClose,
}) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed lg:relative
          top-0 left-0
          h-screen
          z-50
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
        style={{
          width: 300,
          background: "linear-gradient(180deg,#f8f6f3,#ece8e3)",
          borderRight: "1px solid rgba(0,0,0,.06)",
        }}
      >
        <div className="h-full flex flex-col">

          {/* Logo */}
          <div
            style={{
              paddingTop: 40,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src="/al-logo-black.png"
              alt="ASH Living"
              style={{
                width: 108,
                height: "auto",
              }}
            />

            <p
              style={{
                marginTop: 18,
                fontSize: 10,
                letterSpacing: ".35em",
                color: "#928a84",
              }}
            >
              ASH NEXUS
            </p>
          </div>

          {/* Navigation */}
          <nav
            style={{
              marginTop: 70,
              display: "flex",
              flexDirection: "column",
              gap: 34,
              paddingLeft: 28,
            }}
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = activeItem === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    onClose?.();
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      width: active ? 56 : 42,
                      height: 42,
                      borderRadius: active
                        ? "60% 40% 55% 45% / 50% 55% 45% 50%"
                        : "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: active ? "#f7f5f2" : "transparent",
                      boxShadow: active
                        ? `
                        -8px -8px 16px rgba(255,255,255,.95),
                         8px 8px 16px rgba(170,160,150,.22),
                         inset 1px 1px 2px rgba(255,255,255,.9)
                      `
                        : "none",
                      flexShrink: 0,
                    }}
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.8}
                      color="#1f1f1f"
                    />
                  </div>

                  <span
                    style={{
                      marginLeft: 18,
                      fontSize: 11,
                      fontWeight: active ? 600 : 500,
                      letterSpacing: ".30em",
                      color: "#1b1b1b",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </nav>

        </div>
      </aside>
    </>
  );
}