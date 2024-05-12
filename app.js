"use strict" ;
//Cursor effect
var cursor = document.querySelector("#cursor");
document.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
    x:dets.x +window.pageXOffset - 25,
    y:dets.y+window.pageYOffset -25 
});
});
function titleOnHover(){
document.querySelector(".landing-title").style.fontSize = "4.1rem"; 
}
function titleOffHover(){
document.querySelector(".landing-title").style.fontSize = "4rem"; 
}
function gymimgOnHover(){
cursor.innerHTML = "GYM"; 
}
function gymimgOffHover(){
cursor.innerHTML = ""; 
}
function trainimgOnHover(){
cursor.innerHTML = "Training"; 
}
function trainimgOffHover(){
cursor.innerHTML = ""; 
}
function equipimgOnHover(){
cursor.innerHTML = "Equipment"; 
}
function equipimgOffHover(){
cursor.innerHTML = ""; 
}
gsap.registerPlugin(ScrollTrigger);
const splitTypes= document.querySelectorAll('p');
splitTypes.forEach((char,i)=>{
    const text=new SplitType(char,{types:'char'})
    gsap.from(text.chars,{
        scrollTrigger:{
            trigger: char,
            start:'top 80%',
            end:'top 20%',
            scrub:false,
        },
        opacity:0.2,
        stagger:0.01
    })
})
const imgAnimation= document.querySelectorAll('.img');
imgAnimation.forEach((img)=>{
    gsap.from(img,{
        scrollTrigger:{
            trigger: img,
            start:'top 80%',
            end:'top 20%',
            scrub:false,
            
        },
        opacity:0.2,
        x:80,
        stagger:0.01,
        duration:1.5
    })
})

gsap.from(".img-reverse",{
        scrollTrigger:{
            trigger: ".img-reverse",
            start:'top 80%',
            end:'top 20%',
            scrub:false,
        },
        opacity:0.2,
        x:-80,
        stagger:0.01,
        duration:1.5
    })


//Smooth scrolling
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)