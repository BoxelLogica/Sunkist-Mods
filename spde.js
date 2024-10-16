/* START Sunkist's Palace Deluxe Edition */
const jimButton = document.createElement('button')

jimButton.className = 'jim'
jimButton.innerHTML = 'NAME'
$('#menu').append(jimButton)

$('.jim').click(function(){
  var msg = new SpeechSynthesisUtterance();
  msg.text = "Jim!";
  window.speechSynthesis.speak(msg);
  subtitle('Jim.', 1500)
});

const tspStyle = document.createElement('style')
tspStyle.setAttribute('nodraw', true)
tspStyle.innerHTML = `
#menuTitle::before {
  content: ' DELUXE';
  background-image: linear-gradient(rgba(253,234,105,255), rgba(150,97,22,255));
  color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 5px rgba(150,97,22,1));
  text-shadow: none;
  /*font-family: monospace;*/
  letter-spacing: -2px;
  padding-left: 60px;
  padding-right: 62px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%) translateY(1em);
  border-top: solid rgba(253,234,105,255) 2px;
}

#menuTitle::after {
  content: ' 2';
}

#menuTitle {padding-bottom: 1em; margin-bottom: 2px; margin-top: 2px;}

html::after {
  position: absolute;
  right: 10px;
  content: 'a';
  color: transparent;
  background: url(https://raw.githubusercontent.com/BoxelLogica/Sunkist-Mods/refs/heads/main/assets/new-content.png) fixed bottom no-repeat;
  background-size: 100% auto;
  transform: translateY(-100%);
  width: 15%;
  height: 100%;
  z-index: -20;
}

.jim {
  background: radial-gradient(rgba(235,238,147,255),rgba(171, 118, 19,255));
  color: rgba(124,48,3,255);
  border: black 1px solid;
  border-radius: 5px;
}

.jim:hover {filter: brightness(1.2);}
`
document.body.appendChild(tspStyle)
/* END Sunkist's Palace Deluxe Edition */