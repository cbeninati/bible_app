import Header from "../components/Header";
import Subheader from "../components/Subheader";
import Chapterslist from "../components/Chapterslist";
import { useLocation } from "react-router-dom";

function Chapters() {
  const path = useLocation().pathname;
  const params = useLocation().search;
  return (
    <>
      <Header path={path} queryString={params} />
      <Subheader selection="Chapter"/>
      <main className="container">
        <Chapterslist />
      </main>
    </>
  );
}

export default Chapters;
