const login = prompt('Your login:', 'login');

if (login === 'User' || login === 'Admin') {
	const password = prompt('Your password:', 'password');
	if (login === 'User' && password === 'UserPass') {
		if (new Date().getHours() < 20) {
			alert('Good day, dear User!');
		} else {
			alert('Good evening, dear User!');
		}
	} else if (login === 'Admin' && password === 'RootPass') {
		if (new Date().getHours() < 20) {
			alert('Good day, dear Admin!');
		} else {
			alert('Good evening, dear Admin!');
		}
	} else if (password === '' || password === null) {
		alert('Canceled');
	} else {
		alert('Wrong password');
	}
} else if (login === '' || login === null) {
	alert('Canceled');
} else if (login.length < 4) {
	alert("I don't know any users having name length less than 4 symbols");
} else {
	alert("I don't know you");
}