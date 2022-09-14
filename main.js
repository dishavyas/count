let count=0
let btnDec = document.getElementById("decrease")
let btnRes = document.getElementById("reset")
let btnInc = document.getElementById("increase")
btnDec.addEventListener("click",function() {
    count--
    document.getElementById("value").innerHTML= count
    
})
btnRes.addEventListener("click",function() {

    count=0
    document.getElementById("value").innerHTML= count
    
})
btnInc.addEventListener("click",function() {

    count++
    document.getElementById("value").innerHTML= count
    
})



