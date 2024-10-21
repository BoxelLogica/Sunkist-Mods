/* START New Favi */
document.getElementById("icon").href = 'https://raw.githubusercontent.com/BoxelLogica/Sunkist-Mods/refs/heads/main/assets/sp.png'
socket.on("requestUpdate", () => {
  if (!document.hasFocus() || !altMode) {
    newMessageCount++;
    document.getElementById("title").innerText = sunkistsPalace+" +"+ newMessageCount;
    document.getElementById("menuTitle").style.color = "blue";
    document.getElementById("menuTitle").style.textShadow = "0px 0px 10px blue";
    document.getElementById("menuTitle").innerText = sunkistsPalace+"[+" + newMessageCount + "]";
    document.getElementById("icon").href = "https://raw.githubusercontent.com/BoxelLogica/Sunkist-Mods/refs/heads/main/assets/split.png";
  }
});
function markAsRead(){
  newMessageCount = 0;
  document.getElementById("title").innerText = sunkistsPalace
  document.getElementById("menuTitle").style.color = "yellow";
  document.getElementById("menuTitle").style.textShadow = "0px 0px 10px yellow";
  document.getElementById("menuTitle").innerText = sunkistsPalace;
  document.getElementById("icon").href = "https://raw.githubusercontent.com/BoxelLogica/Sunkist-Mods/refs/heads/main/assets/sp.png";
}
/* END New Favi */
