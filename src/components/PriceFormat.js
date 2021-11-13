const PriceFormat = ({ amount, label }) => {
  const price = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(amount);
  return (
    <div>{label}: {price}</div>
  )
}

export default PriceFormat