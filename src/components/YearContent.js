import { grouppedByYear } from '../gt350-data'
import ColorCard from "./ColorCard"
import PriceFormat from "./PriceFormat"
import StripeCard from "./StripeCard"
import * as pillStyles from './Pill.module.css'
import * as colorCardStyles from './ColorCard.module.css'

const YearContent = ({ year }) => (
  <div className="year">
    <h1 className="year__heading">{year}</h1>
    <div className="year__data">
    <h2>Pricing</h2>
      <div>Base prices</div>
      {grouppedByYear[year].prices.map(([trim, price]) => <PriceFormat key={trim} amount={price} label={trim} />)} 
      <h2>Colors</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '5px'}}>
        {grouppedByYear[year].colors.map(item => <ColorCard key={item.name} {...item} />)}
      </div>
      <h2 style={{marginBottom: 0}}>Stripe Options</h2>
      <div className={colorCardStyles.price}>
        <span className={pillStyles.normal}>msrp</span> {grouppedByYear[year].stripeMsrp}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '5px', marginTop: '0.83em'}}>
        {grouppedByYear[year].stripes.map(item => <StripeCard key={item.name} {...item} />)}
      </div>
    </div>
  </div>
) 

export default YearContent