export default function Details() {
  return (
    <div className="grid gap-10 grid-col-1 grid-row-3 pr-40">
      <div className="shadow-md p-10 rounded-2xl">
        <div>
          <span className="font-medium text-sm text-[#787878]">
            Log in credentials
          </span>
        </div>
        <div>
          <span className="font-medium text-xs text-[#787878]">
            Phone Number :
          </span>
          <span className="font-medium text-base text-[#333333]">
            +234 1234567890
          </span>
        </div>
        <div>
          <span className="font-medium text-xs text-[#787878]">
            Email ID :{" "}
          </span>
          <span className="font-medium text-base text-[#333333]">
            abhijeetmohapatra@gmail.com
          </span>
        </div>
        <div>
          <span className="text-[#BF13BF] font-semibold">Change Password</span>
        </div>
      </div>
      <div className="shadow-md p-8 rounded-2xl">
        <div>
          <span className="font-medium text-sm text-[#787878]">
            Basic Details
          </span>
        </div>
        <div>
          <span className="font-medium text-base text-[#333333]">
            Abhijeet Mohapatra
          </span>
        </div>
        <div>
          <span className="font-normal text-base text-[#333333]">
            Date of birth:
          </span>
          <span className="font-medium text-base text-[#333333]">
            {" "}
            11/11/2023
          </span>
        </div>
        <div>
          <span className="font-normal text-base text-[#333333]">
            Nationality:{" "}
          </span>
          <span className="font-medium text-base text-[#333333]"> Indian</span>
        </div>
      </div>
      <div className="shadow-md p-10 rounded-2xl">
        <div>
          <span className="font-normal text-base text-[#787878]">
            Business Details
          </span>
        </div>
        <br />
        <div>
          <span className="font-medium text-base text-[#333333]">eLitmus</span>
          <br />
          <span className="font-normal text-base mt-3">Private Limited</span>
          <br />
          <span className="font-normal text-base text-[#333333]">
            Primary Currency:
          </span>
          <span className="font-medium text-base text-[#333333]">USD</span>
          <br />
          <span className="font-normal text-base text-[#333333]">
            307, B block, Habitat Green apartment, Lane 7c, 751031
          </span>
        </div>
      </div>
    </div>
  );
}
