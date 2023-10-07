import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateTask from "./Pages/CreateTask";
import DashBoard from "./Pages/DashBoard";
import { TaskProvider } from "./Context/TaskProvider";
import Login from "./Pages/Login";
import { AuthProvider } from "./Context/Auth";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <TaskProvider>
          <Routes>
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/task" element={<CreateTask />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </TaskProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
