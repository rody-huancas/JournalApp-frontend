import { AuthRoutes } from "auth/routes/AuthRoutes";
import { JournalRoutes } from "journal/routes/JournalRoutes";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/*LOGIN Y REGISTRO   */}
        <Route path="/auth/*" element={<AuthRoutes />} />
        {/* JOURNAL APP */}
        <Route path="/*" element={<JournalRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};
