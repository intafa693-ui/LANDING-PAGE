const image= document.querySelector("#img")
const left= document.querySelector(".fa-angle-left")
const right= document.querySelector(".fa-angle-right")
const discount= document.querySelector(".discount")
     
let index=0;
const img= ["shoes-1.png","shoes-2.png","shoes-3.png","shoes-4.png",'shoes-5.webp','shoes-6.webp']

right.addEventListener("click",()=>{
    
     
    if(index < img.length-1){
        index++;
        image.setAttribute('src',img[index])
    }
    
    
})


left.addEventListener("click",()=>{
   
   if(index>0){
    index--;
    image.setAttribute('src',img[index])
   }

})
