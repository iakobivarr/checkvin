// Replace 'YOUR_SITE_KEY' with your reCAPTCHA site key
var siteKey = 'YOUR_SITE_KEY';

// Replace 'RECAPTCHA_RESPONSE_HERE' with the actual reCAPTCHA response
var recaptchaResponse = 'RECAPTCHA_RESPONSE_HERE';

// Replace 'USER_IP_ADDRESS_HERE' with the user's IP address
var userIpAddress = 'USER_IP_ADDRESS_HERE';

// Make a POST request to the reCAPTCHA verification endpoint
fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'secret=' + siteKey + '&response=' + recaptchaResponse + '&remoteip=' + userIpAddress
})
.then(response => response.json())
.then(data => {
    // Log the response to the console
    console.log('reCAPTCHA verification response:', data);
})
.catch(error => {
    console.error('Error during reCAPTCHA verification:', error);
});
