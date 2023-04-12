import React, { useState } from "react";
import PropTypes from "prop-types";
import cards from "../images/cards.svg";
// import icon from "../images/icon.svg";
import login from "../images/login.svg";
import logo from "../images/vep-logo.svg";

export default function Auth() {
  const [image, imageText] = useState(login);
  const [uno, unoText] = useState("Hey!");
  const [dos, dosText] = useState("Welcome back.");
  const [main, mainText] = useState("Login to your account");
  const [sub, subText] = useState(
    "Enter your registered email ID and password."
  );

  const signupUno = () => {
    imageText(cards);
  };

  return (
    <div className="relative font-raleway">
      <div className="absolute top-28 left-28">
        <span className="font-semibold text-2xl">{uno}</span>
        <br />
        <span className="font-bold text-3xl">{dos}</span>
        <br />
        <img src={image} alt="Login Icon" className="mt-8" />
      </div>

      <div className="absolute top-[15rem] left-[50rem] h-80 w-0.5 bg-gray-300"></div>

      <div className="w-[25rem] absolute top-28 right-[8rem]">
        <img src={logo} alt="Logo" className="mb-8" />
        <br />
        <span className="font-semibold text-2xl">{main}</span>
        <br />
        <br />
        <span className="font-normal text-base">{sub}</span>
        <br />
        <div className="flex items-center border rounded-2xl mt-5">
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 0.574707C14.163 0.574707 14.7989 0.838099 15.2678 1.30694C15.7366 1.77578 16 2.41167 16 3.07471V11.0747C16 11.7377 15.7366 12.3736 15.2678 12.8425C14.7989 13.3113 14.163 13.5747 13.5 13.5747H2.5C1.83696 13.5747 1.20107 13.3113 0.732233 12.8425C0.263392 12.3736 0 11.7377 0 11.0747V3.07471C0 2.41167 0.263392 1.77578 0.732233 1.30694C1.20107 0.838099 1.83696 0.574707 2.5 0.574707H13.5ZM15 4.53571L8.254 8.50571C8.19022 8.54315 8.11893 8.56598 8.04527 8.57255C7.9716 8.57913 7.8974 8.56927 7.828 8.54371L7.746 8.50571L1 4.53771V11.0747C1 11.4725 1.15804 11.8541 1.43934 12.1354C1.72064 12.4167 2.10218 12.5747 2.5 12.5747H13.5C13.8978 12.5747 14.2794 12.4167 14.5607 12.1354C14.842 11.8541 15 11.4725 15 11.0747V4.53571ZM13.5 1.57471H2.5C2.10218 1.57471 1.72064 1.73274 1.43934 2.01405C1.15804 2.29535 1 2.67688 1 3.07471V3.37671L8 7.49471L15 3.37471V3.07471C15 2.67688 14.842 2.29535 14.5607 2.01405C14.2794 1.73274 13.8978 1.57471 13.5 1.57471Z"
              fill="#787878"
            />
          </svg>
          <input
            type="text"
            placeholder="Enter email ID"
            className="font-normal w-full border-none p-4 bg-none outline-none font-normal"
          />
        </div>

        <div className="flex items-center border rounded-2xl mt-5 font-normal">
          <svg
            width="12"
            height="16"
            viewBox="0 0 12 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 0.574707C6.79565 0.574707 7.55871 0.890778 8.12132 1.45339C8.68393 2.016 9 2.77906 9 3.57471V4.57471H10C10.5304 4.57471 11.0391 4.78542 11.4142 5.16049C11.7893 5.53557 12 6.04427 12 6.57471V13.5747C12 14.1051 11.7893 14.6138 11.4142 14.9889C11.0391 15.364 10.5304 15.5747 10 15.5747H2C1.46957 15.5747 0.960859 15.364 0.585786 14.9889C0.210714 14.6138 0 14.1051 0 13.5747V6.57471C0 6.04427 0.210714 5.53557 0.585786 5.16049C0.960859 4.78542 1.46957 4.57471 2 4.57471H3V3.57471C3 2.77906 3.31607 2.016 3.87868 1.45339C4.44129 0.890778 5.20435 0.574707 6 0.574707V0.574707ZM10 5.57471H2C1.73478 5.57471 1.48043 5.68006 1.29289 5.8676C1.10536 6.05514 1 6.30949 1 6.57471V13.5747C1 13.8399 1.10536 14.0943 1.29289 14.2818C1.48043 14.4693 1.73478 14.5747 2 14.5747H10C10.2652 14.5747 10.5196 14.4693 10.7071 14.2818C10.8946 14.0943 11 13.8399 11 13.5747V6.57471C11 6.30949 10.8946 6.05514 10.7071 5.8676C10.5196 5.68006 10.2652 5.57471 10 5.57471ZM6 9.07471C6.26522 9.07471 6.51957 9.18006 6.70711 9.3676C6.89464 9.55514 7 9.80949 7 10.0747C7 10.3399 6.89464 10.5943 6.70711 10.7818C6.51957 10.9693 6.26522 11.0747 6 11.0747C5.73478 11.0747 5.48043 10.9693 5.29289 10.7818C5.10536 10.5943 5 10.3399 5 10.0747C5 9.80949 5.10536 9.55514 5.29289 9.3676C5.48043 9.18006 5.73478 9.07471 6 9.07471V9.07471ZM6 1.57471C5.46957 1.57471 4.96086 1.78542 4.58579 2.16049C4.21071 2.53557 4 3.04427 4 3.57471V4.57471H8V3.57471C8 3.04427 7.78929 2.53557 7.41421 2.16049C7.03914 1.78542 6.53043 1.57471 6 1.57471Z"
              fill="#787878"
            />
          </svg>
          <input
            type="password"
            placeholder="Set Password"
            className="font-normal w-full border-none p-4 bg-none outline-none"
          />
          <svg
            width="20"
            height="13"
            viewBox="0 0 20 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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
          className="bg-[#BF13BF] w-full mt-5 border-none rounded-2xl py-4 text-white text-sm uppercase font-medium"
        />
        <br />
        <div className="mt-5">
          <span className="font-normal cursor-default">Forgot Password? </span>
          <span className="uppercase text-[#BF13BF] font-medium cursor-pointer">
            Reset Password
          </span>
          <br />
          <span className="font-normal cursor-default">
            Don't have account?
          </span>
          <span
            className="uppercase text-[#BF13BF] font-medium cursor-pointer"
            onClick={signupUno}
          >
            Sign Up
          </span>
        </div>
      </div>
      {hidden}
    </div>
  );
}
