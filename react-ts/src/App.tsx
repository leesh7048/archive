import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import MainPage from "./pages/MainPage";
import ArticlesPage from "./pages/ArticlesPage/ArticlesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="articles" element={<ArticlesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
