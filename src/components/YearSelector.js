import { useSetSharedState, useGetSharedState } from '../experimental'

const YearSelector = ({ years }) => { 
  const setYear = useSetSharedState()
  const selectedYear = useGetSharedState()
  
  return (
  <>
    <nav className="year-selector">
      <ul>
        <li>
          <button
            className={`${selectedYear === 'all' ? 'active' : null}`}
            onClick={() => setYear('all')}
          >
            All
          </button>
        </li>
        {years.map(year => (
          <li
            key={year}
            className={`${selectedYear === year ? 'active' : null}`}
          >
            <button
              className={`${selectedYear === year ? 'active' : null}`}
              onClick={() => setYear(year)}
            >
              {year}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  </>
)
}

export default YearSelector