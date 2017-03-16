$('#speed').change(function(){
    chrome.runtime.sendMessage({speed: $('#speed').val()})
})
