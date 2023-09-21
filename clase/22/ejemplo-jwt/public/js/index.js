function Login(event) {
    event.preventDefault();

    const req = {
        email: document.querySelector('input#email').value,
        password: document.querySelector('input#password').value
    }
    console.log(req);

    fetch('/api/test/login', {
        method: 'POST',
        body: JSON.stringify(req),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(result => result.json())
    .then(json => {
        localStorage.setItem('authToken', json.token);
        
        alert('Logged in!');
    });
}