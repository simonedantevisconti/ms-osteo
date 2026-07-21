import { Navigate, Route, Routes } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayouts";
import Formazione from "./pages/Formazione";
import Trattamenti from "./pages/Trattamenti";
import Contatti from "./pages/Contatti";

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route index element={<Navigate to="/formazione" replace />} />

        <Route path="/formazione" element={<Formazione />} />
        <Route path="/trattamenti" element={<Trattamenti />} />
        <Route path="/contatti" element={<Contatti />} />

        <Route path="*" element={<Navigate to="/formazione" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
