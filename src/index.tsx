import * as React from "react";
import { createRoot } from "react-dom/client";

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <h1>Hello React + Webpack</h1>
    </>
  );
}

const root = createRoot(document.getElementById("app"));
