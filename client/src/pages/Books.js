import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import Header from "../components/Header";
import Subheader from "../components/Subheader";
import Bookslist from "../components/Bookslist";
import { useLocation } from 'react-router-dom';

function Books() {
  const queryClient = useQueryClient();
  const path = useLocation().pathname;
  const params = useLocation().search;

  // clear cache when component mounts
  useEffect(() => {
    queryClient.clear();
  }, [queryClient]);

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
