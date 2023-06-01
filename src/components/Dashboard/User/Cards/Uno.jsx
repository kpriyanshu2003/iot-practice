import img from "../../../../images/balloons.svg";
export default function Uno(props) {
  return (
    <div>
      <span>
        No cards added yet! Link a card now to enable account features.
      </span>
      <br />
      <div
        className="flex items-center cursor-pointer text-white bg-[#BF13BF] justify-center rounded-2xl p-2 w-96 mt-5"
        onClick={() => props.update(2)}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.39961 2.2001C8.39961 2.04097 8.33639 1.88836 8.22387 1.77583C8.11135 1.66331 7.95874 1.6001 7.79961 1.6001C7.64048 1.6001 7.48787 1.66331 7.37535 1.77583C7.26282 1.88836 7.19961 2.04097 7.19961 2.2001V7.2001H2.19961C2.04048 7.2001 1.88787 7.26331 1.77535 7.37583C1.66282 7.48836 1.59961 7.64097 1.59961 7.8001C1.59961 7.95923 1.66282 8.11184 1.77535 8.22436C1.88787 8.33688 2.04048 8.4001 2.19961 8.4001H7.19961V13.4001C7.19961 13.5592 7.26282 13.7118 7.37535 13.8244C7.48787 13.9369 7.64048 14.0001 7.79961 14.0001C7.95874 14.0001 8.11135 13.9369 8.22387 13.8244C8.33639 13.7118 8.39961 13.5592 8.39961 13.4001V8.4001H13.3996C13.5587 8.4001 13.7114 8.33688 13.8239 8.22436C13.9364 8.11184 13.9996 7.95923 13.9996 7.8001C13.9996 7.64097 13.9364 7.48836 13.8239 7.37583C13.7114 7.26331 13.5587 7.2001 13.3996 7.2001H8.39961V2.2001Z"
            fill="white"
          />
        </svg>
        <input
          type="button"
          value="Link a card"
          className="uppercase cursor-pointer"
        />
      </div>
      <img src={img} alt="" />
    </div>
  );
}
