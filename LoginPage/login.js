const 
    loader = document.querySelector("#svg-loader")
    ,styleRoot = getComputedStyle(document.documentElement)
    ,form = document.querySelector("form")
    ,username = document.querySelector("#user-name")
    ,password = document.querySelector("#password")
    ,Pnumber = document.querySelector("#Pnumber")
    ,email = document.querySelector("#email")
    ,selected = document.querySelectorAll(".selected")
    ,wordscount = document.querySelector(".col span")
    ,numberCode = document.querySelector("form .Number span") 
    ,Submit = document.querySelector("#submit-button")
<<<<<<< HEAD
=======
    ,textError = document.querySelector(".text-error")
    ,dropBoxConnection = document.querySelector('.drop-box-connection')
>>>>>>> 74f19d4 (#2)
////////////////////////////////////// nav bar
let nav= document.querySelector(".nav")
let arrow = document.querySelector(".arrow")
let p_nav = document.querySelector(".p-nav")
/////////////////////////////////////// nav signin
let flag = 0
arrow.addEventListener("click",function(){
<<<<<<< HEAD
    if(flag === 0){
        flag = 1
        nav_signin()
    }
    else{
        flag = 0
        nav_login()
    }
})

=======
    flag === 0 ? flag = 1 && nav_signin() : nav_login() || (flag = 0)
})
let isSignIn = false
>>>>>>> 74f19d4 (#2)
function nav_signin(){
    Submit.addEventListener("click",submitHandler)
    Pnumber.removeAttribute("required")
    email.removeAttribute("required")
    // email.attributes.required = "required"
<<<<<<< HEAD
    console.log(Pnumber,"\n",email);
=======
>>>>>>> 74f19d4 (#2)
    nav.classList.add("nav-signin")
    arrow.classList.add("arrow-signin")
    form.classList.add("h-small")
    p_nav.style.cssText = "top : 90%"
    p_nav.innerHTML = "Log In"
<<<<<<< HEAD
=======
    isSignIn = true
>>>>>>> 74f19d4 (#2)
    setTimeout(function(){
        selected.forEach(function(select){
            select.classList.add("d-none")
        })
    },300)}   
////////////////////////////////// nav ligin


function nav_login(){
    Submit.removeEventListener("click",submitHandler)
    Pnumber.setAttribute("required","")
    email.setAttribute("required","")
    // Pnumber.attributes.required = ""
    // email.attributes.required = ""
    console.log(Pnumber,"\n",email);
    nav.classList.remove("nav-signin")
    arrow.classList.remove("arrow-signin")
    form.classList.remove("h-small")
    p_nav.style.cssText = ""
    p_nav.innerHTML = "Sign In"
<<<<<<< HEAD
=======
    isSignIn = false
>>>>>>> 74f19d4 (#2)
    setTimeout(function(){
        selected.forEach(function(select){
            select.classList.remove("d-none")
        })
    },600)}   

<<<<<<< HEAD
///////////////////////////////////functions for signin

username.addEventListener("keyup",valid_username)
function valid_username(){
    let len = Number(username.value.length)
    let result = 18 - len
    wordscount.style.color = styleRoot.getPropertyValue("--color1")
    if(result == 18){
        wordscount.style.color = styleRoot.getPropertyValue("--color4")
    }
}
=======
///////////////////////////////////connection 
window.addEventListener("online",() => {
    dropBoxConnection.classList.add("drop-down") 
    dropBoxConnection.classList.add("online") 
    dropBoxConnection.innerHTML = "you are online"
    setTimeout(() => {
        dropBoxConnection.innerHTML = ""
        dropBoxConnection.classList.remove("drop-down") 
    },2000)
    setTimeout(() => {
        dropBoxConnection.classList.remove("online") 
    },3000)
})
window.addEventListener("offline",() => {
    dropBoxConnection.classList.add("drop-down") 
    dropBoxConnection.classList.add("offline") 
    dropBoxConnection.innerHTML = "you are offline"
    setTimeout((removeClass) => {
        dropBoxConnection.innerHTML = ""
        dropBoxConnection.classList.remove("drop-down") 
    },2000)
    setTimeout(() => {
        dropBoxConnection.classList.remove("offline") 
    },3000)

})

>>>>>>> 74f19d4 (#2)
///////////////////////////////// alert error
let users = [
    JSON.stringify({"name" : "Ali12","password" : "12345qwert"})
    ,JSON.stringify({"name" : "MMd","password" : "123qwe"})
    ,JSON.stringify({"name" : "Hassan","password" : "rewq4321"})
    ,JSON.stringify({"name" : "Ahmad","password" : "asdfgh"})
]

<<<<<<< HEAD
function submitHandler(event){
    event.preventDefault()
    let userinfo = {"name" : username.value,"password" : password.value}
    if(users.includes(JSON.stringify(userinfo))){
        form.submit()
    }else{
        let errorBox = document.createElement("div")
        errorBox.innerHTML = "اطلاعات وارد شده نامعتبر است"
        document.body.append(errorBox)
        errorBox.classList.add("error")
        setTimeout(function(){
            errorBox.classList.add("active")
        },500)
        setTimeout(function(){
            errorBox.remove()
        },5000)
    }

    
}
=======
const errorHandler = () =>{
    
}
function submitHandler(event){
    if(isSignIn){
    event.preventDefault()
    let userinfo = {
        name : username.value,
        password : password.value
    }
    fetch("/API",{
        method : "POST",
        headers : {
            "Content-type" : "application/json"
        },
        body: JSON.stringify(userinfo)
    })
    .then(res => {
        if(res.status === 200){
            form.submit()
        }else{
            let errorBox = document.createElement("div")
            errorBox.innerHTML = "اطلاعات وارد شده نامعتبر است"
            errorBox.classList.add("error")
            document.body.append(errorBox)
            setTimeout(function(){
                errorBox.classList.add("active")
            },1000)
            setTimeout(function(){
                errorBox.remove()
            },6000)
        }}
    )}
    else{
        event.preventDefault()
        let userinfo = {
            name : username.value,
            password : password.value,
            Pnumber : Pnumber.value,
            email : email.value
        }
        fetch("/API",{
            method : "POST",
            headers : {
                "Content-type" : "application/json"
            },
            body: JSON.stringify(userinfo)
        }).then(res => {
            return res === 200 ? form.submit() : errorHandler()
        })
    }}



username.addEventListener('blur',() => {
    fetch("API/username",{
        method : "POST",
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify({username : username.value})
    })
    .then(res => {return res.json()})
    .then(data => {
        res === 200 ? username.classList.add("not-valid") && (textError.innerHTML = "Username has taken") : username.classList.remove("not-valid") (textError.innerHTML = "")
    })
})
password.addEventListener('blur',() => {
    fetch("API/pass",{
        method : "POST",
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify({password : password.value})
    })
    .then(res => {return res.json()})
    .then(data => {
        res === 200 ? password.classList.add("not-valid") && (textError.innerHTML = "Password has taken") : password.classList.remove("not-valid") (textError.innerHTML = "")
    })
})

    

>>>>>>> 74f19d4 (#2)

