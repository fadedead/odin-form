let submit = document.getElementById('submit');
let flag = 1;

submit.addEventListener('click', () => {
    let pText = document.getElementById('password').value;
    let cpText = document.getElementById('cpassword').value;
    if(cpText == '' || cpText != pText){
        let pInput = document.getElementsByClassName('singup-form')[0];

        let p = document.createElement('p');
        p.innerText = "*Passwords don't match";
        p.style = 'color:red; padding:0; margin:0;';
        if(flag) {
            flag = 0;
            pInput.append(p);
        }
    }
    else{
        flag = 1;
        alert("Meowed!!");
    }
});

submit.addEventListener('mouseover', () => {
    const maxX = 300; 
    const maxY = 300; 
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
  
    submit.style.transform = `translate(${randomX}px, ${randomY}px)`;
});
  