import Proto, { LinkCard } from "./Cards-proto";

export default function Dos(props) {
  let a = false;
  const CardLink = () => {
    if (a) {
      // show Side
    } else {
      // dont show
    }
  };
  return (
    <div className="grid gap-10 grid-col-2 grid-row-2 ">
      <div>
        <Proto show={1} card={1} />
      </div>
      <div>
        <Proto card={0} />
      </div>
      <div>
        <LinkCard CardLink={CardLink} />
      </div>
    </div>
  );
}
