import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import icon from "../images/icon.svg";

export default function Business() {
  const [btn, setBtn] = useState("#DADADA");
  const [personal, setPersonal] = useState("#000000");
  const [biz, setBiz] = useState("#787878");

  const handleEvent = () => {
    if (document.getElementById("TnC").checked) setBtn("#BF13BF");
    else setBtn("#DADADA");
  };

  const handleAccType = () => {
    if (document.getElementById("personal").checked) {
      setPersonal("#000000");
      setBiz("#787878");
    } else {
      setPersonal("#787878");
      setBiz("#000000");
    }
  };

  const propsToPass = {
    prop1: "Value 1",
    prop2: "Value 2",
  };
  return (
    <Fragment>
      <div className="absolute top-2 left-32 flex items-center">
        <Link to="/auth">
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-8"
          >
            <path
              d="M8.47839 17.154C8.65286 17.3121 8.88231 17.3955 9.11754 17.3863C9.35277 17.3772 9.57506 17.2762 9.73674 17.1051C9.89843 16.934 9.98664 16.7064 9.98246 16.471C9.97828 16.2356 9.88205 16.0113 9.71439 15.846L3.42759 9.90003H18.6964C18.9351 9.90003 19.164 9.8052 19.3328 9.63642C19.5016 9.46764 19.5964 9.23872 19.5964 9.00003C19.5964 8.76133 19.5016 8.53241 19.3328 8.36363C19.164 8.19485 18.9351 8.10003 18.6964 8.10003H3.42519L9.71439 2.15163C9.80317 2.07121 9.875 1.97388 9.92568 1.86534C9.97635 1.7568 10.0049 1.63923 10.0095 1.51954C10.0142 1.39984 9.99486 1.28042 9.95276 1.16828C9.91066 1.05613 9.8466 0.953521 9.76433 0.866457C9.68205 0.779393 9.58323 0.709628 9.47365 0.661252C9.36406 0.612876 9.24592 0.586863 9.12616 0.584737C9.00639 0.58261 8.8874 0.604414 8.77617 0.648869C8.66494 0.693324 8.5637 0.759537 8.47839 0.843626L0.776791 8.12762C0.5852 8.30815 0.458638 8.54693 0.416791 8.80682C0.38848 8.93699 0.3893 9.07181 0.419191 9.20163C0.462377 9.45778 0.587924 9.69287 0.776791 9.87123L8.47839 17.1552V17.154Z"
              fill="#333333"
            />
          </svg>
        </Link>
        <img src={icon} alt="" />
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
            clipRule="evenodd"
            d="M30.5575 22.1878C28.1015 22.1878 26.0895 21.4012 24.5217 19.8227C22.9513 18.2388 22.1674 16.1386 22.1674 13.5194C22.1674 10.9028 22.9432 8.81862 24.5003 7.26955C26.0628 5.72315 28.0801 4.94727 30.5575 4.94727C33.0323 4.94727 35.0843 5.71512 36.711 7.24815C38.343 8.77581 39.1617 10.8974 39.1617 13.6157C39.1617 14.1936 39.1216 14.7367 39.044 15.2423H27.454C27.553 15.9861 27.8848 16.5961 28.4493 17.0723C29.0111 17.5432 29.6184 17.7787 30.2686 17.7787C30.9241 17.7787 31.4137 17.7144 31.7347 17.586C32.0558 17.4523 32.2912 17.3185 32.441 17.19C32.5962 17.0616 32.7942 16.8449 33.0296 16.5372H38.6159C38.137 18.2281 37.1712 19.5952 35.7158 20.636C34.2657 21.6714 32.548 22.1878 30.5575 22.1878ZM33.7894 12.0104C33.7092 11.2265 33.3667 10.5871 32.7621 10.0948C32.1547 9.60252 31.4377 9.35638 30.611 9.35638C29.7896 9.35638 29.0967 9.60252 28.5349 10.0948C27.9704 10.5871 27.6172 11.2265 27.4754 12.0104H33.7894Z"
            fill="#CE0B9F"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M53.1401 16.6442C53.8811 15.9326 54.2531 14.9106 54.2531 13.5836C54.2531 12.2566 53.8811 11.2292 53.1401 10.5015C52.3963 9.77375 51.5402 9.40989 50.5716 9.40989C49.6085 9.40989 48.7524 9.77107 48.0032 10.4908C47.2595 11.2051 46.8903 12.2245 46.8903 13.5515C46.8903 14.8785 47.2595 15.9058 48.0032 16.6336C48.7524 17.3559 49.6085 17.7144 50.5716 17.7144C51.5402 17.7144 52.3963 17.3586 53.1401 16.6442ZM46.8903 7.33376C48.038 5.74455 49.6834 4.94727 51.8237 4.94727C53.9694 4.94727 55.7861 5.75792 57.2709 7.37657C58.7611 8.99788 59.5076 11.066 59.5076 13.5836C59.5076 16.0958 58.7611 18.1586 57.2709 19.7692C55.7861 21.3825 53.9855 22.1878 51.8666 22.1878C49.753 22.1878 48.0942 21.2995 46.8903 19.523V30H41.732V5.12921H46.8903V7.33376Z"
            fill="#CE0B9F"
          />
        </svg>
      </div>

      <div className="absolute top-20 flex items-center justify-evenly w-full font-raleway -left-10">
        <div className="w-[30em]">
          <div>
            <span className="font-semibold text-2xl">Basic Details</span>
            <br />
            <br />
            <span className="text-base">Account will be used by/for:</span>
          </div>
          <div
            className="flex items-center justify-evenly mb-8"
            onClick={handleAccType}
          >
            <div className="flex items-center bg-[#F2F2F2] rounded-2xl mt-4 py-2 px-4 ">
              <input
                type="radio"
                name="acc-type"
                id="personal"
                defaultChecked
              />
              <label
                htmlFor="personal"
                className={`uppercase font-medium text-sm text-[${personal}] text`}
              >
                &nbsp;Individual
              </label>
            </div>
            &emsp;
            <div className="flex items-center bg-[#F2F2F2] rounded-2xl py-2 px-4 mt-4 ">
              <input type="radio" name="acc-type" id="business" />
              <label
                htmlFor="business"
                className={`uppercase font-medium text-sm text-[${biz}]`}
              >
                &nbsp;Business
              </label>
            </div>
          </div>
          <div>
            <span className="text-base">
              Set your wallet’s primary currency
            </span>
            <div className="flex items-center bg-[#F2F2F2] rounded-2xl mt-4">
              <input
                type="text"
                name=""
                id=""
                placeholder="Select Currency"
                className="bg-transparent outline-none border-none w-full p-3 text-sm"
              />
              <svg
                width="40"
                height="40"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="px-3"
              >
                <path
                  d="M5.085 6.66669C4.19 6.66669 3.71167 7.72085 4.30167 8.39419L8.9025 13.6525C9.03938 13.8089 9.20812 13.9343 9.3974 14.0202C9.58668 14.1061 9.79214 14.1505 10 14.1505C10.2079 14.1505 10.4133 14.1061 10.6026 14.0202C10.7919 13.9343 10.9606 13.8089 11.0975 13.6525L15.6992 8.39419C16.2883 7.72085 15.81 6.66669 14.9158 6.66669H5.08417H5.085Z"
                  fill="#333333"
                />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-base">
              Provide all your required details for your account.
            </span>
            <div>
              <div className="bg-[#F2F2F2] rounded-2xl mt-4 ">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your First Name"
                  className=" w-full p-3 bg-transparent outline-none border-none text-sm"
                />
              </div>
              <div className="bg-[#F2F2F2] rounded-2xl mt-4 ">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your Last Name"
                  className=" w-full p-3 bg-transparent outline-none border-none text-sm"
                />
              </div>
              <div className="bg-[#F2F2F2] rounded-2xl mt-4">
                <input
                  type="date"
                  name=""
                  id=""
                  placeholder="Enter your Date of birth (dd/mm/yyyy)"
                  className="bg-transparent w-full p-3 outline-none border-none text-sm"
                />
              </div>
              <div className="rounded-2xl mt-4  bg-[#F2F2F2] flex items-center">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your Nationality"
                  className="bg-transparent w-full p-3 outline-none border-none text-sm"
                />
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="px-3"
                >
                  <path
                    d="M5.085 6.66669C4.19 6.66669 3.71167 7.72085 4.30167 8.39419L8.9025 13.6525C9.03938 13.8089 9.20812 13.9343 9.3974 14.0202C9.58668 14.1061 9.79214 14.1505 10 14.1505C10.2079 14.1505 10.4133 14.1061 10.6026 14.0202C10.7919 13.9343 10.9606 13.8089 11.0975 13.6525L15.6992 8.39419C16.2883 7.72085 15.81 6.66669 14.9158 6.66669H5.08417H5.085Z"
                    fill="#333333"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="h-96 w-0.5 bg-gray-300  "></div>

        <div className=" w-[25em]">
          <span>Provide your business address:</span>
          <br />
          <div>
            <div className="bg-[#F2F2F2] rounded-2xl mt-4">
              <input
                type="text"
                placeholder="Address Line 1"
                className="w-full p-3 bg-transparent outline-none border-none text-sm"
              />
            </div>
            <div className="bg-[#F2F2F2] rounded-2xl mt-4">
              <input
                type="text"
                placeholder="Address Line 2"
                className="w-full p-3 bg-transparent outline-none border-none text-sm"
              />
            </div>

            <div className="bg-[#F2F2F2] rounded-2xl mt-4">
              <input
                type="text"
                placeholder="Street"
                className="w-full p-3 bg-transparent outline-none border-none text-sm"
              />
            </div>
            <div className="rounded-2xl mt-4 bg-[#F2F2F2]">
              <input
                type="text"
                placeholder="City/Town"
                className="w-full p-3 bg-transparent outline-none border-none text-sm"
              />
            </div>
            <div className="rounded-2xl mt-4 bg-[#F2F2F2]">
              <input
                type="text"
                placeholder="State"
                className="w-full p-3 bg-transparent outline-none border-none text-sm"
              />
            </div>

            <div className="rounded-2xl mt-4 bg-[#F2F2F2]">
              <input
                type="text"
                placeholder="Country"
                className="w-full p-3 bg-transparent outline-none border-none text-sm"
              />
            </div>
            <div className="rounded-2xl mt-4 bg-[#F2F2F2]">
              <input
                type="text"
                placeholder="Pin-Code"
                className="w-full p-3 bg-transparent outline-none border-none text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 shadow-2xl w-full text-center h-24 flex items-center justify-center"
        onClick={handleEvent}
      >
        <input type="checkbox" name="TnC" id="TnC" />
        <label htmlFor="TnC">
          &nbsp;{" "}
          <span className="text-[#333333]">
            I have read and I agree to the{" "}
          </span>
          <span className="text-[#BF13BF]">Terms and Conditions</span>
          <span className="text-[#333333]">, and the </span>
          <span className="text-[#BF13BF]">Privacy Policy.</span>
        </label>
        {/* } <Link to="/auth" state={propsToPass}> */}
        <div className={`flex items-center w-80 bg-[${btn}] ml-20 rounded-2xl`}>
          <input
            type="button"
            value="next"
            className="uppercase py-4 w-full text-white border-none outline-none pl-12"
            id="next-btn"
          />
          <svg
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pr-4"
          >
            <path
              d="M13.5215 20.154C13.347 20.3121 13.1176 20.3955 12.8824 20.3863C12.6471 20.3772 12.4248 20.2762 12.2632 20.1051C12.1015 19.934 12.0133 19.7064 12.0175 19.471C12.0216 19.2356 12.1179 19.0113 12.2855 18.846L18.5723 12.9H3.30352C3.06483 12.9 2.83591 12.8052 2.66712 12.6364C2.49834 12.4676 2.40352 12.2387 2.40352 12C2.40352 11.7613 2.49834 11.5324 2.66712 11.3636C2.83591 11.1948 3.06483 11.1 3.30352 11.1H18.5747L12.2855 5.15163C12.1967 5.07121 12.1249 4.97388 12.0742 4.86534C12.0236 4.7568 11.9951 4.63923 11.9904 4.51954C11.9858 4.39984 12.005 4.28042 12.0471 4.16828C12.0892 4.05613 12.1533 3.95352 12.2356 3.86646C12.3179 3.77939 12.4167 3.70963 12.5263 3.66125C12.6358 3.61288 12.754 3.58686 12.8738 3.58474C12.9935 3.58261 13.1125 3.60441 13.2237 3.64887C13.335 3.69332 13.4362 3.75954 13.5215 3.84363L21.2231 11.1276C21.4147 11.3082 21.5413 11.5469 21.5831 11.8068C21.6114 11.937 21.6106 12.0718 21.5807 12.2016C21.5375 12.4578 21.412 12.6929 21.2231 12.8712L13.5215 20.1552V20.154Z"
              fill="white"
            />
          </svg>
        </div>
        {/* } </Link> */}
      </div>
    </Fragment>
  );
}
