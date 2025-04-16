import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./screens/HomePage";
import AllMovies from "./screens/AllMovies";
import Login from "./screens/Login";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import NowShowing from "./screens/NowShowing";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allMovies" element={<AllMovies />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route
          path="/showTime"
          element={
            <ProtectedRoute>
              <NowShowing />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
