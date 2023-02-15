const one = document.querySelector(".nav-one")
const analog = document.querySelector(".analog")
const greater = document.querySelector(".greater")

analog.addEventListener("mousemove", function(){
    one.style.transform = "translateY(-0%)"
    analog.style.transform ="translateY(-0%)"
    // greater.textContent = "Analog -" 
});

one.addEventListener("mouseleave", function(){ 
    one.style.transform = "translateY(-140%)"
});

analog.addEventListener("mouseleave", function(){  
    // greater.innerHTML = "Analog +" 
    one.style.transform = "translateY(-140%)"
 });


 
//  ---------------------------------second---------------------------------

const two = document.querySelector(".nav-two")
const analogy = document.querySelector(".analogy")
const greatering = document.querySelector(".greatering")

analogy.addEventListener("mousemove", function(){
    two.style.transform = "translateY(-0%)"
    analogy.style.transform ="translateY(-0%)"
    // greatering.innerHTML = "Clothing -" 
});

two.addEventListener("mouseleave", function(){ 
    two.style.transform = "translateY(-140%)"
});

analogy.addEventListener("mouseleave", function(){
    // greatering.innerHTML = "Clothing +"   
    two.style.transform = "translateY(-140%)"
 });


// ----------------------------------------Three---------------------------------------
 const three = document.querySelector(".nav-three")
const analogyy = document.querySelector(".analogyy")
const greaterr = document.querySelector(".greaterr")

analogyy.addEventListener("mousemove", function(){
    three.style.transform = "translateY(-0%)"
    analogyy.style.transform ="translateY(-0%)"
    // greaterr.innerHTML = "Object -" 
});

three.addEventListener("mouseleave", function(){
     
    three.style.transform = "translateY(-140%)"
});

analogyy.addEventListener("mouseleave", function(){ 
    // greaterr.innerHTML = "Object +" 
    three.style.transform = "translateY(-140%)"
 });
