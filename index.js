"use strict"
let DB;
let objectStore;
window.addEventListener("load",evn => {
    const dataB = indexedDB.open("WEB",1)
    let flagdata = false
    dataB.addEventListener("success",() => {
        console.warn("dataBase successfuly connected")
    })
    dataB.addEventListener("error",err => {
        alert("dataBase doesn't connect")
        alert(`the Error is : ${err()}`)
    })
    dataB.addEventListener("upgradeneeded",event => {
        
        DB = event.target.result
        if(!DB.objectStoreNames.contains("users")){
            objectStore =  DB.createObjectStore("users",{
                keyPath : "id"
            })
        }
    })
    setTimeout(userAdder,1000)
})
function userAdder () {
    let newUser = {id : 1 ,name : "amir", password : 'helloWorld'}
    let DBTransaction = DB?.transaction("users","readwrite") 
    DBTransaction?.addEventListener("error",err => alert("Error : " , err()))
    let store = DBTransaction?.objectStore("users")
    let requestDB = store?.add(newUser)
    requestDB?.addEventListener("error",err => console.warn(err))
}

const page = document.querySelector(".page"), 
    navTop = document.querySelector(".nav-top"),
    navTopStyle = getComputedStyle(navTop),
    styleRoot = getComputedStyle(document.documentElement),
    RootColor1  = styleRoot.getPropertyValue("--color1"),
    rowNavTop = document.querySelectorAll(".nav-top .row"),
    boxProduceBack = document.querySelector(".box-produce-back"),
    boxProduceFront = document.querySelector(".box-produce-front"),
    produce = document.querySelectorAll(".box-produce-back .box-produce-front .produce"),
    arrowR = document.querySelector(".right-arrow"),
    arrowL = document.querySelector(".left-arrow"),
    produceCount = produce.length,
    searchInput = document.querySelector(".box-search input"),
    searchIcon = document.querySelector(".box-search svg"),
    navLeft = document.querySelector(".nav-left"),
    threeLine = document.querySelector(".three-line"),
    database = [],
    ulBox = document.querySelectorAll(".box-list .box"),
    ulBoxLi = document.querySelectorAll(".box-list .box li"),
    boxShowProduct = document.querySelector(".box-show-produce"),
    searchBox = document.querySelector(".search-Box"),
    scrollNav = document.querySelector(".nav-top .scroll-nav"),
    autoCompBox = document.querySelector("#auto-comp"),
    dropDown = document.querySelectorAll(".drop-down"),
    products = [
        {id : 1,dataID : "book1",dataIDsaveICON : "save1",productName : "grammer book",price : 30 +"$",img : "./pics/Writing.General.webp",images : ["./pics/001AC.webp","./pics/003AC.webp","./pics/Speaking.webp"],detail : "                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"}
        ,{id : 2,dataID : "book2",dataIDsaveICON : "save2",productName : "listening book",price : 40 +"$",img : "./pics/Speaking.webp",images : ["./pics/001AC.webp","./pics/003AC.webp","./pics/Speaking.webp"],detail : "                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"}
        ,{id : 3,dataID : "book3",dataIDsaveICON : "save3",productName : "reading book",price : 10 +"$",img : "./pics/Listening.webp",images : ["./pics/001AC.webp","./pics/003AC.webp","./pics/Speaking.webp"],detail : "                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"}
        ,{id : 4,dataID : "book4",dataIDsaveICON : "save4",productName : "words book",price : 50 +"$",img : "./pics/003AC.webp",images : ["./pics/001AC.webp","./pics/003AC.webp","./pics/Speaking.webp"],detail : "                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"}
        ,{id : 5,dataID : "book5",dataIDsaveICON : "save5",productName : "pro words book",price : 50 +"$",img : "./pics/Untitled-1-2.webp",images : ["./pics/001AC.webp","./pics/003AC.webp","./pics/Speaking.webp"],detail : "                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"}
        ,{id : 6,dataID : "book6",dataIDsaveICON : "save6",productName : "grammer in use",price : 50 +"$",img : "./pics/001AC.webp",images : ["./pics/001AC.webp","./pics/003AC.webp","./pics/Speaking.webp"],detail : "                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"}
    ],
    productsName = [
        "grammer book",
        "listening book",
        "reading book",
        "words book",
        "grammer in use",
        "pro words book"
    ]
////////////////////////////// row box links 
// the dynamic Row box generator 
// for add Row box just add key:value to links Array 
// set a dataset with "able" value to row you want
//for creat item set data set name: item'number' like item1  
const links = {
    "about" : ["#","#","#"],
}
/////////////////////////////////// row box links generat
dropDown.forEach(row =>{
    if(row.dataset.boxable === "able"){        
        let box = document.createElement("div")
        box.classList.add("drop-down-box-items")
        for(let i = 0;i < links[row.getAttribute("name")].length;i++){
            let n = i + 1
            if(row.dataset[`item${String(n)}`] != "able"){
                let Elem = document.createElement("a")
                Elem.setAttribute("href",links[row.getAttribute("name")][i])
                Elem.innerHTML = row.dataset[`item${String(n)}`]
                box.append(Elem)
            }
        }
        row.append(box)
        
    }
})
///////////////////////////////
let fragmentProduct = document.createDocumentFragment()

const prudoctsGenerator = product =>{
    let Elem = document.createElement("div")
    Elem.classList.add("produce")
    Elem.setAttribute("data-dataID",product.dataID)
    Elem.setAttribute("data-id",product.id)
    Elem.innerHTML = `<svg viewBox="0 0 24 24" data-id="${product.dataIDsaveICON}" fill="none" xmlns="http://www.w3.org/2000/svg" class="save-icon" stroke="#ffffff">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
    <path d="M15.0309 3.30271C13.0299 2.8991 10.9701 2.8991 8.96913 3.30271C6.66186 3.76809 5 5.82231 5 8.20894V18.6292C5 20.4579 6.9567 21.596 8.51221 20.6721L11.3451 18.9895C11.7496 18.7492 12.2504 18.7492 12.6549 18.9895L15.4878 20.6721C17.0433 21.596 19 20.4579 19 18.6292V8.20894C19 5.82231 17.3381 3.76809 15.0309 3.30271Z" fill="#000000"></path> </g></svg>
    <img src=${product.img}>
    <p>${product.price}تومان</p>
    <a 
    href="/teacherProject/productPage/products.html?id=${product.id}" <!-- this is your product site address -->
    >
    <svg xmlns="http://www.w3.org/2000/svg" class="go-to-product"  viewBox="0 0 32 32"><title>right arrow</title><g stroke-linejoin="miter" fill="#ffffff" stroke-linecap="butt" class="nc-icon-wrapper"><polyline points="10 2 24 16 10 30" fill="none" stroke="#ffffff" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></polyline></g></svg></a>
    <button>افزودن به سبد</button>
    <p class="productName">${product.productName}</p></div>`
    fragmentProduct.append(Elem)
}
products.forEach(product => {
    prudoctsGenerator(product)
})

boxShowProduct.append(fragmentProduct)
///////////////////////////////
const productShow = document.querySelectorAll(".box-show-produce .produce"),
addBascketBTN = document.querySelectorAll(".box-show-produce .produce button"),
saveIcon = document.querySelectorAll(".box-show-produce .produce .save-icon"),
GotoProduct = document.querySelectorAll(".box-show-produce .produce .go-to-product")
//////////////////////////////
let localList = []

addBascketBTN.forEach(item => {
    let id =  item.parentElement.dataset.id
    if(JSON.parse(localStorage.getItem(id)) === null){
        localStorage.setItem(id,JSON.stringify({"status" : false}))
    }
    if(JSON.parse(localStorage.getItem(id)).status){
        item.classList.add("add-bascket-change") //
        item.innerHTML = "افزوده شد" //
    }
    else{
        item.classList.remove("add-bascket-change")
        item.innerHTML = "افزودن به سبد" //
    }
    const addBascketHandler = () => { 
        let id =  item.parentElement.dataset.id
        
        if(!JSON.parse(localStorage.getItem(id)).status){
            localStorage.setItem(id,JSON.stringify({"status" : true}))
            item.innerHTML = "افزوده شد" //
            item.classList.add("add-bascket-change") //
        }else{
                localStorage.setItem(id,JSON.stringify({"status" : false}))
                item.innerHTML = "افزودن به سبد" //
                item.classList.remove("add-bascket-change")
        }}
    item.addEventListener("click",addBascketHandler) 
})

saveIcon.forEach(icon => {
    if(JSON.parse(localStorage.getItem(icon.dataset.id)) === null){
    localStorage.setItem(icon.dataset.id,JSON.stringify({"status" : false}))
    }
    if(JSON.parse(localStorage.getItem(icon.dataset.id)).status){
        icon.lastChild.children[0].style.fill = "#ffffff" 
    }
    const saveIconHandler = () => {
        if(!JSON.parse(localStorage.getItem(icon.dataset.id)).status){
            localStorage.setItem(icon.dataset.id,JSON.stringify({"status" : true}))
            icon.lastChild.children[0].style.fill = "#ffffff" 
        }else{
            localStorage.setItem(icon.dataset.id,JSON.stringify({"status" : false}))
            icon.lastChild.children[0].style.fill = "none" 
        }}
    icon.addEventListener("click",saveIconHandler)
    })
let fragmentSearchElem = document.createDocumentFragment()
const searchHandler = () => {
    page.classList.add("blur")
    searchBox.classList.remove("dis-none")
    let value = searchInput.value
    products.forEach(item => {
        let name = item.productName
        name.includes(value) && searchboxElemGenerator(item)
    })
    searchBox.append(fragmentSearchElem)
    if(searchBox.children.length < 2){
        let Elem = '<p class="product_not_found">موردی یافت نشد</p>'
        searchBox.insertAdjacentHTML("beforeend",Elem)
    }
}
searchIcon.addEventListener("click",searchHandler)
/////////////////////////////////////search box
const searchBoxCloseIcon = document.querySelector(".search-Box .Close-icon")
searchBoxCloseIcon.addEventListener("click",() => {
    page.classList.remove("blur")
    searchBox.classList.add("dis-none")
    let len = products.length + 1
    for (let index = 1; index < len; index++) {
        try{
            searchBox.children[1].remove() 
        }catch{
            // 
        }
    }
})
const searchboxElemGenerator = item => {
    let itemInfo = document.createElement("div")
    itemInfo.classList.add("search-product")
    itemInfo.innerHTML =`<img src="${item.img}" alt="">
    <p class="search-product-name">${item.productName}</p>
    <p class="search-product-detail">${item.detail}</p>
    <a href="/teacherProject/productPage/products.html?id=${item.id}"><button>رفتن به صفحه</button></a>
    <p class="search-product-price">${item.price}تومان</p>`
    fragmentSearchElem.append(itemInfo)
}
const searchBoxAutoComp =  evt => {
    evt.preventDefault()
    let inputValue = searchInput.value
    if(!inputValue){
        return autoCompBox.innerHTML =  ""
    }
    autoCompBox.innerHTML =  ""
    if(inputValue){
        let gnerate = productsName.filter( product => {
            if(product.includes(inputValue)){
                let Elem = `<li>${product}</li>`
                autoCompBox.insertAdjacentHTML("beforeend",Elem)
                let lastElem = autoCompBox.lastChild
                lastElem.addEventListener("click",() => {
                    searchInput.value = lastElem.innerHTML
                })
            }})
            if(autoCompBox.children.length != 0){
                return gnerate
            }}
            if(evt.key === "Enter"){
                evt.preventDefault()
        return searchHandler()
    };
    
    let Elem = `<li>${inputValue}</li>`
    return autoCompBox.innerHTML = Elem
}
searchInput.addEventListener("keyup",searchBoxAutoComp)
const autocompLi = env => {
    let inputValue = searchInput.value
    inputValue.innerHTML = evt.target
    
}
///////////////////////////////////
searchIcon.addEventListener("click",() => {
    let filterbox = database.filter(data =>{
        data === searchInput.value
    })
})
threeLine.addEventListener("click",() => {
    threeLine.classList.toggle("three-line-change")
    navLeft.classList.toggle("nav-left-change")
})
window.addEventListener("scroll",() => {
    if(document.documentElement.scrollTop < 20){
        navTop.classList.remove("nav-top-active")
    }else{
        navTop.classList.add("nav-top-active")
    }
    let scrollPercent = window.scrollY * 100 / (document.body.clientHeight - innerHeight)
    scrollNav.style.width = `${scrollPercent}%`
})
////////////////////////////////////////// fix box Product
let viewWidth = 0,scrollStatus = 0,scrollCount = 0
const resizeWindow = () => {
    scrollCount = scrollStatus / produce[0].scrollWidth
    scrollCount = Math.round(scrollCount) 
    viewWidth = boxProduceFront.scrollWidth / produceCount
    boxProduceBack.scrollTo(viewWidth * scrollCount,0)
}
window.addEventListener("resize",resizeWindow)
resizeWindow()
const ArrowRightFunc = () => {
    let maxScroll = viewWidth * (produceCount - 1)
    scrollStatus += viewWidth
    if(maxScroll < scrollStatus){
        scrollStatus = 0;
        boxProduceBack.scrollTo(0,0)
    }
    boxProduceBack.scrollTo(scrollStatus,0);
    scrollCount = scrollStatus / viewWidth   
    
}
const ArrowLeftFunc = () => {
    scrollStatus -= viewWidth
    if(scrollStatus < 0){
        scrollStatus = viewWidth * (produceCount - 1);
    }
    boxProduceBack.scrollTo(scrollStatus,0);
    scrollCount = scrollStatus / viewWidth
    clearInterval(timerArrow)
}
arrowR.addEventListener("click",ArrowRightFunc)
arrowL.addEventListener("click",ArrowLeftFunc)
let timerArrow = setInterval(() => {
    ArrowRightFunc()
    scrollCount++
    scrollCount > produce.length - 1 && (scrollCount = 0)

    scrollCount < 0 && (scrollCount = 0)
    
},5000)
////////////////////////////////////// set for phone touch 
let firstTouchPos,
secondTouchPos,
flag

let fitBox = () => {
    viewWidth = boxProduceBack.clientWidth
}
window.addEventListener("resize", fitBox)
fitBox()
boxProduceBack.addEventListener("touchstart",event => {
    firstTouchPos = event.targetTouches[0].clientX
    clearInterval(timerArrow)

})
boxProduceBack.addEventListener("touchmove",event => {
    event.preventDefault()
    secondTouchPos = event.targetTouches[0].clientX
    if(firstTouchPos > secondTouchPos){
        if(flag){
            scrollCount++
            flag=false
        }
        scrollStatus= viewWidth * scrollCount 
        boxProduceBack.scrollLeft = scrollStatus
    }
    if(firstTouchPos < secondTouchPos){ 
        if(flag){
            scrollCount--
            flag=false
        }
        scrollStatus= viewWidth * scrollCount 
        boxProduceBack.scrollLeft = scrollStatus
    }
    if(scrollCount > produce.length - 1){
        scrollCount = produce.length - 1
    }
    if(scrollCount < 0){
        scrollCount = 0
    }
})
boxProduceBack.addEventListener("touchend",event => {
    flag = true
})

