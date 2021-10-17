import './App.css';
import { years, grouppedByYear } from './gt350-data'
import { ReactComponent as Logo } from './logo-gt350.svg'

const PriceFormat = ({ amount, label }) => {
  const price = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(amount);
  return (
    <div>{label}: {price}</div>
  )
}


const ColorCard = ({
  hex,
  name
}) => (
  <div>
    <div style={{ background: hex, height: '50px', width: '50px', border: '1px solid white'}}></div>
    <div>{name}</div>
  </div>
)

const StripeCard = ({
  accentColor,
  bgColor,
  name,
}) => (
  <div>
    <div className={`stripe-color ${bgColor} ${accentColor}`}>
      <div className="stripe">&nbsp;</div>
      <div className="stripe">&nbsp;</div>
    </div>
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
            <h1 className="year">{year}</h1>
            <div className="year__data">
            <h2>Pricing</h2>
              <div>Base prices</div>
              {grouppedByYear[year].prices.map(([trim, price]) => <PriceFormat key={trim} amount={price} label={trim} />)} 
              <h2>Colors</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr'}}>
                {grouppedByYear[year].colors.map(item => <ColorCard {...item} />)}
              </div>
              <h2>Stripe Options</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr'}}>
              {grouppedByYear[year].stripes.map(item => <StripeCard {...item} />)}
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
// https://docs.google.com/spreadsheets/d/1t12CKnAaJGNNKfOPxAApFMStWioaABhqjzwRpHdKmnE/edit#gid=876107477
