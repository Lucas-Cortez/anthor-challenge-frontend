import { Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { useAuth } from "./hooks/useAuth";
import { Catalog } from "./pages/Catalog";
import { Login } from "./pages/Login";

function RequireAuth({ children }: { children: JSX.Element }) {
  const { user } = useAuth();

  return !user ? <Navigate to="/login" replace /> : children;
}

function AppRoutes() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/*" element={<Navigate to="/catalog" replace />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/catalog"
          element={
            <RequireAuth>
              <Catalog />
            </RequireAuth>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export { AppRoutes };
