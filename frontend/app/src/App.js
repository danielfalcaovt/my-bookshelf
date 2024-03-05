import Header from "./views/Header";
import Greetings from "./views/Greetings";
import Main from "./views/Main";
import "./styles/styles.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState();
  const [isolated, setIso] = useState();
  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:5500/getData");
      const data = response.data;
      setData(data);
      console.log(data);
    } catch (err) {
      setIso("Data not found.")
      console.error(err);
    }
  };
  const [search, setSearch] = useState();
  function handleSet() {
    const searched = document.querySelector("#search");
    const pesquisado = String(searched.value);
    setSearch(pesquisado);
  }
  async function handleSearch(evt) {
    evt.preventDefault();
    try {
      const response = await axios.post("http://localhost:5500/getData", {
        searching: search,
      });
      const data = response.data;
      console.log(data.data[0]);
      setIso(data.data[0]);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Header func={handleSearch} handleSet={handleSet} />
      <Greetings />
      <Main data={data} iso={isolated} />
      <footer>
        <div id="copyright">
          {`Copyright 2023 - ${new Date().getFullYear()} ©`}
        </div>
        <div id="socialmedia">
          <h1>Dev. Social Media</h1>
          <ul>
            <li>
              <a href="https://github.com/danielfalcaovt">Github</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/daniel-falc%C3%A3o-2a2901147/">
                LinkedIN
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/deenedev">Instagram</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
