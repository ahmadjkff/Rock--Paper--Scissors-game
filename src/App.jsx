import "./App.css";
import Header from "./components/Header/Header";
import Modal from "./components/Modal";
import PlayGroundManager from "./components/playground/PlayGroundManager";
import { GameProvider } from "./contexts/GameContext";

function App() {
  return (
    <div className="flex h-screen flex-col items-center bg-backgroundGradient py-16 font-barlow">
      <GameProvider>
        <Header />
        <PlayGroundManager />
        <Modal></Modal>
      </GameProvider>
    </div>
  );
}

export default App;
