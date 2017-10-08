# holiday [![Build Status](https://travis-ci.org/bukinoshita/holiday.svg?branch=master)](https://travis-ci.org/bukinoshita/holiday)

> List of Federal Public Holidays in 2017


## Install

```bash
$ yarn add holiday
```


## Usage

```js
const holiday = require('holiday')

// today: 1/1/2017

await holiday()
// => New Years Day
```

## API

### holiday([options])

#### options

Type: `object`<br/>

##### country

Type: `string`<br/>
Default: `us`<br/>
Options: `us` and `br`

Country holiday

##### range

Type: `string`<br/>
Default: `day`<br/>
Options: `day` || `month` || `year`


## Related

- [is-holiday](https://github.com/bukinoshita/is-holiday) — Get todays Federal Public Holidays


## License
MIT © [Bu Kinoshita](https://bukinoshita.io)
