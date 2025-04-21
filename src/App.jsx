import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Control from "./pages/Control";
import Logs from "./pages/Logs";
import Statistics from "./pages/Statistics";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import ProtectedRoute from "./features/authentication/ProtectedRoute";
import Signup from "./pages/Signup";
import { SensorProvider } from "./contexts/SensorContext";
import Profile from "./pages/Profile";
import { getUserRole } from "./utils/getUserRole";

function App() {
  const role = getUserRole();
  return (
    <SensorProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="dashboard" />} />

              <Route path="dashboard" element={<Dashboard />} />
              <Route path="control" element={<Control />} />
              <Route path="logs" element={<Logs />} />
              <Route path="statistics" element={<Statistics />} />
              {/* {role === "ADMIN" && (
                <Route path="settings" element={<Settings />} />
              )} */}
              <Route path="settings" element={<Settings />} />

              <Route path="profile" element={<Profile />} />
            </Route>
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </SensorProvider>
  );
}

export default App;
