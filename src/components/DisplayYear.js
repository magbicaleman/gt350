import { years } from '../gt350-data'
import YearContent from "./YearContent"
import { useGetSharedState } from '../experimental'

const DisplayByYear = () => {
  const selectedYear = useGetSharedState()
  // console.log('DisplayByYear :: selectedYear', selectedYear)

  return (
  <>
    {console.log('selectedYear', selectedYear)}
    {selectedYear === 'all'
      ? years.map(year => <YearContent key={year} {...{ year }} />)
      : <YearContent year={selectedYear} />
    }
  </>
)}

export default DisplayByYear