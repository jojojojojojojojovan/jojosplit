import "./App.css"
import { Routes, Route } from "react-router-dom"

import HomePage from "./pages/HomePage"
import CreateGroupPage from "./pages/CreateGroupPage"
import TransactionsPage from "./pages/TransactionsPage"
import LoginPage from "./pages/LoginPage"

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/create-group" element={<CreateGroupPage />} />
      <Route path="/group/:groupId" element={<TransactionsPage />} />
    </Routes>
  )
}

export default App
