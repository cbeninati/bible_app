import Header from "../components/Header";
import Subheader from "../components/Subheader";
import Biblelist from "../components/Biblelist";
import { useLocation } from 'react-router-dom';

function Home() {
  const path = useLocation().pathname;
  return (
    <>
      <Header path={path} />
      <Subheader selection="Translation"/>
      <main className="container">
        <Biblelist />
      </main>
    </>
  );
}

export default Home;
