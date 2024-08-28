import Header from "../components/Header";
import Subheader from "../components/Subheader";
import Verseslist from "../components/Verseslist";
import { useLocation } from "react-router-dom";

function Verses() {
  const path = useLocation().pathname;
  const params = useLocation().search;
  return (
    <>
      <Header path={path} queryString={params} />
      <Subheader selection="Verse"/>
      <main className="container">
        <Verseslist />
      </main>
    </>
  );
}

export default Verses;
