import { RecoilRoot } from "recoil";
import "./App.css";
import SearchBox from "./components/SearchBox";
import PokemonInfo from "./components/PokemonInfo";

function App() {
  return (
    <div>
      <RecoilRoot>
        <SearchBox />
        <PokemonInfo />
      </RecoilRoot>
    </div>
  );
}

export default App;
