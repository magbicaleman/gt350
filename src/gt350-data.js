const years = [2016, 2017, 2018, 2019, 2020]

const colors = [
  ['Avalanche Grey', '#cacbd3', [years[0], years[1]] ],
  ['Competition Orange', '#f6650a', [years[0]] ],
  ['Deep Impact Blue', '#2923a7', [years[0]] ],
  ['Ford Performance Blue', '#2b70c0', [years[3], years[4]] ],
  ['Grabber Blue', '#02abfa', [years[1]] ],
  ['Grabber Lime', '#b1da4f', [years[4]] ],
  ['Iconic Silver', '#90919a',[years[4]] ],
  ['Kona Blue', '#202d55', [years[2], years[3], years[4]] ],
  ['Lead Foot Gray', '#737982', [years[2], years[3]] ],
  ['Lightning Blue', '#0c1ab7', [years[1], years[2]] ],
  ['Magnetic', '#bfc7ca', ['*'] ], 
  ['Orange Fury', '#ffa750', [years[2], years[3]] ],
  ['Oxford White', '#ebf2ff', ['*'] ],
  ['Race Red', '#dd0000', ['*'] ],
  ['Rapid Red', '#a5212d', [years[4]] ],
  ['Ruby Red', '#3f1417', [years[1], years[2], years[3]] ], 
  ['Shadow Black', '#08090b', ['*'] ],
  ['Triple Yellow', '#ddb40b', [years[0], years[1], years[2]] ],
  ['Twister Orange', '#e25702', [years[4]] ],
  ['Velocity Blue', '#004ce5', [years[3], years[4]] ],
  ['Wimbledon White', '#d2cac1', [years[4]] ],
]

const colorsByYear = years.reduce((p, year) => ({
  ...p,
  [year]: colors
    .filter(([, , years]) => years.includes('*') || years.includes(year))
    .map(([name, hex]) => ({ name, hex }))
}), {} )

export {
  colorsByYear,
  years,
}