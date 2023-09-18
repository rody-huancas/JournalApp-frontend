import { Navigate, Route, Routes } from "react-router-dom";
// Paginas
import { JournalPage } from "journal/pages/JournalPage";

export const JournalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<JournalPage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
