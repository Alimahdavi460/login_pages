const signUpBtn = Document.getElementById('signUp');
const signInBtn = Document.getElementById('signIn');
const container = Document.getElementById('container');

signUpBtn.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInBtn.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});