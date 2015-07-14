// $('#departure').datepicker({
//   startDate: '0/01/2015',
//   format: 'mm/dd/yyyy',
//   onRender: function (rdate) { return (rdate.valueOf() >= startDate.valueOf()) && (rdate.valueOf() < now.valueOf()) ? '' : 'disabled'; }
// }).data('datepicker');
$('#departure').datepicker({
    startDate: '-3d'
})