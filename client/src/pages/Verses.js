import Subheader from "../components/Subheader";
import Verseslist from "../components/Verseslist";

function Verses() {
  return (
    <>
      <Subheader selection="Verse"/>
      <main className="container">
        <Verseslist />
      </main>
    </>
  );
}

export default Verses;
