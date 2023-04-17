export default function Login(props) {
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
