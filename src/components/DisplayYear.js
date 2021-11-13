import { years } from '../gt350-data'
import YearContent from "./YearContent"

const DisplayByYear = ({ selectedYear }) => (
  <>
    {console.log('selectedYear', selectedYear)}
    {selectedYear === 'all'
      ? years.map(year => <YearContent key={year} {...{ year }} />)
      : <YearContent year={selectedYear} />
    }
  </>
)

export default DisplayByYear