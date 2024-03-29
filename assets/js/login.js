const form =document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
let check = 0;


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
    const passwordValue = password.value.trim();

    if(usernameValue === ''){
        setError(username , 'Username is Required');
    }else{
        setSucces(username);
    }

    if(passwordValue ===''){
        setError(password , 'Password is Required');
    }else if(passwordValue.length < 8){
        setError(password ,'Password must be at least 8 charcters');
    }else{
        setSucces(password)
    }
    console.log(check);

    if(check == 0){
        window.location.href = "index.html"
    }


}