//1 on DOM element
/* <button onclick="document.body.style.backgroundColor='orange'">Make Orange</button> */


//2 function call

function makeRed(){
    document.body.style.backgroundColor = 'Red';
}

//3 function with getElementByID

const makeBlue = document.getElementById('make-blue');
       makeBlue.onclick = makeBlueBack;
       function makeBlueBack(){
        document.body.style.backgroundColor = 'blue';
       }

//4 same as 3 but ussing function diretcly after onClick

const makePurple = document.getElementById('make-purple');
        makePurple.onclick = function purple(){
            document.body.style.backgroundColor = 'purple';
        }

// Option 1 (addEventListener)

const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);

function makePink()
{
  document.body.style.backgroundColor = 'pink';
}

// Option 2 (addEventListener)
const makeGreen = document.getElementById('make-green');
 makeGreen.addEventListener('click', function greenButton(){
    document.body.style.backgroundColor = 'green';
 })

// Option 3 (addEventListener) most important 
 document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})