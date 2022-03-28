import { Button } from 'react-bootstrap';
import './App.css';
import CardGroups from './components/CardGroups/CardGroups';


function App() {
  return (
    <div className="App">
      <Button variant="primary" >My Buttons</Button>
      <CardGroups></CardGroups>
    </div>

  );
}

export default App;
