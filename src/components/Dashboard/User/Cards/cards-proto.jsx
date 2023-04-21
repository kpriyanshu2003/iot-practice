import card from "../../../../images/card.png";
import cardG from "../../../../images/card_gray.png";
import sim from "../../../../images/sim.svg";
import mastercard from "../../../../images/mastercard.svg";
import mastercardBW from "../../../../images/mastercard-bw.svg";

export default function CardP(props) {
  return (
    <div className="relative w-[328px] h-[196px] shadow-2xl">
      <img
        src={props.card === 0 ? cardG : card}
        alt=""
        className={`object-fill ${
          props.show === 1 ? "border-4 border-[#29CC7A]" : ""
        } rounded-3xl`}
      />
      <div>
        <img src={sim} alt="" className="absolute top-[18px] left-[22px]" />
        <img
          src={props.card === 0 ? mastercardBW : mastercard}
          alt=""
          className="absolute top-[17px] left-[259px]"
        />
      </div>
      <div>
        <span className="absolute top-[82px] left-[23px] text-white font-bold text-xl">
          **** **** **** 2368
        </span>
        <span className="absolute top-[136px] left-[20px] text-white italic font-normal text-[10px]">
          Card holder name
        </span>
        <span className="absolute top-[157px] left-[20px] text-white font-bold text-[13px]">
          Vickram Vijay Prasad Pati
        </span>
        <span className="absolute top-[136px] left-[257px] text-white  italic font-normal text-[10px]">
          Expiry date
        </span>
        <span className="absolute top-[157px] left-[257px] text-white  italic font-normal text-[13px]">
          01/ 25
        </span>
      </div>
      {props.show && (
        <div className="absolute flex items-center justify-center bg-[#29CC7A] rounded-b-2xl right-6 border border-red-300 p-1 px-3">
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.02564 1.00439C8.79914 1.00439 11.0474 3.25262 11.0474 6.02613C11.0474 8.79963 8.79914 11.0479 6.02564 11.0479C3.25214 11.0479 1.00391 8.79963 1.00391 6.02613C1.00391 3.25262 3.25214 1.00439 6.02564 1.00439ZM7.64264 4.50454L5.39792 6.74926L4.40864 5.75997C4.33724 5.69345 4.24281 5.65723 4.14524 5.65895C4.04767 5.66067 3.95457 5.7002 3.88557 5.7692C3.81656 5.83821 3.77703 5.9313 3.77531 6.02888C3.77359 6.12645 3.80981 6.22088 3.87634 6.29228L5.13177 7.54771C5.20239 7.61824 5.29811 7.65786 5.39792 7.65786C5.49773 7.65786 5.59345 7.61824 5.66407 7.54771L8.17494 5.03685C8.21194 5.00236 8.24162 4.96078 8.26221 4.91459C8.28279 4.86839 8.29386 4.81851 8.29475 4.76794C8.29565 4.71737 8.28634 4.66714 8.2674 4.62024C8.24846 4.57335 8.22026 4.53075 8.1845 4.49498C8.14874 4.45922 8.10613 4.43102 8.05924 4.41208C8.01234 4.39314 7.96211 4.38383 7.91154 4.38473C7.86097 4.38562 7.8111 4.39669 7.7649 4.41727C7.7187 4.43786 7.67712 4.46754 7.64264 4.50454Z"
              fill="white"
            />
          </svg>
          <span className="font-extrabold text-[8px] text-white">Default</span>
        </div>
      )}
    </div>
  );
}

export function LinkCard(props) {
  return (
    <div
      className="w-[328px] h-[196px] border-dotted bg-[#F2F2F2] rounded-3xl border-[#DADADA] border-4 grid place-items-center"
      onClick={() => props.CardLink}
    >
      <div>
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.1998 6.60005C25.1998 6.12266 25.0102 5.66482 24.6726 5.32726C24.335 4.98969 23.8772 4.80005 23.3998 4.80005C22.9224 4.80005 22.4646 4.98969 22.127 5.32726C21.7895 5.66482 21.5998 6.12266 21.5998 6.60005V21.6001H6.59981C6.12242 21.6001 5.66458 21.7897 5.32701 22.1273C4.98945 22.4648 4.7998 22.9227 4.7998 23.4001C4.7998 23.8774 4.98945 24.3353 5.32701 24.6728C5.66458 25.0104 6.12242 25.2001 6.59981 25.2001H21.5998V40.2001C21.5998 40.6774 21.7895 41.1353 22.127 41.4729C22.4646 41.8104 22.9224 42.0001 23.3998 42.0001C23.8772 42.0001 24.335 41.8104 24.6726 41.4729C25.0102 41.1353 25.1998 40.6774 25.1998 40.2001V25.2001H40.1998C40.6772 25.2001 41.135 25.0104 41.4726 24.6728C41.8102 24.3353 41.9998 23.8774 41.9998 23.4001C41.9998 22.9227 41.8102 22.4648 41.4726 22.1273C41.135 21.7897 40.6772 21.6001 40.1998 21.6001H25.1998V6.60005Z"
            fill="#BF13BF"
          />
        </svg>
        <span className="font-medium text-base text-[#BF13BF]">
          Link a card
        </span>
      </div>
    </div>
  );
}
