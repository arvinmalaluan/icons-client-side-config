import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideNav from "./components/SideNav";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Articles from "./pages/Articles";
import Programs from "./pages/Programs";
import Community from "./pages/Community";
import Messenger from "./pages/Messenger";

function App() {
  return (
    <div className="flex h-screen">
      <SideNav />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/queries" element={<Dashboard />} />
        <Route path="/community" element={<Community />} />
        <Route path="/messenger" element={<Messenger />} />
      </Routes>
    </div>
  );
}

export default App;
