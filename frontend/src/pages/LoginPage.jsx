// client/src/pages/LoginPage.jsx
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    setError("")
    try {
      const res = await axios.post("http://localhost:8080/api/login", {
        username,
        password
      })
      localStorage.setItem("token", res.data.token)
      localStorage.setItem("userId", res.data.user.id)
      localStorage.setItem("userName", res.data.user.name)
      navigate("/")
    } catch (err) {
      setError(err.response?.data || "Invalid credentials")
    }
  }

  return (
    <div style={{ maxWidth: 400, margin: "4rem auto" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input value={username} onChange={e => setUsername(e.target.value)} required />
        </div>
        <div style={{ marginTop: 8 }}>
          <label>Password</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" style={{ marginTop: 12 }}>
          Login
        </button>
      </form>
    </div>
  )
}
