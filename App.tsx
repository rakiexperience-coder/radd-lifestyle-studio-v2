import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import LicenseGate from "./components/LicenseGate";
import StudioPage from "./components/StudioPage";

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LicenseGate />} />
        <Route path="/studio" element={<StudioPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;