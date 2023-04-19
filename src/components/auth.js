import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
// import images
import login from "../images/login.svg";
import logo from "../images/vep-logo.svg";
import icon from "../images/icon.svg";
import phone from "../images/signup-ph.svg";
import cred from "../images/signup-cred.svg";

// import components

export default function Auth() {
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

function Login(props) {
  return (
    <div>
      <div className="flex items-center rounded-2xl mt-5 bg-[#F2F2F2]">
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-4"
        >
          <path
            d="M15.5 4.57471C16.163 4.57471 16.7989 4.8381 17.2678 5.30694C17.7366 5.77578 18 6.41167 18 7.07471V15.0747C18 15.7377 17.7366 16.3736 17.2678 16.8425C16.7989 17.3113 16.163 17.5747 15.5 17.5747H4.5C3.83696 17.5747 3.20107 17.3113 2.73223 16.8425C2.26339 16.3736 2 15.7377 2 15.0747V7.07471C2 6.41167 2.26339 5.77578 2.73223 5.30694C3.20107 4.8381 3.83696 4.57471 4.5 4.57471H15.5ZM17 8.53571L10.254 12.5057C10.1902 12.5432 10.1189 12.566 10.0453 12.5726C9.9716 12.5791 9.8974 12.5693 9.828 12.5437L9.746 12.5057L3 8.53771V15.0747C3 15.4725 3.15804 15.8541 3.43934 16.1354C3.72064 16.4167 4.10218 16.5747 4.5 16.5747H15.5C15.8978 16.5747 16.2794 16.4167 16.5607 16.1354C16.842 15.8541 17 15.4725 17 15.0747V8.53571ZM15.5 5.57471H4.5C4.10218 5.57471 3.72064 5.73274 3.43934 6.01405C3.15804 6.29535 3 6.67688 3 7.07471V7.37671L10 11.4947L17 7.37471V7.07471C17 6.67688 16.842 6.29535 16.5607 6.01405C16.2794 5.73274 15.8978 5.57471 15.5 5.57471Z"
            fill="#787878"
          />
        </svg>
        <input
          type="text"
          placeholder="Enter email ID"
          className="font-normal w-full py-4 bg-transparent outline-none font-normal border-none"
        />
      </div>
      <div className="flex items-center rounded-2xl mt-5 font-normal bg-[#F2F2F2]">
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-4"
        >
          <path
            d="M10 2.57471C10.7957 2.57471 11.5587 2.89078 12.1213 3.45339C12.6839 4.016 13 4.77906 13 5.57471V6.57471H14C14.5304 6.57471 15.0391 6.78542 15.4142 7.16049C15.7893 7.53557 16 8.04427 16 8.57471V15.5747C16 16.1051 15.7893 16.6138 15.4142 16.9889C15.0391 17.364 14.5304 17.5747 14 17.5747H6C5.46957 17.5747 4.96086 17.364 4.58579 16.9889C4.21071 16.6138 4 16.1051 4 15.5747V8.57471C4 8.04427 4.21071 7.53557 4.58579 7.16049C4.96086 6.78542 5.46957 6.57471 6 6.57471H7V5.57471C7 4.77906 7.31607 4.016 7.87868 3.45339C8.44129 2.89078 9.20435 2.57471 10 2.57471ZM14 7.57471H6C5.73478 7.57471 5.48043 7.68006 5.29289 7.8676C5.10536 8.05514 5 8.30949 5 8.57471V15.5747C5 15.8399 5.10536 16.0943 5.29289 16.2818C5.48043 16.4693 5.73478 16.5747 6 16.5747H14C14.2652 16.5747 14.5196 16.4693 14.7071 16.2818C14.8946 16.0943 15 15.8399 15 15.5747V8.57471C15 8.30949 14.8946 8.05514 14.7071 7.8676C14.5196 7.68006 14.2652 7.57471 14 7.57471ZM10 11.0747C10.2652 11.0747 10.5196 11.1801 10.7071 11.3676C10.8946 11.5551 11 11.8095 11 12.0747C11 12.3399 10.8946 12.5943 10.7071 12.7818C10.5196 12.9693 10.2652 13.0747 10 13.0747C9.73478 13.0747 9.48043 12.9693 9.29289 12.7818C9.10536 12.5943 9 12.3399 9 12.0747C9 11.8095 9.10536 11.5551 9.29289 11.3676C9.48043 11.1801 9.73478 11.0747 10 11.0747ZM10 3.57471C9.46957 3.57471 8.96086 3.78542 8.58579 4.16049C8.21071 4.53557 8 5.04427 8 5.57471V6.57471H12V5.57471C12 5.04427 11.7893 4.53557 11.4142 4.16049C11.0391 3.78542 10.5304 3.57471 10 3.57471Z"
            fill="#787878"
          />
        </svg>
        <input
          type="password"
          placeholder="Set Password"
          className="font-normal w-full py-4 bg-transparent outline-none border-none "
        />
        <svg
          width="20"
          height="13"
          viewBox="0 0 20 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-4"
        >
          <path
            d="M1.912 8.49711C2.7304 4.56711 6.1516 1.77471 10 1.77471C13.8472 1.77471 17.2684 4.56711 18.088 8.49711C18.1205 8.65306 18.2135 8.78972 18.3468 8.87704C18.48 8.96435 18.6425 8.99517 18.7984 8.96271C18.9543 8.93024 19.091 8.83716 19.1783 8.70394C19.2656 8.57071 19.2965 8.40825 19.264 8.25231C18.3316 3.78231 14.4316 0.574707 10 0.574707C5.5684 0.574707 1.6684 3.78231 0.735996 8.25231C0.703533 8.40825 0.73435 8.57071 0.821667 8.70394C0.908984 8.83716 1.04565 8.93024 1.2016 8.96271C1.35754 8.99517 1.52 8.96435 1.65322 8.87704C1.78645 8.78972 1.87953 8.65306 1.912 8.49711ZM10 4.17471C8.88609 4.17471 7.8178 4.61721 7.03015 5.40486C6.2425 6.19251 5.8 7.2608 5.8 8.37471C5.8 9.48862 6.2425 10.5569 7.03015 11.3446C7.8178 12.1322 8.88609 12.5747 10 12.5747C11.1139 12.5747 12.1822 12.1322 12.9698 11.3446C13.7575 10.5569 14.2 9.48862 14.2 8.37471C14.2 7.2608 13.7575 6.19251 12.9698 5.40486C12.1822 4.61721 11.1139 4.17471 10 4.17471ZM7 8.37471C7 7.57906 7.31607 6.816 7.87868 6.25339C8.44129 5.69078 9.20435 5.37471 10 5.37471C10.7956 5.37471 11.5587 5.69078 12.1213 6.25339C12.6839 6.816 13 7.57906 13 8.37471C13 9.17036 12.6839 9.93342 12.1213 10.496C11.5587 11.0586 10.7956 11.3747 10 11.3747C9.20435 11.3747 8.44129 11.0586 7.87868 10.496C7.31607 9.93342 7 9.17036 7 8.37471Z"
            fill="#333333"
          />
        </svg>
      </div>
      <input
        type="button"
        value="Login"
        className="bg-[#BF13BF] w-full mt-5 border-none rounded-2xl py-4 text-white text-sm uppercase font-medium cursor-pointer"
      />
      <br />
      <div className="mt-5 text-sm">
        <div>
          <span className="cursor-default">Forgot Password? </span>
          <span className="uppercase text-[#BF13BF] font-medium cursor-pointer">
            Reset Password
          </span>
        </div>
        <div className="mt-10 text-center">
          <span className="cursor-default">Don't have account? </span>
          <span
            className="uppercase text-[#BF13BF] font-medium cursor-pointer"
            onClick={() => props.update("sgn-U")}
          >
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
}

function SignU(props) {
  return (
    <div>
      <div className="flex items-center rounded-2xl mt-10 bg-[#F2F2F2]">
        <div className="flex items-center px-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_163)">
              <path
                d="M0.75 12C0.75 16.9124 3.9 21.0749 8.25 22.6124V1.38745C3.9 2.92495 0.75 7.08745 0.75 12Z"
                fill="#83BF4F"
              />
              <path
                d="M23.25 12C23.25 7.08745 20.1375 2.92495 15.75 1.38745V22.6124C20.1375 21.0749 23.25 16.9124 23.25 12Z"
                fill="#83BF4F"
              />
              <path
                d="M8.25 22.6125C9.4125 23.025 10.6875 23.25 12 23.25C13.3125 23.25 14.5875 23.025 15.75 22.6125V1.3875C14.5875 0.975 13.3125 0.75 12 0.75C10.6875 0.75 9.4125 0.975 8.25 1.3875V22.6125Z"
                fill="#F9F9F9"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_163">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span className="text-[#787878]">&nbsp;+234</span>
          <span className="text-[#787878]">&nbsp;|</span>
        </div>

        <input
          type="text"
          placeholder="Enter phone number"
          className="font-normal w-full border-none py-4 bg-transparent outline-none font-normal"
        />
      </div>
      <div className="mt-10 flex items-center cursor-pointer">
        <input
          type="button"
          value="next"
          className="bg-[#BF13BF] w-full border-none rounded-2xl py-4 text-white text-center text-sm uppercase font-medium cursor-pointer"
          onClick={() => props.update("sgn-D")}
        />
        <svg
          width="20"
          height="17"
          viewBox="0 0 20 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="-ml-10"
        >
          <path
            d="M11.118 16.5694C10.9435 16.7275 10.7141 16.8109 10.4789 16.8017C10.2436 16.7926 10.0213 16.6916 9.85966 16.5205C9.69798 16.3494 9.60977 16.1218 9.61395 15.8864C9.61813 15.651 9.71436 15.4267 9.88202 15.2614L16.1688 9.31543H0.900017C0.661322 9.31543 0.432404 9.22061 0.26362 9.05183C0.0948372 8.88304 1.71661e-05 8.65413 1.71661e-05 8.41543C1.71661e-05 8.17674 0.0948372 7.94782 0.26362 7.77904C0.432404 7.61025 0.661322 7.51543 0.900017 7.51543H16.1712L9.88202 1.56703C9.79324 1.48661 9.7214 1.38928 9.67073 1.28074C9.62005 1.1722 9.59155 1.05464 9.5869 0.934944C9.58225 0.815247 9.60154 0.695827 9.64364 0.583683C9.68574 0.471538 9.74981 0.368927 9.83208 0.281862C9.91435 0.194798 10.0132 0.125033 10.1228 0.0766576C10.2323 0.0282817 10.3505 0.00226824 10.4702 0.000141828C10.59 -0.00198459 10.709 0.0198188 10.8202 0.0642742C10.9315 0.10873 11.0327 0.174943 11.118 0.259032L18.8196 7.54303C19.0112 7.72356 19.1378 7.96234 19.1796 8.22223C19.2079 8.3524 19.2071 8.48722 19.1772 8.61703C19.134 8.87319 19.0085 9.10827 18.8196 9.28663L11.118 16.5706V16.5694Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="text-sm mt-12 text-center">
        <span className="cursor-default">Already have an account? </span>
        <span
          className="uppercase text-[#BF13BF] font-medium cursor-pointer"
          onClick={() => props.update("lgn")}
        >
          Login
        </span>
      </div>
    </div>
  );
}

function SignD(props) {
  return (
    <div>
      <div className="flex items-center bg-[#F2F2F2] rounded-2xl mt-5 bg-[#F2F2F2]">
        <svg
          width="16"
          height="13"
          viewBox="0 0 16 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-4"
        >
          <path
            d="M13.5 0C14.163 0 14.7989 0.263392 15.2678 0.732233C15.7366 1.20107 16 1.83696 16 2.5V10.5C16 11.163 15.7366 11.7989 15.2678 12.2678C14.7989 12.7366 14.163 13 13.5 13H2.5C1.83696 13 1.20107 12.7366 0.732233 12.2678C0.263392 11.7989 0 11.163 0 10.5V2.5C0 1.83696 0.263392 1.20107 0.732233 0.732233C1.20107 0.263392 1.83696 0 2.5 0H13.5ZM15 3.961L8.254 7.931C8.19022 7.96845 8.11893 7.99128 8.04527 7.99785C7.9716 8.00442 7.8974 7.99457 7.828 7.969L7.746 7.931L1 3.963V10.5C1 10.8978 1.15804 11.2794 1.43934 11.5607C1.72064 11.842 2.10218 12 2.5 12H13.5C13.8978 12 14.2794 11.842 14.5607 11.5607C14.842 11.2794 15 10.8978 15 10.5V3.961ZM13.5 1H2.5C2.10218 1 1.72064 1.15804 1.43934 1.43934C1.15804 1.72064 1 2.10218 1 2.5V2.802L8 6.92L15 2.8V2.5C15 2.10218 14.842 1.72064 14.5607 1.43934C14.2794 1.15804 13.8978 1 13.5 1Z"
            fill="#787878"
          />
        </svg>

        <input
          type="text"
          placeholder="Enter email ID"
          className="font-normal w-full border-none py-4 bg-transparent outline-none font-normal"
        />
      </div>
      <div className="flex items-center rounded-2xl mt-5 bg-[#F2F2F2]">
        <svg
          width="12"
          height="15"
          viewBox="0 0 12 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-4"
        >
          <path
            d="M6 0C6.79565 0 7.55871 0.316071 8.12132 0.87868C8.68393 1.44129 9 2.20435 9 3V4H10C10.5304 4 11.0391 4.21071 11.4142 4.58579C11.7893 4.96086 12 5.46957 12 6V13C12 13.5304 11.7893 14.0391 11.4142 14.4142C11.0391 14.7893 10.5304 15 10 15H2C1.46957 15 0.960859 14.7893 0.585786 14.4142C0.210714 14.0391 0 13.5304 0 13V6C0 5.46957 0.210714 4.96086 0.585786 4.58579C0.960859 4.21071 1.46957 4 2 4H3V3C3 2.20435 3.31607 1.44129 3.87868 0.87868C4.44129 0.316071 5.20435 0 6 0ZM10 5H2C1.73478 5 1.48043 5.10536 1.29289 5.29289C1.10536 5.48043 1 5.73478 1 6V13C1 13.2652 1.10536 13.5196 1.29289 13.7071C1.48043 13.8946 1.73478 14 2 14H10C10.2652 14 10.5196 13.8946 10.7071 13.7071C10.8946 13.5196 11 13.2652 11 13V6C11 5.73478 10.8946 5.48043 10.7071 5.29289C10.5196 5.10536 10.2652 5 10 5ZM6 8.5C6.26522 8.5 6.51957 8.60536 6.70711 8.79289C6.89464 8.98043 7 9.23478 7 9.5C7 9.76522 6.89464 10.0196 6.70711 10.2071C6.51957 10.3946 6.26522 10.5 6 10.5C5.73478 10.5 5.48043 10.3946 5.29289 10.2071C5.10536 10.0196 5 9.76522 5 9.5C5 9.23478 5.10536 8.98043 5.29289 8.79289C5.48043 8.60536 5.73478 8.5 6 8.5ZM6 1C5.46957 1 4.96086 1.21071 4.58579 1.58579C4.21071 1.96086 4 2.46957 4 3V4H8V3C8 2.46957 7.78929 1.96086 7.41421 1.58579C7.03914 1.21071 6.53043 1 6 1Z"
            fill="#787878"
          />
        </svg>

        <input
          type="text"
          placeholder="Set Password"
          className="font-normal w-full border-none py-4 bg-transparent outline-none font-normal"
        />
        <svg
          width="20"
          height="12"
          viewBox="0 0 20 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-4"
        >
          <path
            d="M1.912 7.9224C2.7304 3.9924 6.1516 1.2 10 1.2C13.8472 1.2 17.2684 3.9924 18.088 7.9224C18.1205 8.07835 18.2135 8.21501 18.3468 8.30233C18.48 8.38965 18.6425 8.42046 18.7984 8.388C18.9543 8.35554 19.091 8.26246 19.1783 8.12923C19.2656 7.996 19.2965 7.83355 19.264 7.6776C18.3316 3.2076 14.4316 0 10 0C5.5684 0 1.6684 3.2076 0.735996 7.6776C0.703533 7.83355 0.73435 7.996 0.821667 8.12923C0.908984 8.26246 1.04565 8.35554 1.2016 8.388C1.35754 8.42046 1.52 8.38965 1.65322 8.30233C1.78645 8.21501 1.87953 8.07835 1.912 7.9224ZM10 3.6C8.88609 3.6 7.8178 4.0425 7.03015 4.83015C6.2425 5.6178 5.8 6.68609 5.8 7.8C5.8 8.91391 6.2425 9.9822 7.03015 10.7698C7.8178 11.5575 8.88609 12 10 12C11.1139 12 12.1822 11.5575 12.9698 10.7698C13.7575 9.9822 14.2 8.91391 14.2 7.8C14.2 6.68609 13.7575 5.6178 12.9698 4.83015C12.1822 4.0425 11.1139 3.6 10 3.6ZM7 7.8C7 7.00435 7.31607 6.24129 7.87868 5.67868C8.44129 5.11607 9.20435 4.8 10 4.8C10.7956 4.8 11.5587 5.11607 12.1213 5.67868C12.6839 6.24129 13 7.00435 13 7.8C13 8.59565 12.6839 9.35871 12.1213 9.92132C11.5587 10.4839 10.7956 10.8 10 10.8C9.20435 10.8 8.44129 10.4839 7.87868 9.92132C7.31607 9.35871 7 8.59565 7 7.8Z"
            fill="#333333"
          />
        </svg>
      </div>
      <div className="flex items-center bg-[#F2F2F2] rounded-2xl mt-5">
        <svg
          width="12"
          height="15"
          viewBox="0 0 12 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-4"
        >
          <path
            d="M6 0C6.79565 0 7.55871 0.316071 8.12132 0.87868C8.68393 1.44129 9 2.20435 9 3V4H10C10.5304 4 11.0391 4.21071 11.4142 4.58579C11.7893 4.96086 12 5.46957 12 6V13C12 13.5304 11.7893 14.0391 11.4142 14.4142C11.0391 14.7893 10.5304 15 10 15H2C1.46957 15 0.960859 14.7893 0.585786 14.4142C0.210714 14.0391 0 13.5304 0 13V6C0 5.46957 0.210714 4.96086 0.585786 4.58579C0.960859 4.21071 1.46957 4 2 4H3V3C3 2.20435 3.31607 1.44129 3.87868 0.87868C4.44129 0.316071 5.20435 0 6 0ZM10 5H2C1.73478 5 1.48043 5.10536 1.29289 5.29289C1.10536 5.48043 1 5.73478 1 6V13C1 13.2652 1.10536 13.5196 1.29289 13.7071C1.48043 13.8946 1.73478 14 2 14H10C10.2652 14 10.5196 13.8946 10.7071 13.7071C10.8946 13.5196 11 13.2652 11 13V6C11 5.73478 10.8946 5.48043 10.7071 5.29289C10.5196 5.10536 10.2652 5 10 5ZM6 8.5C6.26522 8.5 6.51957 8.60536 6.70711 8.79289C6.89464 8.98043 7 9.23478 7 9.5C7 9.76522 6.89464 10.0196 6.70711 10.2071C6.51957 10.3946 6.26522 10.5 6 10.5C5.73478 10.5 5.48043 10.3946 5.29289 10.2071C5.10536 10.0196 5 9.76522 5 9.5C5 9.23478 5.10536 8.98043 5.29289 8.79289C5.48043 8.60536 5.73478 8.5 6 8.5ZM6 1C5.46957 1 4.96086 1.21071 4.58579 1.58579C4.21071 1.96086 4 2.46957 4 3V4H8V3C8 2.46957 7.78929 1.96086 7.41421 1.58579C7.03914 1.21071 6.53043 1 6 1Z"
            fill="#787878"
          />
        </svg>

        <input
          type="text"
          placeholder="Confirm Password"
          className="font-normal w-full border-none py-4 bg-transparent outline-none font-normal"
        />
        <svg
          width="20"
          height="12"
          viewBox="0 0 20 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-4"
        >
          <path
            d="M1.912 7.9224C2.7304 3.9924 6.1516 1.2 10 1.2C13.8472 1.2 17.2684 3.9924 18.088 7.9224C18.1205 8.07835 18.2135 8.21501 18.3468 8.30233C18.48 8.38965 18.6425 8.42046 18.7984 8.388C18.9543 8.35554 19.091 8.26246 19.1783 8.12923C19.2656 7.996 19.2965 7.83355 19.264 7.6776C18.3316 3.2076 14.4316 0 10 0C5.5684 0 1.6684 3.2076 0.735996 7.6776C0.703533 7.83355 0.73435 7.996 0.821667 8.12923C0.908984 8.26246 1.04565 8.35554 1.2016 8.388C1.35754 8.42046 1.52 8.38965 1.65322 8.30233C1.78645 8.21501 1.87953 8.07835 1.912 7.9224ZM10 3.6C8.88609 3.6 7.8178 4.0425 7.03015 4.83015C6.2425 5.6178 5.8 6.68609 5.8 7.8C5.8 8.91391 6.2425 9.9822 7.03015 10.7698C7.8178 11.5575 8.88609 12 10 12C11.1139 12 12.1822 11.5575 12.9698 10.7698C13.7575 9.9822 14.2 8.91391 14.2 7.8C14.2 6.68609 13.7575 5.6178 12.9698 4.83015C12.1822 4.0425 11.1139 3.6 10 3.6ZM7 7.8C7 7.00435 7.31607 6.24129 7.87868 5.67868C8.44129 5.11607 9.20435 4.8 10 4.8C10.7956 4.8 11.5587 5.11607 12.1213 5.67868C12.6839 6.24129 13 7.00435 13 7.8C13 8.59565 12.6839 9.35871 12.1213 9.92132C11.5587 10.4839 10.7956 10.8 10 10.8C9.20435 10.8 8.44129 10.4839 7.87868 9.92132C7.31607 9.35871 7 8.59565 7 7.8Z"
            fill="#333333"
          />
        </svg>
      </div>
      <Link to="/business">
        <div className="mt-10 flex items-center cursor-pointer">
          <input
            type="button"
            value="next"
            className="bg-[#BF13BF] w-full border-none rounded-2xl py-4 text-white text-center text-sm uppercase font-medium cursor-pointer"
            // onClick={() => props.update("biz")}
            // Change the entire page to business signup
          />

          <svg
            width="20"
            height="17"
            viewBox="0 0 20 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="-ml-10"
          >
            <path
              d="M11.118 16.5694C10.9435 16.7275 10.7141 16.8109 10.4789 16.8017C10.2436 16.7926 10.0213 16.6916 9.85966 16.5205C9.69798 16.3494 9.60977 16.1218 9.61395 15.8864C9.61813 15.651 9.71436 15.4267 9.88202 15.2614L16.1688 9.31543H0.900017C0.661322 9.31543 0.432404 9.22061 0.26362 9.05183C0.0948372 8.88304 1.71661e-05 8.65413 1.71661e-05 8.41543C1.71661e-05 8.17674 0.0948372 7.94782 0.26362 7.77904C0.432404 7.61025 0.661322 7.51543 0.900017 7.51543H16.1712L9.88202 1.56703C9.79324 1.48661 9.7214 1.38928 9.67073 1.28074C9.62005 1.1722 9.59155 1.05464 9.5869 0.934944C9.58225 0.815247 9.60154 0.695827 9.64364 0.583683C9.68574 0.471538 9.74981 0.368927 9.83208 0.281862C9.91435 0.194798 10.0132 0.125033 10.1228 0.0766576C10.2323 0.0282817 10.3505 0.00226824 10.4702 0.000141828C10.59 -0.00198459 10.709 0.0198188 10.8202 0.0642742C10.9315 0.10873 11.0327 0.174943 11.118 0.259032L18.8196 7.54303C19.0112 7.72356 19.1378 7.96234 19.1796 8.22223C19.2079 8.3524 19.2071 8.48722 19.1772 8.61703C19.134 8.87319 19.0085 9.10827 18.8196 9.28663L11.118 16.5706V16.5694Z"
              fill="white"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
}

function SignT(props) {
  return (
    <div>
      <div className="flex items-center border border-gray-200 rounded-2xl mt-5">
        <input
          type="text"
          placeholder="Enter Company Name"
          className="font-normal w-full border-none py-4 pl-4 bg-none outline-none font-normal"
        />
      </div>
      <div className="flex items-center border border-gray-200 rounded-2xl mt-5">
        <input
          type="text"
          placeholder="Select business type"
          className="font-normal w-full border-none py-4 pl-4 bg-none outline-none font-normal"
        />
      </div>

      <div className="mt-10 flex items-center">
        <input
          type="button"
          value="next"
          className="bg-[#BF13BF] w-full border-none rounded-2xl py-4 text-white text-center text-sm uppercase font-medium"
          onClick={() => props.update("sgn-Cu")}
          // Change the entire page to business signup
        />
        <svg
          width="20"
          height="17"
          viewBox="0 0 20 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="-ml-10"
        >
          <path
            d="M11.118 16.5694C10.9435 16.7275 10.7141 16.8109 10.4789 16.8017C10.2436 16.7926 10.0213 16.6916 9.85966 16.5205C9.69798 16.3494 9.60977 16.1218 9.61395 15.8864C9.61813 15.651 9.71436 15.4267 9.88202 15.2614L16.1688 9.31543H0.900017C0.661322 9.31543 0.432404 9.22061 0.26362 9.05183C0.0948372 8.88304 1.71661e-05 8.65413 1.71661e-05 8.41543C1.71661e-05 8.17674 0.0948372 7.94782 0.26362 7.77904C0.432404 7.61025 0.661322 7.51543 0.900017 7.51543H16.1712L9.88202 1.56703C9.79324 1.48661 9.7214 1.38928 9.67073 1.28074C9.62005 1.1722 9.59155 1.05464 9.5869 0.934944C9.58225 0.815247 9.60154 0.695827 9.64364 0.583683C9.68574 0.471538 9.74981 0.368927 9.83208 0.281862C9.91435 0.194798 10.0132 0.125033 10.1228 0.0766576C10.2323 0.0282817 10.3505 0.00226824 10.4702 0.000141828C10.59 -0.00198459 10.709 0.0198188 10.8202 0.0642742C10.9315 0.10873 11.0327 0.174943 11.118 0.259032L18.8196 7.54303C19.0112 7.72356 19.1378 7.96234 19.1796 8.22223C19.2079 8.3524 19.2071 8.48722 19.1772 8.61703C19.134 8.87319 19.0085 9.10827 18.8196 9.28663L11.118 16.5706V16.5694Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}

function SignCu(props) {
  return (
    <div>
      <div className="flex items-center border border-gray-200 rounded-2xl mt-5 bg-[#F2F2F2]">
        <div className="flex items-center px-4">
          <span className="text-[#787878] pr-4">vep.me/</span>
          <input
            type="text"
            placeholder="Enter username"
            className="font-normal w-full border-l border-[#E5E5E5] py-4 pl-4 bg-transparent outline-none font-normal"
          />
        </div>
      </div>

      <div className="mt-10 flex items-center">
        <input
          type="button"
          value="proceed"
          className="bg-[#BF13BF] w-full border-none rounded-2xl py-4 text-white text-center text-sm uppercase font-medium"
          onClick={() => props.update("sng-Cu")}
          // Change the entire page to success
        />
      </div>
    </div>
  );
}
