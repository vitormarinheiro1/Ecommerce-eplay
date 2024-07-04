import { BrowserRouter } from "react-router-dom";
import { GlobalCss } from "./styles";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
    </BrowserRouter>
  );
}

export default App;
