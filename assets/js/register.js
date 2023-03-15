const form =document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const age = document.getElementById('age');
const logCek = document.getElementById('logCek');
let check = 0;
let popup = document.getElementById("popup");



form.addEventListener('submit' , e =>{
    check = 0;
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('succes')
    check = 1
}

const setSucces = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('succes');
    inputControl.classList.remove('error')
    // check = 0
    
};

const validateInputs = () => {
    const usernameValue =username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const ageValue = age.value.trim();
    const logCheckValue = logCek.checked;

    if(usernameValue === ''){
        setError(username , 'Username is Required');
    }else{
        setSucces(username);
    }

    if(emailValue === ''){
        setError(email, "Email is Required");
    }else if(!emailValue.includes("@gmail.com")){
        setError(email,"Email must be @gmail.com");
    }else{
        setSucces(email);
    }

    if(passwordValue ===''){
        setError(password , 'Password is Required');
    }else if(passwordValue.length < 8){
        setError(password ,'Password must be at least 8 charcters');
    }else{
        setSucces(password)
    }

    if(ageValue ===''){
        setError(age , 'Age is Required');
    }else if(ageValue < 17){
        setError(age , 'You are still underage');
    }
    else{
        setSucces(age);
    }

    if(!logCheckValue){
        setError(logCek,"You must agree to the terms and conditions");
    }else{
        setSucces(logCek);
    }
    console.log(check);

    if(check === 0){
            popup.classList.add("open-popup");
    }

}