import { useState } from "react";
import logo from "./logo.svg";
import poweredBy from "./powered-by-vitawind-dark.png";
import Home from "./components/home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
