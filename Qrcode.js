const QRCode = require('qrcode');
const url = 'https://yourapp.com/book/1234';
QRCode.toDataURL(url, function (err, url) {
    console.log(url); // QR 코드의 base64 문자열 출력
});
