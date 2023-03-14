import './App.css';
import ScatterPlot from './components/ScatterPlot';
import BarChart from './components/BarChart';
import data from './components/data'
function App() {
  return (
    <div className="App">
      <ScatterPlot data={data} />
      <BarChart data={data} />
    </div>
  );
}

export default App;
