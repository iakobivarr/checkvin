const siteKey = '6LcYETIUAAAAAKz6T9MxMEllN8yw0ffsErIbAGS';

fetch(`https://www.google.com/recaptcha/api2/userverify?k=${siteKey}`, {
  method: 'POST'
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error('There was a problem with your fetch operation:', error);
});
