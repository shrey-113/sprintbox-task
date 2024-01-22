import { Route, Routes } from "react-router-dom";
import ApplyPage from "./pages/apply";
import HomePage from "./pages/homepage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apply" element={<ApplyPage />} />
      </Routes>
    </div>
  );
}

export default App;
