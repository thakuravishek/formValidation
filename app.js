// * targetting html Elements
let signUpForm=document.getElementById("signUpForm")
let username=document.getElementById("username")
let password=document.getElementById("password")
let confirmPassword=document.getElementById("confirmPassword")
let unError=document.getElementById("unError")
let checkBox=document.getElementById("checkBox")
let pwdError=document.getElementById("pwdError")
let cmfError=document.getElementById("cmfError")
let submit=document.getElementById("submit")
let SignIn=document.getElementById("SignIn")

// * functions to validate form data
let dataValue=(value)=>(value===""?true:false);
let dataLength=(length,min,max)=>length<min||length>max?true:false;
let validData=(value,regex)=>{
    return regex.test(value)
}

// * Username Validation
function usernameValidation(){
    username.addEventListener("keyup",()=>{
        let value=username.value;
        let length=value.length
        let regex=/^[a-zA-Z0-9_-]+$/
        if(dataValue(value)){
            unError.innerHTML="Username likho"
            submit.disabled=true
        }else{
                if(dataLength(length,6,10)){
                    unError.innerHTML="Username length should be between 6 and 10"
                    submit.disabled=true
                }else{
                    if(!validData(value,regex)){
                        unError.innerHTML="Username should consist only of lowercase, uppercase, number, special characters"
                        submit.disabled=true
                }else{
                    unError.innerHTML=""
                    submit.disabled=false
                }
            }
            }
    })
}
usernameValidation()

// * Password Validation
function passwordValidation(){
    password.addEventListener("keyup",()=>{
        let value=password.value;
        let length=value.length
        let regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/
        if(dataValue(value)){
            pwdError.innerHTML="Password Knha Hai"
            submit.disabled=true
        }else{
                if(dataLength(length,8,12)){
                    pwdError.innerHTML="Password length should be between 8 and 12"
                    submit.disabled=true
                }else{
                    if(!validData(value,regex)){
                        pwdError.innerHTML="Password should consist only of atleast one lowercase, uppercase, number, special characters"
                        submit.disabled=true
                }else{
                    pwdError.innerHTML=""
                    submit.disabled=false
                }
            }
            }
    })
}
passwordValidation()

// * Confirm Password
function conPass(){
    confirmPassword.addEventListener("keyup",()=>{
        let conPassData=confirmPassword.value
        if(dataValue(conPassData)){
            cmfError.innerHTML="Password Theek Se Check Kr"
            submit.disabled=true
        }else{
            cmfError.innerHTML=""
            submit.disabled=false
        }
    })
}
conPass()

// * Show Password
function showPassword(){
    checkBox.addEventListener("click",()=>{
        if(password.type==="password"||confirmPassword.type==="password"){
            password.type="text"
            confirmPassword.type="text"
        }else{
            password.type="password"
            confirmPassword.type="password"
        }
    })
}
showPassword()

// * Form validation
function formValidation(){
    signUpForm.addEventListener("submit",(e)=>{
        // e.preventDefault()
        let unData=username.value
        let pwData=password.value
        let cnfPassData=confirmPassword.value
        if(unData===""|| pwData===""||cnfPassData===""){
            alert("All Fields Are Required!")
        }else if(pwData!==cnfPassData){
            alert("passwords are not macthing")
        }else if(pwData===cnfPassData){
            let arr=[]
            if(localStorage.getItem("Details")===null){
                arr.push({Username:unData,Password:pwData})
                localStorage.setItem("Details",JSON.stringify(arr))
            }else{
                arr=JSON.parse(localStorage.getItem("Details"))
                arr.push({Username:unData,Password:pwData})
                localStorage.setItem("Details", JSON.stringify(arr))
                console.log(arr);
            }
            
        }
    })
}
formValidation()





// localStorage.clear()