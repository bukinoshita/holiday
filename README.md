# holiday
> List of Federal Public Holidays in 2017

[![Codeship Status for bukinoshita/holiday](https://app.codeship.com/projects/f81b98e0-dde4-0134-65d6-666b8ac96438/status?branch=master)](https://app.codeship.com/projects/204623)
[![GitHub release](https://img.shields.io/github/release/bukinoshita/holiday.svg)](https://www.npmjs.com/package/holiday)
[![license](https://img.shields.io/github/license/bukinoshita/holiday.svg)](https://raw.githubusercontent.com/bukinoshita/holiday/master/LICENSE)

## Install
```bash
$ npm install --save holiday
```

## Usage
```js
import holiday from 'holiday'

holiday(1, 1, 'us').then(res => console.log(`Today is ${res}`))
// => Today is New Years Day
```

## API
### holiday(month, day, country)

#### month
Type: Number<br/>
Required

month should be a number between 1-12

#### day
Type: Number<br/>
Required

day should be a number between 1-31

#### country
Type: String<br/>
Options: 'us' and 'br'<br/>
Default: 'us'<br/>
Optional

## Related
- [is-holiday](https://github.com/bukinoshita/is-holiday) — Get todays Federal Public Holidays

## License
[MIT](https://github.com/bukinoshita/holiday/blob/master/LICENSE) &copy; Bu Kinoshita
