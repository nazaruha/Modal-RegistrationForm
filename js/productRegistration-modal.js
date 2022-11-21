var request = new XMLHttpRequest();
request.open("GET", 'productRegistration-modal.html', false); // false for synchronous request
request.send(null);
document.write(request.responseText);