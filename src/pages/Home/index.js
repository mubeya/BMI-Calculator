import { useState } from "react";
import Calculator from "../../components/Calculator";
import DietList from "../../components/DietList";

function Home() {
  const [state, setState] = useState("calculator");
  return (
    <div>
      {state === "calculator" && (
        <Calculator dietList={() => setState("dietList")} />
      )}
      {state === "dietList" && <DietList />}
    </div>
  );
}

export default Home;
