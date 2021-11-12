import { useState } from 'react'
import './App.css';
import { years, grouppedByYear } from './gt350-data'
import { ReactComponent as Logo } from './logo-gt350.svg'


const YearSelector = ({ years, setYear }) => (
  <>
    <nav className="year-selector">
      <ul>
        <li><button onClick={() => setYear('all')}>All</button></li>
        {years.map(year => (
          <li key={year}>
            <button onClick={() => setYear(year)}>{year}</button>
          </li>
        ))}
      </ul>
    </nav>
  </>
)

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

const YearContent = ({ year }) => (
  <div className="year">
    <h1 className="year__heading">{year}</h1>
    <div className="year__data">
    <h2>Pricing</h2>
      <div>Base prices</div>
      {grouppedByYear[year].prices.map(([trim, price]) => <PriceFormat key={trim} amount={price} label={trim} />)} 
      <h2>Colors</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr'}}>
        {grouppedByYear[year].colors.map(item => <ColorCard key={item.name} {...item} />)}
      </div>
      <h2>Stripe Options</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr'}}>
      {grouppedByYear[year].stripes.map(item => <StripeCard key={item.name} {...item} />)}
      </div>
    </div>
  </div>
) 

const DisplayByYear = ({ selectedYear }) => (
  <>
    {console.log('selectedYear', selectedYear)}
    {selectedYear === 'all'
      ? years.map(year => <YearContent key={year} {...{ year }} />)
      : <YearContent year={selectedYear} />
    }
  </>
)


const App = () => {
  const [year, setYear] = useState('all')

  console.log('App->year', year)

  return (
    <div className="App">
      <header>
        <Logo width="200" />
      </header>

      <YearSelector {...{ years, setYear }} />

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
