import React from "react";
import DashboardPage from "./pages/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SingleOrderComponent from "./component/SingleOrderComponent/SingleOrderComponent";
import SingleOrderPage from "./pages/SingleOrderPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/:id" element={<SingleOrderPage/>} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
