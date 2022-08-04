import { grouppedByYear } from '../gt350-data'
import ColorCard from "./ColorCard"
import PriceFormat from "./PriceFormat"
import StripeCard from "./StripeCard"
import * as pillStyles from './Pill.module.css'
import * as colorCardStyles from './ColorCard.module.css'

const YearContent = props => (
  <div className="year">
    <h1 className="year__heading">{props.year}</h1>
    <div className="year__data">
    <h2>Pricing</h2>
      <div>Base prices</div>
      {grouppedByYear[props.year].prices.map(([trim, price]) => <PriceFormat key={trim} amount={price} label={trim} />)} 
      <h2>Colors</h2>
      <div style={{ display: 'grid', 'grid-template-columns': '1fr 1fr 1fr 1fr', gap: '5px'}}>
        {grouppedByYear[props.year].colors.map(item => <ColorCard key={item.name} {...item} />)}
      </div>
      <h2 style={{marginBottom: 0}}>Stripe Options</h2>
      <div className={colorCardStyles.price}>
        <span className={pillStyles.normal}>msrp</span> {grouppedByYear[props.year].stripeMsrp}
      </div>
      <div style={{ display: 'grid', 'grid-template-columns': '1fr 1fr 1fr 1fr', gap: '5px', 'margin-top': '0.83em'}}>
        {grouppedByYear[props.year].stripes.map(item => <StripeCard key={item.name} {...item} />)}
      </div>
    </div>
  </div>
) 

export default YearContent