function CreateGroupPage() {
  return (
    <div className="container">
      <h1>Create Group</h1>

      <form>
        <input type="text" placeholder="Group name" />
        <br />
        <br />

        <textarea placeholder="Description"></textarea>
        <br />
        <br />

        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default CreateGroupPage
