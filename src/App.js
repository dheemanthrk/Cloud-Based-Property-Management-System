import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/common/LoginPage";
import SignUpPage from "./pages/common/SignUpPage";
import SecurityQuestionPage from "./pages/common/SecurityQuestionPage";
import Dashboard from "./pages/guests/Dashboard";
import AgentDashboard from "./pages/agents/AgentDashboard";
import Landing from "./pages/common/Landing";
import CipherPage from "./pages/common/CipherPage";
import { AuthProvider } from "./components/auth/AuthContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Error404 from "./pages/common/Error404";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LoginPage role="GUEST" />} />
          <Route path="/agent/login" element={<LoginPage role="AGENT" />} />
          <Route path="/agent/signup" element={<SignUpPage role="AGENT" />} />
          <Route path="/signup" element={<SignUpPage role="GUEST" />} />
          <Route
            path="/security-question"
            element={<SecurityQuestionPage role="GUEST" />}
          />
          <Route
            path="/agent/security-question"
            element={<SecurityQuestionPage role="AGENT" />}
          />
          <Route path="/agent/cipher" element={<CipherPage role="AGENT" />} />
          <Route path="/cipher" element={<CipherPage role="GUEST" />} />
          {/* Protect routes */}
          <Route
            path="/dashboard"
            element={<ProtectedRoute element={<Dashboard /> } requiredRole="GUEST" />}
          />
          <Route
            path="/agent/dashboard"
            element={<ProtectedRoute element={<AgentDashboard />} requiredRole="AGENT" />}
          />
          {/* All other routes */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
