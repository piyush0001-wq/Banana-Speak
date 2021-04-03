var btnTranslate = document.querySelector("#btn-translate")
var txtinp = document.querySelector("#txtinp")
var outputDiv = document.querySelector("#output")
var limitClicks = 0
// outputDiv.innerText = 'dfdjfbjdbfbdfbjdfjdbfjdbfjbdjfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb';
var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getTranslationUrl(input) {
  return serverUrl + "?" + "text=" + input
}

function errorHandler(error) {
  console.log("Error occured", error);
  alert("Something went wrong! Try again later.");
}

function clickHandler() {
  limitClicks = limitClicks + 1;
  var inputText = txtinp.value;
  fetch(getTranslationUrl(inputText))
    .then(response => response.json())
    .then(json => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)