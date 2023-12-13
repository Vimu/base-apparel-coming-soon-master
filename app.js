
const email = document.querySelector(".email");
const form = document.querySelector(".content__form")


    

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(email.value === ""){
        errorMsg(email, "Please provide a valid email");
    }else if(!isEmail(email.value)){
        errorMsg(email, "Please provide a valid email");
    }else{
        successMsg(email);
    }    

});

function errorMsg(input, msg){
    const content = input.parentElement;
    const errorText = content.querySelector(".error-txt");

    errorText.classList.add("show__text");
    content.classList.add("show__text"); 
    
    errorText.textContent = msg;
}

function successMsg(input){
    const content = input.parentElement;
    const errorText = content.querySelector(".error-txt");

    content.classList.add("show__success"); 
    errorText.textContent = "";
}


function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}