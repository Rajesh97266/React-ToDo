import "./App.css";
import ToDo from "./components/ToDo";

function App() {
  return (
    <>
      <div className="max-w-[85vw] mx-auto h-screen px-4 py-10 flex ">
        <ToDo />
      </div>
    </>
  );
}

export default App;
