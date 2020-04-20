# crypto-rates-time-series
A package to retrive time series of all the major cryptocurrencies
It supports 385 cryptocurrencies including the most famous ones such as Bitcoin, Etherium, Bitcoin Cash, and Litecoin.
The currency of referment is Euro.

### Installing

Download node at nodejs.org and install it, if you haven't already.

```
npm install crypto-rates-time-series --save
```


### Usage

Explain what these tests test and why

```
const rates = require("crypto-rates-time-series")
``` 

#### Methods 

##### .getByDate("YYYY-MM-DD") 
Get the rates for the specific date passed as an argument. The format of the date must be a string as following "YYYY-MM-DD" 

Example
```
rates.getByDate("2020-01-01").then( rates =>{
  console.log(rates)
})

```

##### .getByPastDays(number_of_days_back) 
Get the rates for the date back of the number of days specified as an argument. 

Example
```
//The rates of two days ago
rates.getByPastDays(2).then( rates =>{
  console.log(rates)
})

```

##### .getLastMonth() 
Get the rates of the same day as today but of the last month 

Example
```
rates.getLastMonth().then( rates =>{
  console.log(rates)
})

```

##### .getLastYear() 
Get the rates of the same day as today but of the last year

Example
```
rates.getLastYear().then( rates =>{
  console.log(rates)
})
```

##### .getLastWeek() 
Get the rates of the same day as today but of the last week

Example
```
rates.getLastWeek().then( rates =>{
  console.log(rates)
})
```



## Versioning

I use [SemVer](http://semver.org/) for versioning.

## Author

* **Stefano Silvestrini** - [Github](https://github.com/StefanoSilv) - [Linkedin](https://www.linkedin.com/in/silvestrinistefano/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
