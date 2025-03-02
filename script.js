const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const eyes = document.querySelectorAll('.eye');

usernameInput.addEventListener('focus', () => {
  eyes.forEach(eye => eye.style.animation = 'look-around 2s infinite');
});

passwordInput.addEventListener('focus', () => {
  eyes.forEach(eye => eye.style.animation = 'hide-eyes 0.5s forwards');
});

usernameInput.addEventListener('blur', () => {
  eyes.forEach(eye => eye.style.animation = 'blink 5s infinite');
});

passwordInput.addEventListener('blur', () => {
  eyes.forEach(eye => eye.style.animation = 'blink 5s infinite');
});

document.querySelector('.login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (username === 'admin' && password === '1234') {
    alert('Login successful!');
  } else {
    alert('Invalid username or password. Please try again.');
  }
});
