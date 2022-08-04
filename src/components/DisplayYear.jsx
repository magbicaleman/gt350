import { years } from '../gt350-data'
import YearContent from "./YearContent"
import selectedYearStore from '../stores'

const DisplayByYear = () => {
  const [selectedYear] = selectedYearStore

  console.log('selectedYear()', selectedYear())

  return (
  <>
    {selectedYear() === 'all'
      ? years.map(year => <YearContent key={year} {...{ year }} />)
      : <YearContent year={selectedYear()} />
    }
  </>
)}

export default DisplayByYear