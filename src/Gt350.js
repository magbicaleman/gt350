import './App.css';
import { colorsByYear, years } from './gt350-data'
import { ReactComponent as Logo } from './logo-gt350.svg'

const ColorCard = ({
  hex,
  name
}) => (
  <div>
    <div style={{ background: hex, height: '50px', width: '50px', border: '1px solid white'}}></div>
    <div>{name}</div>
  </div>
)

function App() {
  // const formatNumber = num => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num)
  return (
    <div className="App">
      <header>
        <Logo width="200" />
      </header>

      <main>
        {years.map(year => (
          <div key={year}>
            <h1>{year}</h1>
            <div>
              <h2>Colors</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr'}}>
                {colorsByYear[year].map(({name, hex}) => <ColorCard {...{ name, hex }} />)}
              </div>
            </div>
          </div>
        ))}
      </main>

    </div>
  );
}

export default App;

// sources:
// https://mustangfanclub.com/shelby-gt350-gt350r-production-numbers/
