const ColorCard = ({
  hex,
  name
}) => (
  <div>
    <div style={{ background: hex, height: '50px', width: '50px', border: '1px solid white'}}></div>
    <div>{name}</div>
  </div>
)

export default ColorCard