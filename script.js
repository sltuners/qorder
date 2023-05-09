var today = new Date().toISOString().slice(0, 10)
const startDate  = '2022-08-30';
var nDays = ((new Date(today) - new Date(startDate))/86400000)-99
document.querySelector('#header').innerHTML = 'Application is under consconstruction. We are building the App for <span>' + nDays + '</span> days already.'
new QRCode(document.getElementById("qrcode"), {text: "https://sltuners.github.io/Dicee-Game/",	width: 256 , height: 256, colorDark : "#132A3A", colorLight : "transparent", correctLevel : QRCode.CorrectLevel.H});
