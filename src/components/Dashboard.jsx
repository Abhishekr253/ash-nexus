import { useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "./Sidebar";
import UpcomingCard from "./cards/UpcomingCard";
import VideosCard from "./cards/VideosCard";
import EnergyCard from "./cards/EnergyCard";
import OrdersCard from "./cards/OrdersCard";

export default function Dashboard() {
  const [activeItem, setActiveItem] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className="min-h-screen flex overflow-hidden"
      style={{
        background: "linear-gradient(180deg,#f8f6f3,#ece8e3)",
      }}
    >
      <Sidebar
        activeItem={activeItem}
        onNavigate={setActiveItem}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex-1 overflow-hidden">
        {/* Desktop */}
        <div
          className="hidden lg:flex"
          style={{ width: "100%", justifyContent: "center" }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 1180,
              paddingLeft: 32,
              paddingRight: 32,
              paddingTop: 56,
              paddingBottom: 56,
              boxSizing: "border-box",
            }}
          >
            {/* Header */}
            <header>
              <h1
                style={{
                  fontSize: "48px",
                  fontWeight: 500,
                  letterSpacing: ".12em",
                  color: "#2b2826",
                  lineHeight: 1.1,
                  margin: 0,
                  textTransform: "uppercase",
                }}
              >
                WELCOME HOME, ASH
              </h1>

              <p
                style={{
                  marginTop: 18,
                  marginBottom: 0,
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: ".3em",
                  color: "#7b746e",
                  textTransform: "uppercase",
                }}
              >
                YOUR PRIVATE SPACE, DESIGNED FOR CLARITY.
              </p>
            </header>

            {/* Cards */}
            <main style={{ marginTop: 56 }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  columnGap: 36,
                  rowGap: 40,
                }}
              >
                <UpcomingCard />
                <VideosCard />
                <EnergyCard />
                <OrdersCard />
              </div>
            </main>
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden">
          <header
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 24,
            }}
          >
            <button onClick={() => setSidebarOpen(true)}>
              <Menu size={24} />
            </button>

            <div
              className="rounded-full flex items-center justify-center"
              style={{
                width: 40,
                height: 40,
                background: "#ede9e4",
              }}
            >
              A
            </div>
          </header>

          <main
            style={{
              paddingLeft: 20,
              paddingRight: 20,
              paddingBottom: 32,
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <UpcomingCard />
            <VideosCard />
            <EnergyCard />
            <OrdersCard />
          </main>
        </div>
      </div>

      {sidebarOpen && (
        <button
          className="fixed top-5 right-5 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <X />
        </button>
      )}
    </div>
  );
}
