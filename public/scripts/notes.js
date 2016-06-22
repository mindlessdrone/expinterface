$(function() {
	$('#notes').keyup(function() {
		var text = $('#notes').val();
		$.ajax({
			method: 'POST',
			url: '/notes',
			data: 'text=' + text
		});
	});
});
