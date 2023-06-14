import ReactDOM from "react-dom";
import "./styles.css";

import { Header } from "./Components/Header";
import { MainContent } from "./Components/MainContent";
import { Footer } from "./Components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
