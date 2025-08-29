import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: "center",marginTop: "50px" }}>
            <h1>Hello from react</h1>
            <p>count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default App;
