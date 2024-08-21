import Subheader from "../components/Subheader";
import Chapterslist from "../components/Chapterslist"

function Chapters() {
  return (
    <>
      <Subheader selection="Chapter"/>
      <main class="container">
        <Chapterslist />
      </main>
    </>
  );
}

export default Chapters;
