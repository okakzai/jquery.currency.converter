jQuery(function() {
  $('.currency-selector').currency_converter({
    base : 'INR',
    target : '.price span',
    currencies : {
      'INR' : { key : 'INR', rate : 1, format : 'Rs {value}', label : 'Indian Rupee (INR)' },
      'GBP' : { key : 'GBP', rate : 100, format : '&pound;{value}', label : 'Pound Sterling (GBP)' },
      'EUR' : { key : 'EUR', rate : 80, format : '&euro;{value}', label : 'Euro (EUR)' },
      'USD' : { key : 'USD', rate : 60, format : '${value}', label : 'US Dollar (USD)' }
    }
  });
});