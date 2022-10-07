import "./App.css";
import Header from "./Components/Header/Header";
import CharactersContainer from "./Components/Characters/CharactersContainer";
import { Provider } from "react-redux";
import store from "./Store/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharacterContainer from "./Components/CharacterContainer/CharacterContainer";
import EpisodesContainer from "./Components/Episodes/EpisodesContainer";
import EpisodePage from "./Components/Episodes/EpisodePage/EpisodePage";
import LocationsContainer from "./Components/Locations/LocationsContainer";
import LocationPage from "./Components/Locations/LocationPage/LocationPage";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path="/jupiter" element={<CharactersContainer />} />
            <Route path="/jupiter/:id" element={<CharacterContainer />} />
            <Route path="/jupiter/episodes" element={<EpisodesContainer />} />
            <Route path="/jupiter/episodes/:id" element={<EpisodePage />} />
            <Route path="/jupiter/locations" element={<LocationsContainer />} />
            <Route path="/jupiter/locations/:id" element={<LocationPage />} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
