document.querySelector('.register-btn').addEventListener('click', function(event) {
  let email = document.querySelector('.email');

  if (email.validity.typeMismatch || email.validity.valueMissing) {
    document.querySelector('.error-msg').innerHTML = "Please provide a valid email";
    document.querySelector('.icon-error').style.display = 'inline-block';
    document.querySelector('.register').style.border = "2px solid hsl(0, 93%, 68%)";
    event.preventDefault();
  } else {
    document.querySelector('.error-msg').innerHTML = " ";
    document.querySelector('.icon-error').style.display = 'none';
    document.querySelector('.register').style.border = 'solid 1px hsl(0, 36%, 70%)';
  }

});

document.querySelector('.email').addEventListener('keydown', function(event) {
const email = document.querySelector('.email');
  if (event.keycode === 13) {
    if (email.validity.typeMismatch || email.validity.valueMissing) {
      document.querySelector('.error-msg').innerHTML = "Please provide a valid email";
      document.querySelector('.icon-error').style.display = 'inline-block';
      document.querySelector('.register').style.border = "2px solid hsl(0, 93%, 68%)";
      event.preventDefault();
    } else {
      event.preventDefault();
      document.querySelector('.error-msg').innerHTML = " ";
      document.querySelector('.icon-error').style.display = 'none';
      document.querySelector('.register').style.border = 'solid 1px hsl(0, 36%, 70%)';
    }

  }
});



let bird = new Audio('sounds/bird.mp3');

document.querySelector('.register-btn').addEventListener('click', function() {
  bird.play();
});
