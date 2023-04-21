import { useState } from "react";
import Uno from "./Cards/uno";
import Dos from "./Cards/dos";

export default function Cards() {
  const update = (n) => {
    switch (n) {
      case 1:
        setMain(<Uno update={update} />);
        break;
      case 2:
        setMain(<Dos update={update} />);
        break;
      default:
        alert("error");
        break;
    }
  };
  const [main, setMain] = useState(<Uno update={update} />);
  return (
    <div>
      <div>
        <span className="font-bold text-3xl">Cards</span>
        <div className="mt-5">{main}</div>
      </div>
    </div>
  );
}
