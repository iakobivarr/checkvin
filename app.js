// Replace 'YOUR_SITE_KEY' with your reCAPTCHA site key
var siteKey = '6LcYETIUAAAAAKz6T9MxMEllN8yw0ffsErIbAGS-';

// Replace 'RECAPTCHA_RESPONSE_HERE' with the actual reCAPTCHA response
var recaptchaResponse = 'RECAPTCHA_RESPONSE_HERE';

// Replace 'USER_IP_ADDRESS_HERE' with the user's IP address
var userIpAddress = 'USER_IP_ADDRESS_HERE';

// Make a POST request to the reCAPTCHA verification endpoint
fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    mode: 'no-cors', // Set mode to 'no-cors'
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'secret=' + siteKey + '&response=' + recaptchaResponse + '&remoteip=' + userIpAddress
})
.then(response => {
    // Handle success (note: you won't be able to access response body)
    console.log('Success:', response);
})
.catch(error => {
    // Handle errors
    console.error('Error during reCAPTCHA verification:', error);
});
