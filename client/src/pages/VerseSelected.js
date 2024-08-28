import Header from "../components/Header";
import Subheader from "../components/Subheader";
import Verse from "../components/Verse";
import { useLocation } from "react-router-dom";

function VerseSelected() {
  const path = useLocation().pathname;
  const params = useLocation().search;
  return (
    <>
      <Header path={path} queryString={params} />
      <Subheader selection="Verse"/>
      <main className="container">
        <Verse />
      </main>
    </>
  );
}

export default VerseSelected;
