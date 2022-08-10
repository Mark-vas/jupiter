import "./App.css";
import Header from "./Components/Header/Header";
import ImagesContainer from "./Components/Images/ImagesContainer";
import { Provider } from "react-redux";
import store from "./Store/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharacterContainer from "./Components/CharacterContainer/CharacterContainer";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path="/jupiter" element={<ImagesContainer />} />
            <Route path="/jupiter/:id" element={<CharacterContainer />} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
