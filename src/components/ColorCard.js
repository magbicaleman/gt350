import styles from './ColorCard.module.css'
import * as pillStyles from './Pill.module.css'

const ColorCard = ({
  hex,
  name,
  msrp,
}) => {
  const price = msrp && new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(msrp);
  return (
      <div>
        <div className={styles['color-swatch']} style={{ background: hex }}></div>
        <div>
          <div className={styles.name}>{name}</div>
          { price && (
            <div className={styles.price}>
              <span className={pillStyles.normal}>msrp</span> {price}
            </div>
          )}
        </div>
      </div>
    )
  }

export default ColorCard