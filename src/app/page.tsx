// IMPORTS -
import BadComponent from "./bad-hydrating-component";
import Counter from "./optimizable-counter";
import SubComponent from "./sub-component";

export default function Home() {
  return (
    <div>
      <SubComponent />
      <Counter />
      {/* <BadComponent /> */}
    </div>
  );
}
