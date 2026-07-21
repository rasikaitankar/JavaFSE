import './App.css';
import { CalculateScore } from './components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore Name={"Steeve"} School={"DNV Public School"} total={284} goal={3}></CalculateScore>
    {/* <h1>Hello</h1> */}
    </div>
    
  );
}

export default App;
