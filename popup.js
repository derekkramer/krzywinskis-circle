$(function(){
	if(localStorage.getItem('speed'))
		$('#speed').val(localStorage.getItem('speed'));

	$('#speed').change(() => {
		localStorage.setItem('speed', $('#speed').val());
		chrome.runtime.sendMessage(
			{
				speed: $('#speed').val()
			}
		);
	});
});
