import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function HomePage() {
  const navigate = useNavigate()
  
  // 1. State Management
  const [groups, setGroups] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  // 3. Hardcoded temporary user ID
  const userId = 1

  // Fetch data on mount
  useEffect(() => {
    const fetchGroups = async () => {
      try {
        setIsLoading(true)
        setError(null)
        
        const response = await fetch(`http://localhost:8080/api/groups/${userId}`)
        
        if (!response.ok) {
          throw new Error(`Server responded with status: ${response.status}`)
        }
        
        const data = await response.json()
        setGroups(data)
      } catch (err) {
        console.error("Failed to fetch groups:", err)
        setError(err.message || "Something went wrong while loading your groups.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchGroups()
  }, [userId])

  // 5. Beautiful Skeleton Loader State
  if (isLoading) {
    return (
      <div className="container dashboard-layout">
        <header className="dashboard-header skeleton-pulse">
          <div className="skeleton-title"></div>
          <div className="skeleton-btn"></div>
        </header>
        <div className="groups-grid">
          {[1, 2, 3].map((n) => (
            <div key={n} className="group-card skeleton-pulse">
              <div className="skeleton-badge"></div>
              <div className="skeleton-text"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Error State Fallback
  if (error) {
    return (
      <div className="container">
        <h1 style={{ color: "var(--accent)" }}>Connection Error</h1>
        <p>{error}</p>
        <button className="button-primary" onClick={() => window.location.reload()}>
          Retry Connection
        </button>
      </div>
    )
  }

  // 1. Empty List State -> Show standard Welcome card
  if (!groups || groups.length === 0) {
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

  // Populated List State -> Show modern dashboard with group ID and Name
  return (
    <div className="container dashboard-layout">
      <header className="dashboard-header">
        <div>
          <h1>Your Groups</h1>
        </div>
        <button className="button-primary compact-btn" type="button" onClick={() => navigate("/create-group")}>
          + Create New Group
        </button>
      </header>

      <div className="groups-grid">
        {groups.map((group) => (
          <div 
            key={group.id} 
            className="group-card"
            onClick={() => navigate(`/group/${group.id}`)} // <-- 1. Trigger redirect on click
            style={{ cursor: "pointer" }}                  // <-- 2. Make it physically look clickable
          >
            <h2 className="group-name" style={{ marginTop: 0 }}>
              {group.name}
            </h2>
            <div className="group-meta">
              Created: {new Date(group.createdAt).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage