import React, { useState } from "react";

export default function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <main className="page">
      <button className="greeting-button" onClick={() => setClicked(true)}>
        <span aria-live="polite" aria-atomic="true">
          {clicked ? "Have a great day!" : "Hello, world!"}
        </span>
      </button>
    </main>
  );
}
