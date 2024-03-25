var siteKey = '6LcYETIUAAAAAKz6T9MxMEllN8yw0ffsErIbAGS-';
var recaptchaResponse = 'RECAPTCHA_RESPONSE_HERE';
var userIpAddress = 'USER_IP_ADDRESS_HERE';
fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    mode: 'no-cors', // Set mode to 'no-cors'
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'secret=' + siteKey + '&response=' + recaptchaResponse + '&remoteip=' + userIpAddress
})
.then(response => {
    console.log('Success:', response);
})
.catch(error => {
    console.error('Error during reCAPTCHA verification:', error);
});
