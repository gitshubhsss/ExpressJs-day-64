let btns=document.querySelectorAll("button");

for(let btn of btns){
    btn.addEventListener("click",()=>{
       if(btn.style.color==="red"){
        btn.style.color="black";
       }
       else{
        btn.style.color="red";
       }
    
    })
}