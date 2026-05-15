import { useNavigate, useParams } from "react-router-dom"

function TransactionsPage() {
  const navigate = useNavigate()
  const { groupId } = useParams() // Captures the dynamic group ID from the URL path

  return (
    /* Using 'container dashboard-layout' forces this page to align perfectly 
      to the same layout bounding box as the HomePage grid loop.
    */
    <div className="container dashboard-layout">
      {/* Uses the exact identical header structure as the home menu */}
      <header className="dashboard-header">
        <div>
          {/* Automatically inherits the exact font sizing, weight, and tracking of "Your Groups" */}
          <h1>Transactions</h1>
        </div>
        
        {/* Replaces the Create button with a small, clean Go back button right-aligned */}
        <button 
          className="button-primary compact-btn" 
          type="button" 
          onClick={() => navigate("/")}
          style={{ 
            padding: "8px 16px", 
            fontSize: "0.85rem", 
            background: "var(--code-bg)", 
            color: "var(--text-h)",
            border: "1px solid var(--border)",
            borderRadius: "999px",
            cursor: "pointer"
          }}
        >
          ← Go back
        </button>
      </header>

      {/* A blank canvas viewport styled with your theme's variable border definitions */}
      <div 
        style={{ 
          minHeight: "400px", 
          width: "100%", 
          background: "var(--social-bg)", 
          borderRadius: "12px",
          border: "1px dashed var(--border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--text)",
          opacity: 0.6,
          fontSize: "0.9rem",
          boxSizing: "border-box"
        }}
      >
        No transactions recorded yet for Group {groupId}.
      </div>
    </div>
  )
}

export default TransactionsPage