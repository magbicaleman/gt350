import { useState } from 'react'
import './App.css';
import { years } from './gt350-data'
import { ReactComponent as Logo } from './logo-gt350.svg'
import YearSelector from './components/YearSelector';
import DisplayByYear from './components/DisplayYear';

const App = () => {
  const [year, setYearState] = useState('all')
  const setYear = year => {
    setYearState(year)
    window.scrollTo(0,0)
  }

  return (
    <div className="App">
      <header>
        <Logo width="200" />
        <YearSelector {...{ years, setYear, selectedYear: year }} />
      </header>

      <main>
        <DisplayByYear selectedYear={year} />
      </main>

    </div>
  );
}

export default App;

// sources:
// https://mustangfanclub.com/shelby-gt350-gt350r-production-numbers/
// https://docs.google.com/spreadsheets/d/1t12CKnAaJGNNKfOPxAApFMStWioaABhqjzwRpHdKmnE/edit#gid=876107477
