import Header from "./components/Header";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./App.css";
import "./components/DisplayCV.css";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="form-container">
        <General />
        <div className="line-break"></div>
        <Experience />
        <div className="line-break"></div>
        <Education />
      </div>
    </div>
  );
}

export default App;
