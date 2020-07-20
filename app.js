// Below is a miniature app to add and display users.
// Be sure to change the <script> in index to app.js!
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    //console.log(nameInput.value);
    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error'); //add the error class to msg to better style the error message
        msg.innerHTML = 'Please enter all fields'; //We use msg to send a msg instead of interrupting code with an alert
        
        setTimeout(() => msg.remove(), 3000); //remove error message after 3 seconds
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}