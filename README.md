jQuery Currency Converter
=========================

jQuery Currency Converter

Plugin uses Yahoo Finance API for realtime currency rates.


To initialise currency selector

HTML
```
<div class="currency-selector"></div>
```

JS
```
$('.currency-selector').currency_converter({
	base : 'INR',
	target : '.price',
	currencies : {
		'INR' : { key : 'INR', rate : 1, format : '{value} INR', label : 'Indian Rupee (INR)' },
		'GBP' : { key : 'GBP', rate : 100, format : '&pound;{value}', label : 'Pound Sterling (GBP)' },
		'EUR' : { key : 'EUR', rate : 80, format : '&euro;{value}', label : 'Euro (EUR)' },
		'USD' : { key : 'USD', rate : 60, format : '${value}', label : 'US Dollar (USD)' }
	}
});
```