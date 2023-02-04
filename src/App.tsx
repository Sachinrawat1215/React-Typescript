import ControlPanel from "./Chapters/ControlPanel";
import ReactComponentWithTypescript from "./Chapters/ReactComponentWithTypescript";
import PropWithChildren from "./Chapters/PropWithChildren";

function App() {
  return (
    <div className="App">
      {/* Chapter 1 React component with typescript */}
      <ReactComponentWithTypescript name="Sachin Rawat" />

      {/* Chapter 2 Typing component exercise */}
      <ControlPanel name="Admin" onChange={(e) => console.log(e)} />

      {/* Chapter 3 Prop with children */}
      <PropWithChildren />
    </div>
  );
}

export default App;
