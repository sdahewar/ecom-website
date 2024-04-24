const submitBtn = document.querySelector('.submit');

submitBtn.addEventListener('click', (e) => {
	e.preventDefault();
	const username = document.getElementById('Email').value;
	const password = document.getElementById('password').value;

	// Validate the input
	if (Email === '' || password === '') {
		alert('Please fill in all the fields');
		return;
	}

	// Check if the username and password match
	if (Email === 'admin' && password === 'password') {
		alert('Login successful');
		// Redirect to another page
		window.location.href = 'home.html';
	} else {
		alert('Invalid username or password');
	}
});