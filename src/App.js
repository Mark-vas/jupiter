import "./App.css";
import Header from "./Components/Header/Header";
import ImagesContainer from "./Components/Images/ImagesContainer";
import { Provider } from "react-redux";
import store from "./Store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <ImagesContainer />
      </div>
    </Provider>
  );
}

export default App;
