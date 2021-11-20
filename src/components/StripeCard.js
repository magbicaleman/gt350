import styles from './StripeCard.module.css'

const StripeCard = ({
  accentColor,
  bgColor,
  name,
}) => (
  <div>
    <div className={`stripe-color ${bgColor} ${accentColor} ${styles.stripeSwatch}`}>
      <div className="stripe">&nbsp;</div>
      <div className="stripe">&nbsp;</div>
    </div>
    <div className={styles.name}>{name}</div>
  </div>
)

export default StripeCard