import { useState, useEffect } from "react";
import "./styles/global.css";

import CustomCursor from "./components/CustomCursor";
import Nav          from "./components/Nav";
import Footer       from "./components/Footer";

import HomePage        from "./pages/HomePage";
import CollectionsPage from "./pages/CollectionsPage";
import ArchivesPage    from "./pages/ArchivesPage";
import AboutPage       from "./pages/AboutPage";

/**
 * App
 * Root component. Manages the active page via useState.
 * Scrolls to top on every page change.
 * Renders Nav → Page → Footer inside the .grain wrapper.
 */
export default function App() {
  const [page, setPage] = useState("Home");

  // Scroll to top whenever the page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case "Home":        return <HomePage setPage={setPage} />;
      case "Collections": return <CollectionsPage />;
      case "Archives":    return <ArchivesPage />;
      case "About":       return <AboutPage />;
      default:            return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div className="grain">
      <CustomCursor />
      <Nav page={page} setPage={setPage} />
      <main>{renderPage()}</main>
      <Footer setPage={setPage} />
    </div>
  );
}
