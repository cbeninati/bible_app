import Subheader from "../components/Subheader";
import Biblelist from "../components/Biblelist";

function Home() {
  return (
    <>
      <Subheader />
      <main class="container">
        <Biblelist />
      </main>
    </>
  );
}

export default Home;
