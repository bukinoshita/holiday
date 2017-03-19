# holiday
> List of Federal Public Holidays in 2017

[![Codeship Status for bukinoshita/holiday](https://app.codeship.com/projects/f81b98e0-dde4-0134-65d6-666b8ac96438/status?branch=master)](https://app.codeship.com/projects/204623)
[![Build Status](https://travis-ci.org/bukinoshita/holiday.svg?branch=master)](https://travis-ci.org/bukinoshita/holiday)
[![GitHub release](https://img.shields.io/github/release/bukinoshita/holiday.svg)](https://www.npmjs.com/package/holiday)
[![license](https://img.shields.io/github/license/bukinoshita/holiday.svg)](https://raw.githubusercontent.com/bukinoshita/holiday/master/LICENSE)

## Install
```bash
$ npm install --save holiday
```

## Usage
```js
import holiday from 'holiday'

const opts = { month: 1, day: 1, country: 'us' }

holiday(opts).then(res => console.log(`Today is ${res.title}`))
// => Today is New Years Day
```

## API
### holiday(options)

#### options
Type: `Object`<br/>
Optional

If `options` is not passed, returns US holidays for the entire year

#### year
Type: `string` or `integer`<br/>
Default: current year

2017 is the only year supported by now

##### month
Type: `string` or `integer`<br/>

Must be a number between 1-12

##### day
Type: `string` or `integer`<br/>

Must be a number between 1-31

##### country
Type: `string`<br/>
Options: `us` (United States) or `br` (Brazil)<br/>
Default: `us`

## Related
- [is-holiday](https://github.com/bukinoshita/is-holiday) — Get todays Federal Public Holidays

## License
[MIT](https://github.com/bukinoshita/holiday/blob/master/LICENSE) &copy; Bu Kinoshita
