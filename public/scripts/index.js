$(function() {
	$('#noteArea').keyup(function (e) {
		var text = $('#noteArea').val();
			$.ajax({
				url: 'typed',
				method: 'POST',
				data: text
			});
	});

	$('#movie1').on('play', function() {
		$('#tone')[0].play()
	});
	$('#movie1').on('timeupdate', function() {
		var seconds = $('#movie1')[0].currentTime;
		$('#timearea').text(formatTime(Math.floor(seconds)));
	});
});

