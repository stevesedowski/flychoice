(function(){

var countries = [
   { value: 'Andorra', data: 'AD' },
   { value: 'Zimbabwe', data: 'ZZ' }
];

$('#cities').autocomplete({
    lookup: countries
});
})