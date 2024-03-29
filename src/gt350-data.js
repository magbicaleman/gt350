const toPrice = num => new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(num)

const years = [2016, 2017, 2018, 2019, 2020]

const basePrices = [
  [47795, 61295],
  [54845, 62345],
  [55940, 63440],
  [59140, 67135],
  [59140, 72135],
].map(([GT350, GT350R]) => ({
  GT350,
  GT350R,
}))

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
  ['Orange Fury', '#ffa750', [years[2], years[3]], 495],
  ['Oxford White', '#ebf2ff', ['*'] ],
  ['Race Red', '#dd0000', ['*'] ],
  ['Rapid Red', '#a5212d', [years[4]], 395],
  ['Ruby Red', '#3f1417', [years[1], years[2], years[3]], 395 ], 
  ['Shadow Black', '#08090b', ['*'] ],
  ['Triple Yellow', '#ddb40b', [years[0], years[1], years[2]], 495 ],
  ['Twister Orange', '#e25702', [years[4]], 495],
  ['Velocity Blue', '#004ce5', [years[3], years[4]] ],
  ['Wimbledon White', 'rgb(254, 252, 249)', [years[4]] ],
]

const stripes = [
  ['Black/White', '--black', '--accent-white', years.slice(0,3)],
  ['White/Black', '--white', '--accent-black', years.slice(0,3)],
  ['Blue/Black', '--blue', '--accent-black', years.slice(0,3)],
  ['Black/LT Magnetic', '--black', '--accent-lt-magnetic', years.slice(-2)],
  ['White/LT Magnetic', '--white', '--accent-lt-magnetic', years.slice(-2)],
  ['Kona Blue/LT Magnetic', '--kona', '--accent-lt-magnetic', years.slice(-2)],
  ['White/Red', '--white', '--accent-red', ['*']],
  ['Black/Red', '--black', '--accent-red', ['*']],
  ['Blue/Red', '--blue', '--accent-red', years.slice(0,3)],
  ['Kona Blue/Red', '--kona', '--accent-red', years.slice(-2)],
  ['Guardsman Blue', '--guardsman-blue', '', years.slice(-1)],
  ['No Stripe', '', '--no-stripe', ['*']],
]

const stripeMsrps = [
  [years.slice(0,4), 475],
  [years.slice(-1), 495]
]

const grouppedByYear = years.reduce((p, year, i) => ({
  ...p,
  [year]: {
    colors: colors
      .filter(([, , years]) => years.includes('*') || years.includes(year))
      .map(([name, hex, , msrp]) => ({ name, hex, msrp })),
    stripes: stripes
      .filter(([, , , years]) => years.includes('*') || years.includes(year))
      .map(([name, bgColor, accentColor]) => ({ name, bgColor, accentColor })),
    stripeMsrp: stripeMsrps
      .filter(([years]) => years.includes('*') || years.includes(year))
      .map(([, msrp]) => toPrice(msrp))[0],
    prices: Object.entries(basePrices[i]),

  }
}), {} )

export {
  years,
  grouppedByYear,
  basePrices
}