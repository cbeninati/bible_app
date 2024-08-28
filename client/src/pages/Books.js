import Header from "../components/Header";
import Subheader from "../components/Subheader";
import Bookslist from "../components/Bookslist";
import { useLocation } from 'react-router-dom';

function Books() {
  const path = useLocation().pathname;
  const params = useLocation().search;
  return (
    <>
      <Header path={path} queryString={params} />
      <Subheader selection="Book"/>
      <main className="container">
        <Bookslist />
      </main>
    </>
  );
}

export default Books;
