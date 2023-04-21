import { Fragment, useState } from "react";
import SignProcess from "../components/Signup-process";
import SignProceed from "../components/Signup-proceed";
import Business from "../components/SignUp/Business";
import Test from "../Test";
import Success from "../components/SignUp/Success";

export default function Signup() {
  const updateMain = (n) => {
    switch (n) {
      case "sign":
        setMain(<SignProcess updateMain={updateMain} />);
        break;
      case "biz":
        setMain(<Business updateMain={updateMain} />);
        break;
      case "sign-Next":
        setMain(<SignProceed updateMain={updateMain} />);
        break;
      case "success":
        setMain(<Success />);
        break;
      default:
        setMain(<Test />);
        break;
    }
  };
  const [main, setMain] = useState(<SignProcess updateMain={updateMain} />);
  return <Fragment>{main}</Fragment>;
}
