//Button constants
const A = 'A';
const B = 'B';
const C = 'C';
const ONE = '1';
const TWO = '2';
const THREE = '3';
const FOUR = '4';

//Variables
let itemCode = '';


//Display screen/window
const codeWindow_div = document.getElementById('code-window');

//Assign code and control buttons
const a_button = document.getElementById('letter-a');
const b_button = document.getElementById('letter-b');
const c_button = document.getElementById('letter-c');
const one_button = document.getElementById('number-1');
const two_button = document.getElementById('number-2');
const three_button = document.getElementById('number-3');
const four_button = document.getElementById('number-4');
const select_button = document.getElementById('select');
const clear_button = document.getElementById('clear');

//Code and control button listners
a_button.addEventListener('click', function () {
    console.log(A + ' pressed');
    addToItemCode(A);
});
  
b_button.addEventListener('click', function () {
    console.log(B + ' pressed');
    addToItemCode(B);
});
  
c_button.addEventListener('click', function () {
    console.log(C + ' pressed');
    addToItemCode(C);
});
  
one_button.addEventListener('click', function () {
    console.log(ONE + ' pressed');
    addToItemCode(ONE);
});
  
two_button.addEventListener('click', function () {
    console.log(TWO + ' pressed');
    addToItemCode(TWO);
});
  
three_button.addEventListener('click', function () {
    console.log(THREE + ' pressed');
    addToItemCode(THREE);
});
  
four_button.addEventListener('click', function () {
    console.log(FOUR + ' pressed');
    addToItemCode(FOUR);
});

select_button.addEventListener('click', function () {
    console.log('select pressed');
    selectItem();
});
  
clear_button.addEventListener('click', function () {
    console.log('clear pressed');
    itemCode = '';
    printItemCode();
}); 

// function to check if character is valid. If yes add to itemCode
function addToItemCode(char) {
    if (itemCode.length < 2) {
      if (itemCode.length < 1 && isLetter(char)) {
        itemCode += char;
      }
      if (itemCode.length == 1 && !isLetter(char)) {
        itemCode += char;
      }
    }
    // console.log('item code ' + itemCode);
    printItemCode();
    if (itemCode.length == 2) {
      printOutput(itemCode);
    }
}

// function to check if character is a letter. true if yes
function isLetter(char) {
    return char.match(/[a-z]/i);
}

// function to display item code in item code screen/window
function printItemCode() {
    codeWindow_div.innerHTML = itemCode;
}

// function to place selected item/snack into drop box
function selectItem(){
    if (itemCode.length == 2) {
        let snackId = itemCode;
        if (snackId) {
            fadeOutEffect(snackId, function() {
                // Move the image to the drop box after fade-out
                let imgBox = document.getElementById('imgBox'); // Assuming you have a dropBox element
                imgBox.appendChild(snackId);
            });
        } else {
            alert('Item not found');
        }

                
    }
}

//alt 
//     document.getElementById('select').addEventListener('click', function() {
//     let imgBox = document.getElementById('imgBox');
//     imgBox.style.opacity = 1;
//   });





