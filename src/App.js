import { Reset } from "styled-reset";
import styled, {createGlobalStyle} from "styled-components";
import Header from "./Header";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300,400,700&family=Rubik&display=swap');
body {
  background: #2d2d2d;
  color: #fff;
  font-family: Roboto, sans-serif;
}
`;


function App() {
  return (
    <div>
      <Reset />
      <GlobalStyles />
      <Header />
    </div>
  );
}

export default App;
