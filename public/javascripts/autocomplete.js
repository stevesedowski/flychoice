(function(){
  $.get("../json/airports.json")
    .done(function(data) {
      // console.log(data);
      
      data = data.map(function(airport) {
        return {
          value: airport.VENDOR_CODE + ' ' + airport.CITY_NAME + ', ' + airport.COUNTRY_CODE,
          airport: airport
        };
      });
      
      $("#autocomplete").autocomplete({
    		lookup: data,
    		minChars: 2,
    		lookupLimit: 5,
    		onSelect: function(suggestion) {
    		  console.log(suggestion.value);
    		  console.log(suggestion.airport.CITY_NAME);
    		}
    	});
    })
    .fail(function() {
      alert( "error" );
    });
})();


