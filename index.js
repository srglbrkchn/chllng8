document.querySelector('.register-btn').addEventListener('click', function(){
  let valid = emailIsValid(document.querySelector('.email').value);

  if(valid) {
    document.querySelectorAll('label')[0].style.display = 'none';
    document.querySelector('.icon-error').style.display = 'none';
    document.querySelector('.register').style.border = 'solid 1px hsl(0, 36%, 70%)';
  }else {
    document.querySelectorAll('label')[0].style.display = 'inline-block';
    document.querySelector('.icon-error').style.display = 'inline-block';
    document.querySelector('.register').style.border = "2px solid hsl(0, 93%, 68%)";
  }
});


function  emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

let bird = new Audio('sounds/bird.mp3');

document.querySelector('.register-btn').addEventListener('click', function(){
  bird.play();
});
