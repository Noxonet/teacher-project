window.addEventListener("load",evn => {
    const dataB = indexedDB.open("users",1)
    dataB.addEventListener("success",() => console.warn("dataBase successfuly connected"))
    dataB.addEventListener("error",err => {
        alert("dataBase doesn't connect")
        alert(`the Error is : ${err}`)
    })
})

export {}