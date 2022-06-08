import './App.css';
import { years } from './gt350-data'
import { ReactComponent as Logo } from './logo-gt350.svg'
import YearSelector from './components/YearSelector';
import DisplayByYear from './components/DisplayYear';

const App = () => (
  <div className="App">
    <header>
      <Logo width="200" />
      <YearSelector years={years} />
    </header>

    <main>
      <DisplayByYear />
    </main>

  </div>
)

export default App;

// sources:
// https://mustangfanclub.com/shelby-gt350-gt350r-production-numbers/
// https://docs.google.com/spreadsheets/d/1t12CKnAaJGNNKfOPxAApFMStWioaABhqjzwRpHdKmnE/edit#gid=876107477
