import Subheader from "../components/Subheader";
import Verse from "../components/Verse";

function VerseSelected() {
  return (
    <>
      <Subheader selection="Verse"/>
      <main className="container">
        <Verse />
      </main>
    </>
  );
}

export default VerseSelected;
