import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);
  const [formMessage, setFormMessage] = useState("");

  // Fetch the initial message from backend
  useEffect(() => {
    fetch("http://localhost:5500")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err));
  }, []);

  // Fetch users list
  useEffect(() => {
    fetch("http://localhost:5500/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  // Submit form data to the backend
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name: "Alice", email: "alice@example.com" };

    fetch("http://localhost:5500/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => setFormMessage(data.message))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>{message}</h1>
      <h2>Users List:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <h2>Submit Form:</h2>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
      {formMessage && <p>{formMessage}</p>}
    </div>
  );
}

export default App;
