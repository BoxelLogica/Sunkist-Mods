/* START Subtitle */
const subElem = document.createElement('div');
subElem.id = 'subElem';
subElem.innerHTML = 'PLACEHOLDER.'
document.body.appendChild(subElem)
$('#subElem').hide()

function subtitle(subMsg, duration, style) {
  subElem.innerHTML = subMsg
  $('#subElem').fadeIn('fast')

  setTimeout(function() {
    $('#subElem').fadeOut('fast')
  }, duration);
  if(style != null || style != undefined || style != '' ) {
    subElem.className = style
  }
  else {
    subElem.className = ''
  }
}

const subtitleStyle = document.createElement('style')
subtitleStyle.setAttribute('nodraw', true)
subtitleStyle.innerHTML = `
#subElem {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.5);
  top: 90%;
  left: 50%;
  transform: translateX(-50%);
  backdrop-filter: blur(8px);
  color: lightgray;
  padding: 5px 25px;
  border-radius: 5px;
  font-family: Arial;
}

.ultrakill {
  background: rgba(0,0,0,0.3)!important;
  border-radius: 0!important;
  font-family: Lethal!important;
  color: white!important;
  padding: 15px!important;
}
`
body.appendChild(subtitleStyle)

subtitle('Subtitle system <span style="color:lime;">[ON]</span>', 3000)
/* END Subtitle */