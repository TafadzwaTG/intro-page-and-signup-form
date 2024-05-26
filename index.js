document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup');
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      validateInputs();
    });
  
    function validateInputs() {
      // Get the values from the inputs
      const firstNameValue = firstName.value.trim();
      const lastNameValue = lastName.value.trim();
      const emailValue = email.value.trim();
      const passwordValue = password.value.trim();
  
      if (firstNameValue === '') {
        setErrorFor(firstName, 'First Name cannot be empty');
      } else {
        setSuccessFor(firstName);
      }
  
      if (lastNameValue === '') {
        setErrorFor(lastName, 'Last Name cannot be empty');
      } else {
        setSuccessFor(lastName);
      }
  
      if (emailValue === '') {
        setErrorFor(email, 'Email cannot be empty');
      } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
      } else {
        setSuccessFor(email);
      }
  
      if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be empty');
      } else {
        setSuccessFor(password);
      }
    }
  
    function setErrorFor(input, message) {
      const formControl = input.parentElement;
      const small = formControl.querySelector('small');
  
      // Add error message inside small
      small.innerText = message;
  
      // Add error class
      formControl.className = 'form-control error';
      small.style.visibility = 'visible';
    }
  
    function setSuccessFor(input) {
      const formControl = input.parentElement;
      const small = formControl.querySelector('small');
  
      // Add success class
      formControl.className = 'form-control success';
      small.style.visibility = 'hidden';
    }
  
    function isEmail(email) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i.test(email);
    }
  });