function record() {
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";
    recognition.onresult = function (event) {
        document.getElementById('textconv1').value = event.results[0][0].transcript;
    }
    recognition.start();
}
let query = document.querySelector('.query');
let btn = document.querySelector('.btn');

btn.onclick = function () {
    let url = 'www.google.com' + query.value;
    window.open(url, '_self');
}