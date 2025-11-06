import { Link, Route, Routes, Navigate, useLocation } from "react-router-dom";
import "./App.css";

import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function App() {
  const location = useLocation();
  const hideNav = ["/privacy", "/terms"].includes(location.pathname);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {!hideNav && (
        <header className="border-b bg-white">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
            <Link to="/" className="text-xl font-semibold">
              Z Web
            </Link>
            <nav className="flex gap-4 text-sm">
              <Link to="/privacy" className="hover:text-blue-600">
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-blue-600">
                Terms
              </Link>
            </nav>
          </div>
        </header>
      )}

      <main className="mx-auto max-w-5xl px-4 py-10">
        <Routes>
          <Route
            path="/"
            element={
              <div className="space-y-4">
                <h1 className="text-3xl font-bold">Welcome</h1>
                <p className="text-gray-600">
                  This starter now has Tailwind CSS and React Router.
                </p>
              </div>
            }
          />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
