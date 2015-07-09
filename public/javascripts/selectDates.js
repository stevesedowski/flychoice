$(function(){

	var date = new Date();

	$('#departure').datepicker({
	    format: 'yyyy-mm-dd',
	    startDate: Date.now(),
	    endDate: '+6m',
	    orientation: 'top left',
	    todayHighlight: true
	});
	$('#return').datepicker({
	    format: 'yyyy-mm-dd',
	    startDate: 'today',
	    endDate: '+90d',
	    orientation: 'top left',
	    todayHighlight: true
	});    

});