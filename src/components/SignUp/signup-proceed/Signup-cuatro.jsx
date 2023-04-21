export default function SignCu(props) {
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

      <div className="mt-10 flex items-center cursor-pointer">
        <input
          type="button"
          value="proceed"
          className="bg-[#BF13BF] w-full border-none rounded-2xl py-4 text-white text-center text-sm uppercase font-medium cursor-pointer"
          onClick={() => props.update("success")}
          // Change the entire page to success
        />
      </div>
    </div>
  );
}
