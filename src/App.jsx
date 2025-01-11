import "./App.css";
import Header from "./components/Header";
import Modal from "./components/Modal";
import PlayGround from "./components/PlayGround";

function App() {
  return (
    <div className="flex h-screen flex-col items-center bg-backgroundGradient py-16 font-barlow">
      <Header />
      <PlayGround />
      <Modal></Modal>
    </div>
  );
}

export default App;
