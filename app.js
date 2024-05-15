
// 1st project 
let rslt = document.querySelector(`.rslt`)
let inc = document.querySelector(`.inc`)
let dec =  document.querySelector(`.dec`)



let a = 0
dec.addEventListener( `click`,function(){

    if(a<=1){
        dec.style.backgroundColor = "red"
        dec.style.borderColor = "red"
        rslt.style.borderColor = "white"
    }
    else{
        a-- 
        rslt.innerHTML = a
    }

})




inc.addEventListener( `click`,function(){
  
    if(a===5){
        inc.style.backgroundColor = "red"
        dec.style.borderColor = "white"
    }
    else{
        a++
        rslt.innerHTML = a

    }
      


})



// 1st project end



// 2nd project start


let colorGenarator = document.querySelector (".colorGenarator")
let newColor = document.querySelector (".newColor")

newColor.addEventListener("click", function(){
    let red = Math.round(Math.random()*255);
    let green = Math.round(Math.random()*255);
    let blue = Math.round(Math.random()*255);

    console.log(red);
    colorGenarator .style .backgroundColor = `rgb( ${red} ,${green},${blue})`;
});
// 2nd project start End





