/* START Sunkist Context Menu */
// DEFINE CLIENT WIDTH + HEIGHT
var cWidth = window.innerWidth;
var cHeight = window.innerHeight;
var sCMdebug = false;


$(window).on('resize', function(){
  cWidth = window.innerWidth;
  cHeight = window.innerHeight
});



// CREATE SUNKIST CONTEXT MENU + HIDE IT
const sCM = document.createElement('div');
sCM.id = 'sCM';

document.body.appendChild(sCM);
$('#sCM').hide();



//POSITIONING
$('*').on('contextmenu', function(e) {


  if (e.clientX < cWidth / 2 * 1.5) {
    $('#sCM').css('left', e.clientX + 'px');
  }
  else {
    $('#sCM').css('left', e.clientX - $('#sCM').width() + 'px');
  }



  if (e.clientY < cHeight / 2 * 1.5) {
    $('#sCM').css('top', document.body.scrollTop + e.clientY + 'px');
  }
  else {
    $('#sCM').css('top', document.body.scrollTop + e.clientY - $('#sCM').height() + 'px');
  }



 
  $('#sCM').show();
  e.preventDefault();
});



//HIDING
$(document).on('click', function() {
  $('#sCM').hide();
});



//CONTEXT SETS
$('*').on('contextmenu', function(e) {

  //MESSAGE SET
  if ( $(e.target).closest('.message').length ) {
    var msgId = $(e.target).closest('.message').attr('id');
    var user = $(e.target).closest('.message').attr('class').split(' ')[1];
    $('#sCM').html(`
      <div onclick='replyGen("${msgId}")'>Reply <span class='${user}'>${msgId}</span></div>
      <div onclick='pingGen("${user}")'>Mention <span class='${user}'>${user}</div>
      <hr>
      <div onclick="window.open('../users/${user}.html')"><span class='message ${user}'>Profile</span></div>
    `);
  }

  //TEXTBOX SET
  else if ( e.target.id === 'soapMode' ) {
    $('#sCM').html(`
      <div onclick='$("#soapMode").val("<pre><code>${e.target.value}</code></pre>")'>Code Format</div>
      <div onclick='navigator.clipboard.writeText("${window.getSelection()}")'>Copy Selected</div>
      <hr>
    `);
    if (sCMdebug == false) {
      $('#sCM').append(`<div onclick='sCMdebug = true'>Debug Options <span style='color:red;text-shadow: 0 0 5px red'>[OFF]</span></div>`)
    }
    else {
      $('#sCM').append(`<div onclick='sCMdebug = false'>Debug Options <span style='color:lime;text-shadow: 0 0 5px lime'>[ON]</span></div>`)
    }
  }


  //DEFAULT SET
  else {  
    $('#sCM').html(`
      <div>No key element selected.</div>
    `);
  }




  if (sCMdebug == true) {
    var objId = $(e.target).attr('id');
    var objClass = $(e.target).attr('class');
    $('#sCM').append(`<hr><div onclick="alert('ID: ${objId}   |   Class: ${objClass}');">Get ID / Class</div>`)
  }



});

const sCMStyle = document.createElement('style')
sCMStyle.setAttribute('nodraw', true)
sCMStyle.innerHTML = `
:root {
  --background: rgba(100, 100, 100, 0.3);
  --color: lightblue;
  --border: ridge rgba(100, 50, 170, 0.8) 2px;

  --accentBackground: rgba(0, 0, 0, 0.3);
  --accentColor: lightblue;
  --accentBorder: none;

  --radius: 3px;
}

#sCM {
  position: absolute;
  z-index: 25;
  width: 200px;
  text-align: center;
  top: 0;
  left: 0;

  backdrop-filter: blur(8px);

  background-color: var(--background);
  color: var(--color);
  border: var(--border);
  border-radius: var(--radius);
}

#sCM div, #sCM button {
  margin: 5px 1px;
  padding: 5px;
  display: block;
  cursor: pointer;

  background: var(--accentBackground);
  color: var(--accentColor);
  border: var(--accentBorder);
  border-radius: var(--radius);
}

#sCM div:hover, #sCM button:hover {
  background: var(--background);
  color: rgba(150, 150, 150);
}
`
body.appendChild(sCMStyle)



/* END Sunkist Context Menu */
