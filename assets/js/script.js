// global variable declaration start here
const form = document.querySelector(".form"),
fullName = document.querySelector(".name"),
email = document.querySelector(".email"),
message = document.querySelector("#message"),
inputContent = document.querySelector(".input-content"),
nameRegex = /^[A-Za-z\s]+$/,
emailRegex = /^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/,
msgRegex = /^[A-Za-z0-9.\s]{5,50}$/;
console.log(inputContent);
// global variable declaration end here
form.addEventListener("submit",function(e){
  e.preventDefault();
  validate(fullName)
})
function validate(input){
 const error = document.createElement("span"),
 str = input.value;
 error.className = "error";
 if(str === ""){
  if(error){
    error.classList.contains("error");
    error.remove();
  }
  error.innerText = "*Field is required";
  
 }
};

fullName.addEventListener("blur" ,function(){
  validate(fullName);
})
email.addEventListener("blur" ,function(){
  validate(fullName);
})
message.addEventListener("blur" ,function(){
  validate(fullName);
})




















