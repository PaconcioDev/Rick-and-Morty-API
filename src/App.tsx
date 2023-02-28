import { CharacterList } from "./components/CharacterList/CharacterList";
import "./App.css";

function App() {
  return (
    <>
      <div className="app text-light">
        <h1 className="text-center display-1 py-4 fw-bolder main-title">Rick and Morty</h1>
        <CharacterList />
      </div>
    </>
  );
}

export default App;
