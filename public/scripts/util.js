function formatTime(secs) {
	var minutes = Math.floor(secs / 60);
	var seconds = secs % 60;
	var secText = seconds < 10 ? "0" + seconds : seconds;

	return minutes + ":" + secText;
}
	
