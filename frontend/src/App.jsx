import { useState } from "react";
import { callLLM } from "./services/api";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = async () => {
    const res = await callLLM(input);
    setOutput(res.response);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>LLM App</h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={4}
        cols={50}
      />
      <br />
      <button onClick={handleSubmit}>Generate</button>

      <h3>Response:</h3>
      <p>{output}</p>
    </div>
  );
}

export default App;
