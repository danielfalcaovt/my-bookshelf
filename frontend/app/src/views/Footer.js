export default function Footer() {
    return(
        <footer>
        <div id="copyright">
          {`Copyright 2023 - ${new Date().getFullYear()} ©`}
        </div>
        <div id="socialmedia">
          <h1>Developer:</h1>
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
    )
};
