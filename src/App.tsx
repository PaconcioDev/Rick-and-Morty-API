import { Header } from "./components/Header/Header";
import { CharacterList } from "./components/CharacterList/CharacterList";
import "./App.css";

function App() {
  return (
    <>
      <div className="app text-light">
        <Header/>
        <CharacterList />
      </div>
    </>
  );
}

export default App;
