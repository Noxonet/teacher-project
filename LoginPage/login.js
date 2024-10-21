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
////////////////////////////////////// nav bar
let nav= document.querySelector(".nav")
let arrow = document.querySelector(".arrow")
let p_nav = document.querySelector(".p-nav")
/////////////////////////////////////// nav signin
let flag = 0
arrow.addEventListener("click",function(){
    if(flag === 0){
        flag = 1
        nav_signin()
    }
    else{
        flag = 0
        nav_login()
    }
})

function nav_signin(){
    Submit.addEventListener("click",submitHandler)
    Pnumber.removeAttribute("required")
    email.removeAttribute("required")
    // email.attributes.required = "required"
    console.log(Pnumber,"\n",email);
    nav.classList.add("nav-signin")
    arrow.classList.add("arrow-signin")
    form.classList.add("h-small")
    p_nav.style.cssText = "top : 90%"
    p_nav.innerHTML = "Log In"
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
    setTimeout(function(){
        selected.forEach(function(select){
            select.classList.remove("d-none")
        })
    },600)}   

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
///////////////////////////////// alert error
let users = [
    JSON.stringify({"name" : "Ali12","password" : "12345qwert"})
    ,JSON.stringify({"name" : "MMd","password" : "123qwe"})
    ,JSON.stringify({"name" : "Hassan","password" : "rewq4321"})
    ,JSON.stringify({"name" : "Ahmad","password" : "asdfgh"})
]

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

