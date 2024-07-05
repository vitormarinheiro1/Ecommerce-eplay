import { BrowserRouter } from "react-router-dom";
import { GlobalCss } from "./styles";
import Header from "./components/Header";
import { Provider } from "react-redux";
import { store } from "./store";
import Rotas from "./routes";
import Footer from "./components/Footer";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
