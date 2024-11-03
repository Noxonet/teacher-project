"use strict"
const 
    $ = document
    ,boxProdcutPics = $.querySelector(".box-product-pic")
    ,navBarPics = $.querySelector(".box-product-pic .nav-pics")
    ,boxInfo = $.querySelector(".box-info")
    ,productName = $.querySelector(".product-name")
    ,btnAddBascket = $.querySelector(".add-to-bascket")
    ,boxDetail =  $.querySelector(".box-detail")
    ,productPic = $.querySelector(".box-product-pic")
    ,boxPrice = $.querySelector(".box-info .price")
    ,products = [
<<<<<<< HEAD
        {id : 1,dataID : "book1",dataIDsaveICON : "save1",productName : "grammer book",price : 30 +"$",img : "./pics/Writing.General.webp",images : ["/teacherProject/pics/001AC.webp","/teacherProject/pics/003AC.webp","/teacherProject/pics/Speaking.webp"],detail : "                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"}
        ,{id : 2,dataID : "book2",dataIDsaveICON : "save2",productName : "listening book",price : 40 +"$",img : "./pics/Speaking.webp",images : ["/teacherProject/pics/001AC.webp","/teacherProject/pics/003AC.webp","/teacherProject/pics/Speaking.webp"],detail : "                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"}
        ,{id : 3,dataID : "book3",dataIDsaveICON : "save3",productName : "reading book",price : 10 +"$",img : "./pics/Listening.webp",images : ["/teacherProject/pics/001AC.webp","/teacherProject/pics/003AC.webp","/teacherProject/pics/Speaking.webp"],detail : "                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"}
        ,{id : 4,dataID : "book4",dataIDsaveICON : "save4",productName : "words book",price : 50 +"$",img : "./pics/003AC.webp",images : ["/teacherProject/pics/001AC.webp","/teacherProject/pics/003AC.webp","/teacherProject/pics/Speaking.webp"],detail : "                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"}
        ,{id : 5,dataID : "book5",dataIDsaveICON : "save5",productName : "words book",price : 50 +"$",img : "./pics/Untitled-1-2.webp",images : ["/teacherProject/pics/001AC.webp","/teacherProject/pics/003AC.webp","/teacherProject/pics/Speaking.webp"],detail : "                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"}
        ,{id : 6,dataID : "book6",dataIDsaveICON : "save6",productName : "words book",price : 50 +"$",img : "./pics/001AC.webp",images : ["/teacherProject/pics/001AC.webp","/teacherProject/pics/003AC.webp","/teacherProject/pics/Speaking.webp"],detail : "                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"}
=======
        {id : 1,dataID : "book1",dataIDsaveICON : "save1",productName : "grammer book",price : 30 +"$",img : "./../pics/Writing.General.webp",images : ["./../pics/001AC.webp","./../pics/003AC.webp","./../pics/Speaking.webp"],detail : "                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"}
        ,{id : 2,dataID : "book2",dataIDsaveICON : "save2",productName : "listening book",price : 40 +"$",img : "./../pics/Speaking.webp",images : ["./../pics/001AC.webp","./../pics/003AC.webp","./../pics/Speaking.webp"],detail : "                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"}
        ,{id : 3,dataID : "book3",dataIDsaveICON : "save3",productName : "reading book",price : 10 +"$",img : "./../pics/Listening.webp",images : ["./../pics/001AC.webp","./../pics/003AC.webp","./../pics/Speaking.webp"],detail : "                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"}
        ,{id : 4,dataID : "book4",dataIDsaveICON : "save4",productName : "words book",price : 50 +"$",img : "./../pics/003AC.webp",images : ["./../pics/001AC.webp","./../pics/003AC.webp","./../pics/Speaking.webp"],detail : "                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"}
        ,{id : 5,dataID : "book5",dataIDsaveICON : "save5",productName : "words book",price : 50 +"$",img : "./../pics/Untitled-1-2.webp",images : ["./../pics/001AC.webp","./../pics/003AC.webp","./../pics/Speaking.webp"],detail : "                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"}
        ,{id : 6,dataID : "book6",dataIDsaveICON : "save6",productName : "words book",price : 50 +"$",img : "./../pics/001AC.webp",images : ["./../pics/001AC.webp","./../pics/003AC.webp","./../pics/Speaking.webp"],detail : "                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"}
>>>>>>> 74f19d4 (#2)
    ]



let urlSearch = new URLSearchParams(location.search)
let userId = urlSearch.get("id")
let product = products.find(user => {
    return user.id == userId
})
let fragmentImg = $.createDocumentFragment()
let fragmentNavImg = $.createDocumentFragment()
const picsGenerator = product => {
<<<<<<< HEAD
    let img = $.createElement("img")
    img.setAttribute("src",product.images[0])
=======
    let img = $.createElement("img");
    img.setAttribute("src",product.images[0]);
>>>>>>> 74f19d4 (#2)
    fragmentImg.append(img)
}
const navPicsGenerator = product =>{
    for(let i = 0; i < product.images.length;i++){
        let img =$.createElement("img")
        img.setAttribute("src",product.images[i])
        fragmentNavImg.append(img)  
    }
}
let svgPath = '<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 32 32"><title>Detail</title><g stroke-linejoin="miter" fill="#ffffff" stroke-linecap="butt" class="nc-icon-wrapper"><polyline points="10 2 24 16 10 30" fill="none" stroke="#ffffff" stroke-linecap="square" stroke-miterlimit="10" stroke-width="4"></polyline></g></svg>'
const pagePrepareing = product =>{
    picsGenerator(product)
    boxProdcutPics.append(fragmentImg)
    navPicsGenerator(product)
    navBarPics.append(fragmentNavImg)
    productName.innerHTML = product.productName
    boxDetail.innerHTML = svgPath + product.detail
    boxPrice.innerHTML = product.price
}
pagePrepareing(product)


const btnBascketHandler = () => {
    //code
}
btnAddBascket.addEventListener("click",btnBascketHandler)
for(let n = 0 ;n < navBarPics.children.length ; n++){
    navBarPics.children[n].addEventListener("click",() => {
        productPic.children[1].setAttribute("src",navBarPics.children[n].getAttribute("src"))
    })
}
const detailArrow = $.querySelector(".box-info .box-detail svg")
detailArrow.addEventListener("click",() => {
    boxDetail.classList.toggle("box-detail-change")
    boxProdcutPics.classList.toggle("box-product-pic-change")
    btnAddBascket.classList.toggle("dis-show")
    productName.classList.toggle("product-name-change")
    boxPrice.classList.toggle("price-change")
})