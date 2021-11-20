import { grouppedByYear } from '../gt350-data'
import ColorCard from "./ColorCard"
import PriceFormat from "./PriceFormat"
import StripeCard from "./StripeCard"

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

export default YearContent