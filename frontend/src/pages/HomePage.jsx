import { useNavigate } from "react-router-dom"

function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="container">
      <h1>Welcome to JojoSplit</h1>

      <p>Start by creating a group to share expenses and build your workflow from here.</p>

      <button className="button-primary" type="button" onClick={() => navigate("/create-group")}>
        Create group
      </button>
    </div>
  )
}

export default HomePage
