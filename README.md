[](https://img.shields.io/npm/l/crypto-rates-time-series)

# crypto-rates-time-series
A package to retrieve time series of all the major cryptocurrencies
It supports 385 cryptocurrencies including the most famous ones such as Bitcoin, Etherium, Bitcoin Cash, and Litecoin.
The base currency is Euro.

## Installing

Download node at nodejs.org and install it, if you haven't already.

```
npm install crypto-rates-time-series --save
```


## Usage

```
const rates = require("crypto-rates-time-series")
``` 

### Methods 

#### .getByDate("YYYY-MM-DD") 
Get the rates for the specific date passed as an argument. The format of the date must be a string as following "YYYY-MM-DD" 

Example
```
rates.getByDate("2020-01-01").then( rates =>{
  console.log(rates)
})

```

#### .getByPastDays(number_of_days_back) 
Get the rates for the date back of the number of days specified as an argument. 

Example
```
// The rates of two days ago
rates.getByPastDays(2).then( rates =>{
  console.log(rates)
})

```

#### .getToday() 
Get the rates of today. It updates every two hours so these might not be the current rates.

Example
```
rates.getToday().then( rates =>{
  console.log(rates)
})

```

#### .getYesterday() 
Get the rates of yesterday.

Example
```
rates.getYesterday().then( rates =>{
  console.log(rates)
})

```

#### .getLastMonth() 
Get the rates of the same day as today but of the last month 

Example
```
rates.getLastMonth().then( rates =>{
  console.log(rates)
})

```

#### .getLastYear() 
Get the rates of the same day as today but of the last year

Example
```
rates.getLastYear().then( rates =>{
  console.log(rates)
})
```

#### .getLastWeek() 
Get the rates of the same day as today but of the last week

Example
```
rates.getLastWeek().then( rates =>{
  console.log(rates)
})
```

### Response 
The response is an object containing three keys:
* currency: 'EUR' //The base currency (always Euro)
* date: 'YYYY-MM-DD' //The date of the rates
* rates: {} //An object with the rates

Example:
```
  { 
  currency: 'EUR',
  rates:
   { 
     ABC: 55.163229,
     ACP: 0.01373,
     ACT: 0.004138,
     ADA: 0.033091,
     ADX: 0.052219,
     ADZ: 0.002115,
     AE: 0.093857,
     ...
     ...
     ...
     ZIL: 0.003993,
     ZNY: 0.018391,
     ZRX: 0.162487,
     ZSC: 0.00019 
    },
  date: '2020-04-19' 
  }
```



## Versioning

I use [SemVer](http://semver.org/) for versioning.

## Author

* **Stefano Silvestrini** - [Github](https://github.com/StefanoSilv) - [Linkedin](https://www.linkedin.com/in/silvestrinistefano/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
