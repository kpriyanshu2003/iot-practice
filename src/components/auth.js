import React, { Fragment, useState } from "react";

// import images
import login from "../images/login.svg";
import logo from "../images/vep-logo.svg";
import icon from "../images/icon.svg";
import phone from "../images/signup-ph.svg";
import cred from "../images/signup-cred.svg";

// import components
import Login from "./subComponents/login";
import SignU from "./subComponents/signup-uno";
import SignD from "./subComponents/signup-dos";
import SignT from "./subComponents/signup-tres";
import SignCu from "./subComponents/signup-cuatro";
import Business from "./business";

export default function Auth(props) {
  const [uno, unoText] = useState({
    head: "Hey!",
    body: "Welcome back.",
    img: login,
    ico: null,
  });

  const [dos, dosText] = useState({
    logo: logo,
    head: "Login to your account",
    body: "Enter your registered email ID and password.",
  });
  const update = (n) => {
    switch (n) {
      case "lgn":
        setCurr(<Login dos={dos} update={update} />);
        unoText({ head: "Hey!", body: "Welcome back.", img: login, ico: null });
        dosText({
          logo: logo,
          head: "Login to your account",
          body: "Enter your registered email ID and password.",
        });
        break;
      case "sgn-U":
        setCurr(<SignU dos={dos} update={update} />);
        unoText({ head: "Hello!", body: "Welcome.", img: phone, ico: null });
        dosText({
          logo: logo,
          head: "Sign Up to Vep.",
          body: "Enter your phone number to register with your account.",
        });
        break;
      case "sgn-D":
        setCurr(<SignD dos={dos} update={update} />);
        unoText({
          head: "Lets’",
          body: "Secure your login process",
          img: cred,
          ico: null,
        });
        break;
      case "sgn-T":
        setCurr(<SignT dos={dos} update={update} />);
        unoText({ head: "Hey!", body: "Welcome back.", img: login, ico: null });
        dosText({
          logo: logo,
          head: "Login to your account",
          body: "Enter your registered email ID and password.",
        });
        break;
      case "sng-Cu":
        setCurr(<SignCu dos={dos} update={update} />);
        unoText({ head: "Hey!", body: "Welcome back.", img: login, ico: null });
        dosText({
          logo: logo,
          head: "Login to your account",
          body: "Enter your registered email ID and password.",
        });
        break;
      default:
        alert("error");
        break;
    }
  };

  const [curr, setCurr] = useState(<Login dos={dos} update={update} />);

  return (
    <Fragment>
      {uno.ico && (
        <div className="absolute top-2 left-32 flex items-center">
          <img src={uno.ico} alt="" />
          <svg
            width="60"
            height="30"
            viewBox="0 0 60 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.70579 21.9736L0.193176 0.78418H5.68316L10.9377 16.9331L16.1922 0.78418H21.6822L14.1696 21.9736H7.70579Z"
              fill="#CE0B9F"
            />
            <path
              fillRule="evenodd"
              clip-rule="evenodd"
              d="M30.5575 22.1878C28.1015 22.1878 26.0895 21.4012 24.5217 19.8227C22.9513 18.2388 22.1674 16.1386 22.1674 13.5194C22.1674 10.9028 22.9432 8.81862 24.5003 7.26955C26.0628 5.72315 28.0801 4.94727 30.5575 4.94727C33.0323 4.94727 35.0843 5.71512 36.711 7.24815C38.343 8.77581 39.1617 10.8974 39.1617 13.6157C39.1617 14.1936 39.1216 14.7367 39.044 15.2423H27.454C27.553 15.9861 27.8848 16.5961 28.4493 17.0723C29.0111 17.5432 29.6184 17.7787 30.2686 17.7787C30.9241 17.7787 31.4137 17.7144 31.7347 17.586C32.0558 17.4523 32.2912 17.3185 32.441 17.19C32.5962 17.0616 32.7942 16.8449 33.0296 16.5372H38.6159C38.137 18.2281 37.1712 19.5952 35.7158 20.636C34.2657 21.6714 32.548 22.1878 30.5575 22.1878ZM33.7894 12.0104C33.7092 11.2265 33.3667 10.5871 32.7621 10.0948C32.1547 9.60252 31.4377 9.35638 30.611 9.35638C29.7896 9.35638 29.0967 9.60252 28.5349 10.0948C27.9704 10.5871 27.6172 11.2265 27.4754 12.0104H33.7894Z"
              fill="#CE0B9F"
            />
            <path
              fillRule="evenodd"
              clip-rule="evenodd"
              d="M53.1401 16.6442C53.8811 15.9326 54.2531 14.9106 54.2531 13.5836C54.2531 12.2566 53.8811 11.2292 53.1401 10.5015C52.3963 9.77375 51.5402 9.40989 50.5716 9.40989C49.6085 9.40989 48.7524 9.77107 48.0032 10.4908C47.2595 11.2051 46.8903 12.2245 46.8903 13.5515C46.8903 14.8785 47.2595 15.9058 48.0032 16.6336C48.7524 17.3559 49.6085 17.7144 50.5716 17.7144C51.5402 17.7144 52.3963 17.3586 53.1401 16.6442ZM46.8903 7.33376C48.038 5.74455 49.6834 4.94727 51.8237 4.94727C53.9694 4.94727 55.7861 5.75792 57.2709 7.37657C58.7611 8.99788 59.5076 11.066 59.5076 13.5836C59.5076 16.0958 58.7611 18.1586 57.2709 19.7692C55.7861 21.3825 53.9855 22.1878 51.8666 22.1878C49.753 22.1878 48.0942 21.2995 46.8903 19.523V30H41.732V5.12921H46.8903V7.33376Z"
              fill="#CE0B9F"
            />
          </svg>
        </div>
      )}
      <div className="mt-24 flex justify-evenly items-center font-raleway ">
        <div className="">
          <span className="font-semibold text-2xl">{uno.head}</span>
          <br />
          <span className="font-bold text-3xl">{uno.body}</span>
          <br />
          <img src={uno.img} alt="Login Icon" className="mt-8" />
        </div>

        <div className="h-80 w-0.5 bg-gray-300  "></div>

        <div className="mx-12 w-96 relative">
          <div className="absolute bottom-14">
            {dos.logo && (
              <div>
                <img src={dos.logo} alt="Logo" className="mb-8" />

                <span className="font-semibold text-2xl">{dos.head}</span>
                <br />
                <br />
                <span className="font-normal text-base">{dos.body}</span>
                <br />
              </div>
            )}
          </div>
          <div className="absolute -top-10 w-full">{curr}</div>
        </div>
      </div>
    </Fragment>
  );
}
