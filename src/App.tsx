import { RecoilRoot } from "recoil";
import "./App.css";
import SearchBox from "./components/SearchBox";

function App() {
  return (
    <div>
      <RecoilRoot>
        <SearchBox />
      </RecoilRoot>
    </div>
  );
}

export default App;
