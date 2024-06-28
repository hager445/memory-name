let imgs = document.querySelectorAll(".img-box img");
let imgBoxs = document.querySelectorAll(".img-box");
let boxCounter = document.querySelector(".box-parent");
let counterParent = document.querySelector(".counter_container");
let timer = document.querySelector(".timer")
let counter = document.querySelector(".counter")
let startBtn = document.querySelector(".button-82-pushable")
let counterNum = 0 ;
// loop through images to hide them :
// let boxLen = imgBoxs.length ;

imgs.forEach(img => {
    img.classList.add("hide");
});

window.onload = function initializeGame (){
    startBtn.style.display = "block"
}

// the function starts when click start btn :
startBtn.addEventListener("click" , start);
function start(){
    setTimer();
    startBtn.style.display = "none"
 boxCounter.style.display = ""
        counterParent.style.display = ""
     
}
// to set the timer :
function setTimer(){
    let mins = 0
    let secs = 0
    setInterval(()=>{
             secs++;
             if (mins >= 10) {
                timer.innerText =  mins + ' : ' + secs ; 
                if (secs < 10) {
                    timer.innerText =  mins + ' : '+ "0" + secs ; 
                }
            
             }
             else{
                timer.innerText = "0" + mins + ' : ' + secs ; 
                if (secs < 10) {
                    timer.innerText =  "0"+ mins + ' : '+ "0" + secs ; 
                }
             }
            if (secs == 60) {
                mins++
                secs = 0
            }
    },1000)
}



let id =[]
let newArr = [];
imgBoxs.forEach(box => {
      box.addEventListener("click" , function chick (e) {
              let flipped = box.firstChild;
        

           
             let attrib = flipped.getAttribute("data-peg");
             if (attrib !== null ) {
              newArr.push(attrib)
             }
             if (newArr.length > 2) {
              newArr = []
             }
  
              flipped.style.display = "block"
            
                        for (let i = 0; i < newArr.length; i++) {
           
                         

                            if(newArr.length === 2){
                            if (newArr[i] === newArr[i+1] ){
                                let elements = document.querySelectorAll(`[data-peg='${newArr[i]}']`);
                                elements.forEach(element => {
                              
                                element.style.display = "block"
                                flipped.style.display = "block"
                                    element.classList.add("clear")
                                    element.removeAttribute('data-peg');
                              
                         
                               
                                     
                                          
                                        }
                                    )
            
                                
                                newArr = []
                                console.log(newArr);
                                console.log(`equal ${newArr}`);
                           
                            }
                                      
                                      
        
                               
        
                                       if (newArr[i] !== newArr[i+1] ){
                                
                                        let elements = document.querySelectorAll(`[data-peg='${newArr[i]}']`);
                                        elements.forEach(element => {
                                        
                                            if (element.classList.contains("clear")) {
                                                flipped.removeEventListener("click", chick);
                                                
                                             }
                                             else{
                                                setTimeout(()=>{
                                                 element.style.display = "none"
                                                
                                                   flipped.style.display = "none"
                                                     },200)
                                             }
                                        });
                     
                                             newArr = []
               
                                         
                                         }
                              
                                        }
                             
                          
                      
                      
                      
                                    }
    
                 


                                
       
           
              
              
   
      })
  });
  






// ==========================================================================================


 