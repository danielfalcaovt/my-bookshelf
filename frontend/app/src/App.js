import Header from "./views/Header";
import Greetings from "./views/Greetings";
import Main from "./views/Main";
import "./styles/styles.css";
import { useEffect,useState } from "react";
import bookData from "./data";

export default function App() {
  const [data, setData] = useState();
  const [search, setSearch] = useState();

  console.log(bookData);

  useEffect(()=>{
    setData(bookData);
  },[data])

  return (
    <>
      <Header />
      <Greetings />
      <Main data={data} />
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
