import Header from "./views/Header";
import Greetings from "./views/Greetings";
import Main from "./views/Main";
import Footer from "./views/Footer";
import { useEffect, useState } from "react";
import bookData from "./data";
import { DataContext } from "./context/DataContext";

export default function App() {
  const [data, setData] = useState();

  useEffect(() => {
    setData({ books: bookData });
  }, []);

  return (
    <>
      <DataContext.Provider value={{ data, setData }}>
        <Header />
        <Greetings />
        <Main />
        <Footer />
      </DataContext.Provider>
    </>
  );
}
