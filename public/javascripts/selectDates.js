$(function(){

// use the "dist" folder for the download of the datepicker!!
	$('#departure').datepicker({
		startDate: 'today',
	    format: 'yyyy-mm-dd',
	    endDate: '+6m',
	    orientation: 'top left',
	    todayHighlight: true
	});
	$('#return').datepicker({
	    format: 'yyyy-mm-dd',
	    startDate: 'today',
	    endDate: '+6m',
	    orientation: 'top left',
	    todayHighlight: true
	});    

});