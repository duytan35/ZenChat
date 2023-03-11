import "./App.css";
import ChatRoom from "./components/ChatRoom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ChatRoom />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
