var today = new Date().toISOString().slice(0, 10)
const startDate  = '2022-08-30';
var nDays = ((new Date(today) - new Date(startDate))/86400000)-99
document.querySelector('#header').innerHTML = 'Application is under consconstruction. We are building the App for <span>' + nDays + '</span> days already.<br><br><hr><br><a href="https://sltuners.github.io/qorder/qorder_promo_0523.pdf">Click to view <span>promo PDF</span></a><br><br>Or scan this QR to make a quick decision';
new QRCode(document.getElementById("qrcode"), {text: "https://sltuners.github.io/Dicee-Game/",	width: 256 , height: 256, colorDark : "#132A3A", colorLight : "transparent", correctLevel : QRCode.CorrectLevel.H});

