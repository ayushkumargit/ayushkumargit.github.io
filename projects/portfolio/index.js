document.querySelectorAll(".scrollAnimate").forEach(anchor =>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior : 'smooth'
        })
    })
})
let validEmali = false;
document.getElementById('email');
email.addEventListener('blur', () => {
    console.log("you have blured");
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/
    let str = email.value
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('your email is valid');
        email.classList.remove('emailValidt');
        email.classList.add('emailValidf');

        validEmali = true;

    } else {
        console.log("your email is not valid");
        email.classList.add('emailValidf');
        email.classList.remove('emailValidt');

        validEmali = false;
    }
})