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

export default StripeCard