// IMPORTS -
import { unstable_after as after } from "next/server";
import BadComponent from "./bad-hydrating-component";
import Counter from "./optimizable-counter";
import SubComponent from "./sub-component";

export const dynamic = "force-dynamic";

export default async function Home() {
  const timeReq = await fetch("http://localhost:8080/", {
    cache: "force-cache",
  });
  const { time } = await timeReq.json();

  after(() => {
    console.log("Finished rendering");
  });

  return (
    <div>
      <SubComponent />
      <Counter />
      {/* <BadComponent /> */}
      <div>{time}</div>
    </div>
  );
}
