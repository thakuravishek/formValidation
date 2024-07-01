let InputUser=document.getElementById("InputUser")
let inputPassword=document.getElementById("inputPassword")
let chkbx=document.getElementById("chkbx")
let logSubmit=document.getElementById("logSubmit")



function signInForm(){
    logSubmit.addEventListener("click",(e)=>{
        e.preventDefault()
        let udata=InputUser.value
        let pdata=inputPassword.value
        let newdata=JSON.parse(localStorage.getItem("Details"))
        
        // console.log(newdata.length);
// console.log(newdata);
// console.log(typeof newdata);
// console.log(newdata[1]);
       
        for(let i=0;i<newdata.length;i++){
            if(udata===newdata[i]["Username"] && pdata===newdata[i]["Password"]){
                window.open("./home.html")
            }else{
                alert("Invalid Username or Password")
            }
        }
        
        
    })
}
signInForm()

function showPassword(){
    chkbx.addEventListener("click",()=>{
        if(inputPassword.type==="password"){
            inputPassword.type="text"
        }else{
            inputPassword.type="password"
        }
    })
}
showPassword()