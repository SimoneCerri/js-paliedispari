//### Palindrome: ###

//ask user to insert a word.
let userWord = prompt("Give me a word please ! ^^");
//console.log(userWord);

//function () { } with IF inside to understand if word is palindrome.
let long = userWord.length;

function checkPalindrome(userWord)
{
    //i found this great solution on google
    for (let i = 0; i < long / 2; i++)
    {
        if (userWord[i] !== userWord[long - 1 - i])
        {
            alert("This is not a palindrome word");
            return;
        }
        
    };
    alert("You insert a palindrome word !");
};

/* console.log(checkPalindrome(userWord)); */
let prova = checkPalindrome(userWord);


//### Even or Odd: ###

//ask user to choose even or odd.
let userChoose = prompt("Choose between EVEN or ODD !");
console.log(userChoose);

//ask user number between 1 and 5.
let userNumber = Number(prompt("Choose a number between 1 and 5"));
console.log(userNumber);

//mathrandom between 1 and 5 for npc number.
let npcNumber = Math.round(Math.random() * (5 - 1) + 1);
console.log(npcNumber);

//sum the two number(userNumber + npcNumber).
function sumNumbers ()
{
    let sum = npcNumber + userNumber;
    return sum ;
};
console.log(sumNumbers(npcNumber,userNumber));


//understand IF sum is even or odd.
let sumNumbersVar = sumNumbers(npcNumber,userNumber);
function isEven(sumNumbersVar)
{
    return (sumNumbersVar % 2 == 0);
};
isEven(sumNumbersVar) ? console.log("EVEN") : console.log("ODD");

//ALERT with winner.

