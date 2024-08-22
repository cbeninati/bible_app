import Subheader from "../components/Subheader";
import Bookslist from "../components/Bookslist";

function Books() {
  return (
    <>
      <Subheader selection="Book"/>
      <main class="container">
        <Bookslist />
      </main>
    </>
  );
}

export default Books;
