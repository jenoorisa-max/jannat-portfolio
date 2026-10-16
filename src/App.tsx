import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { ChatWidget } from "./components/chat/ChatWidget";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { HomePage } from "./pages/HomePage";
import { ProjectPage } from "./pages/ProjectPage";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const node = document.querySelector(location.hash);

      if (node) {
        node.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-dvh bg-ivory text-ink">
      <Navbar />

      <main className="m-0 p-0">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
}