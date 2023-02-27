const data =["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
let colorName=document.querySelector(".color-name")
let btns = document.querySelector(".btn")



function changeColor(){
    let currentItem
    currentItem =  Math.floor(Math.random()*data.length)
    return currentItem
}
btns.addEventListener("click",function(){
    let hexcolor = "#"
    for(let i =0;i<6;i++){
       hexcolor += data[changeColor()]
    }
document.body.style.background=hexcolor
colorName.textContent=hexcolor
})

