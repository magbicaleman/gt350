import selectedYearStore from '../stores'

const YearSelector = ({ years }) => { 
  const [selectedYear, setSelectedYear] = selectedYearStore
  
  return (
  <>
    <nav className="year-selector">
      <ul>
        <li>
          <button
            className={`${selectedYear === 'all' ? 'active' : null}`}
            onClick={() => setSelectedYear('all')}
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
              onClick={() => setSelectedYear(year)}
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