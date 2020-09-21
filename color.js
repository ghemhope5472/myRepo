var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = randomColor();
var colorDisplay = document.querySelector("#colorNameDisplay");
colorDisplay.textContent = pickedColor;
var msgDisplay = document.getElementById("message");
var h1bgColor = document.querySelector("h1");
var reset= document.querySelector("#resetBtn");
var easyBtn = document.getElementById("easybtn");
var hardBtn = document.getElementById("hardbtn");


easyBtn.addEventListener("click",function(){
        numSquares = 3;
        easyBtn.classList.add("selected");
        hardBtn.classList.remove("selected");
        colors = generateRandomColors(numSquares);
        pickedColor = randomColor();
        colorDisplay.textContent = pickedColor;

       for(var i = 0; i < squares.length; i++){
            if ( colors[i]){
                squares[i].style.background = colors[i];
            }else{
                squares[i].style.display = "none";
            }
        }
});

hardBtn.addEventListener("click",function(){
        numSquares = 6;
        easyBtn.classList.remove("selected");
        hardBtn.classList.add("selected");
        colors = generateRandomColors(numSquares);
        pickedColor = randomColor();
        colorDisplay.textContent = pickedColor;

        for(var i = 0; i < squares.length; i++){
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
            
        }
});

reset.addEventListener("click",function(){
    
       
    // generate random colors
        colors = generateRandomColors(numSquares);
    // assign new pick color
        pickedColor = randomColor();
    // assign new colors to squares
        colorDisplay.textContent = pickedColor;
        for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
        reset.textContent = "New Colors";
        msgDisplay.textContent = " ";
        colorDisplay.style.background = "rgb(59, 117, 172)"
        h1bgColor.style.background = "rgb(59, 117, 172)";

});




//--------------------------------------------------------------------MAIN CODE HERE!!!

hardBtn.classList.add("selected");

for (var i = 0; i < squares.length; i++){
                                                                      // assign colors to each squares
       squares[i].style.background = colors[i];
                                                                    //assign click event listener to each squares
        squares[i].addEventListener("click",function(){
            
            var clicked = this.style.background;
            console.log(clicked, pickedColor);
            if(clicked === pickedColor){
                msgDisplay.textContent = "Correct!";
                reset.textContent ="Play Again?";
                changeColors(clicked);                                  // pass the value of clicked to another function
            }else{
                console.log("Wrong Color!");
                this.style.background = "#3b3b3b";  
                msgDisplay.textContent = "Try Again!";
            }
    });
} 


//------------------------------------------------------------------- END OF MAIN CODE!!!
//------------------------------------------------------------------- FUNCTIONS AREA


function changeColors(clicked){                                         // the clicked value is pass here
    for(var i = 0; i < squares.length; i++){                         // loops to all squares
        squares[i].style.background = clicked;                      ///  set all squares with value of picked color
        h1bgColor.style.backgroundColor = pickedColor;
        colorDisplay.style.backgroundColor = pickedColor;      
    }
}
function randomColor(){                                                 /// select random number based on squares.length and return one to as picked number
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors(numSquares){                                    /// return one rgb value and push to colors array
    //make an array
    var arr=[];
    //add num random colors to arr
    for (var i = 0; i < numSquares; i++){
        randomRGB();
        arr.push(randomRGB());
    }
     // return array
    return arr;
}
function randomRGB(){
    var r = Math.floor(Math.random() * 256 +1);     // generate random no. for R
    var g = Math.floor(Math.random() * 256 +1);     // generate random no. for G
    var b = Math.floor(Math.random() * 256 +1);     // generate random no. for B
    return "rgb(" + r + ", " + g + ", " + b + ")";   // concatenate all values.. mind the spacing(===)!!!!
}


