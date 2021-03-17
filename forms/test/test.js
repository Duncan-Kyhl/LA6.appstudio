
/*
Hamburger1.onclick = function(s) {
};
*/
// -----------------------------------
// COLOR CHANGER
Button1.onclick=function()
  chBackcolor(getRandomColor())
}

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function chBackcolor(color) {
   document.body.style.backgroundColor = color;
}
// -----------------------------------
/*
Switch1.onclick=function(){
  let setting = (imgCanvas.hidden == 0 ? 1 : 0)
  imgCanvas.hidden = setting
}
*/
// -----------------------------------


