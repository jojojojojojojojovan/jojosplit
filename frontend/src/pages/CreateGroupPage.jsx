import { useState } from "react"

function CreateGroupPage() {
  const [groupName, setGroupName] = useState("")
  const [members, setMembers] = useState([""])
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleMemberChange = (index, value) => {
    const updatedMembers = [...members]
    updatedMembers[index] = value
    setMembers(updatedMembers)
  }

  const addMember = () => {
    setMembers([...members, ""])
  }

  const removeMember = index => {
    const updatedMembers = members.filter((_, i) => i !== index)
    setMembers(updatedMembers)
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const payload = {
      name: groupName,
      memberNames: members.filter(member => member.trim() !== "")
    }

    try {
      const response = await fetch("http://localhost:8080/api/groups/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        throw new Error(`Create group failed: ${response.status}`)
      }

      await response.json()
      setSuccessMessage("Group created successfully!")
      console.log("Group created:", payload)
      setErrorMessage("")
      setGroupName("")
      setMembers([""])
    } catch (error) {
      console.error(error)
      setSuccessMessage("")
      setErrorMessage("Unable to create group. Please check the backend and try again.")
    }
  }

  return (
    <div className="container">
      <h1>Create Group</h1>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Group Name</label>
          <br />
          <input type="text" placeholder="Enter group name" value={groupName} onChange={e => setGroupName(e.target.value)} />
        </div>

        <br />

        <div>
          <label>Members</label>

          {members.map((member, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "10px",
                alignItems: "center"
              }}
            >
              <input type="text" placeholder={`Member ${index + 1}`} value={member} onChange={e => handleMemberChange(index, e.target.value)} />

              <button type="button" onClick={addMember}>
                +
              </button>

              {members.length > 1 && (
                <button type="button" onClick={() => removeMember(index)}>
                  -
                </button>
              )}
            </div>
          ))}
        </div>

        <br />

        <button type="submit">Create Group</button>
      </form>
    </div>
  )
}

export default CreateGroupPage
