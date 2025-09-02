import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/hello1")
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error("Error fetching:", err));
  }, []);


  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>First Sample website using React and Flask</h1>
      <p>Backend says: <h1>{message}</h1></p>
    </div>
  );
}

export default App;
