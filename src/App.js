import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import SecurityQuestionPage from "./components/SecurityQuestionPage"; // Import new page component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/security-question"
          element={<SecurityQuestionPage />}
        />{" "}
        {/* New route */}
      </Routes>
    </Router>
  );
}

export default App;
