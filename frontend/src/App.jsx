import "./App.css"
import { Routes, Route } from "react-router-dom"

import HomePage from "./pages/HomePage"
import CreateGroupPage from "./pages/CreateGroupPage"
import TransactionsPage from "./pages/TransactionsPage" // <-- 1. Import the page

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create-group" element={<CreateGroupPage />} />
      {/* 2. Register the dynamic group click route */}
      <Route path="/group/:groupId" element={<TransactionsPage />} />
    </Routes>
  )
}

export default App