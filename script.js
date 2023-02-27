
let colors=["red","green","blue","#009009","rgba(233,220,100,0.2)","pink","yellow"]
let colorside = document.querySelector(".color-name")
let btns = document.querySelector(".btn")

let current
btns.addEventListener("click",function(){
  
    let cat
    for(let i = 0;i<colors.length;i++){
     cat=colors[current]
    }
    document.body.style.backgroundColor=cat
    current=Math.floor(Math.random()*colors.length)
    colorside.textContent=cat
})


