"use client";

// IMPORTS -
import { useState } from "react";

/**
 * We can see that header does not depend on count so theoretically we could just cache or memoize it,
 * and then reuse it every time
 *
 * We will do this using React Compiler
 *  */

function Header() {
  return <header className="m-5">Sub Component Header</header>;
}

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <button onClick={() => setCount(count + 1)} type="button">
        Increment {count}
      </button>
    </div>
  );
}
