/* ################### */
/* ### Palindrome: ### */
/* ################### */

//ask user to insert a word.
let userWord = prompt("Give me a word please ! ^^");
//console.log(userWord);

//function () { } with IF inside to understand if word is palindrome.
let long = userWord.length;

 /**
  * Check if the word given is palindrome or not.
  * @param {string} userWord 
  * @returns 
  */
function checkPalindrome(userWord)
{
    /* let pal = true; */
    //I found this great solution on google
    for (let i = 0; i < long / 2; i++)
    {
        if (userWord[i] !== userWord[long - 1 - i])
        {
            alert(`"${userWord}" isn't a palindrome word`);
            /* pal = false; */
            return;
        }
        
    };
    alert(`You find a new palindrome word : "${userWord}"`);
};
/* console.log(checkPalindrome(userWord)); */
let tryCheck = checkPalindrome(userWord);
//try to move the messagge outside of the function and I break all, so back off to the oldest.
/* if (checkPalindrome(userWord))
{
    alert(`You find a new palindrome word : "${userWord}"`);
}
else
{
    alert(`"${userWord}" is not palindrome`);
} */


/* #################### */
/* ### Even or Odd: ### */
/* #################### */

//ask user to choose even or odd.
let userChoose = prompt("Choose between EVEN or ODD ! (:");
//console.log(userChoose);
let possibleChoise =
[
    "even",
    "odd"
];
//possibleChoise.includes(userChoose.toLowerCase()) ? alert(`You choose ${userChoose}`) : alert("Only the word EVEN or ODD are allowed, reload the page and try again.")

let porcoddio;

/**
 * Check if user give a valid string from the array
 * @param {string} userChoose 
 * @returns {boolean}
 */
function knowTheChoice (userChoose)
{
    if (possibleChoise.includes(userChoose.toLowerCase()))
    {
        console.log(`User choose ${userChoose}`);
        //alert(`You choose ${userChoose}`);
        /* if (userChoose.toLowerCase == "even")
        {
            let even = true;
            let odd = false;
            return even, odd;
        }
        else if (userChoose.toLowerCase == "odd")
        {
            let even = false;
            let odd = true;
            return even, odd;
        } */
    }
    else
    {
        console.log(`${userChoose} is not allowed`);
        alert("Only the word EVEN or ODD are allowed, reload the page and try again.");
    }
};
//console.log(knowTheChoice(userChoose));
let knowChoiceVar = knowTheChoice(userChoose);

let even,odd;
if (userChoose.toLowerCase() === "even")
{
    even = true;
    odd = false;
    /* return even, odd; */
}
else if (userChoose.toLowerCase() === "odd")
{
    even = false;
    odd = true;
    /* return even, odd; */
}

console.log(even, odd);

//ask user number between 1 and 5.
let userNumber = Number(prompt("Choose a number between 1 and 5"));
console.log(userNumber);
if (userNumber > 5 || userNumber < 1)
{
    alert("Don't trust my patience, i said between 1 and 5.. reload the page and try again.. don't make me angry..");
};

//mathrandom between 1 and 5 for npc number.
let npcNumber = Math.round(Math.random() * (5 - 1) + 1);
console.log(npcNumber);

//sum the two number(userNumber + npcNumber).

/**
 * make the sum of userNumber and the npcNumber
 * @param {Number} npcNumber 
 * @param {Number} userNumber 
 * @returns {Number}
 */
function sumNumbers (npcNumber,userNumber)
{
    let sum = npcNumber + userNumber;
    return sum ;
};
console.log(sumNumbers(npcNumber,userNumber));
let sum = sumNumbers(npcNumber,userNumber);

//understand IF sum is even or odd.
let sumNumbersVar = sumNumbers(npcNumber,userNumber);

/**
 * check if even or not.
 * @param {Number} sumNumbersVar 
 * @returns {Boolean}
 */
function isEven(sumNumbersVar)
{
    return (sumNumbersVar % 2 == 0);
};
isEven(sumNumbersVar) ? console.log("EVEN") : console.log("ODD");

//ALERT with winner.
if (isEven(sumNumbersVar) && even)
{
    alert(`You choose "${userChoose}" and give the number "${userNumber}" to us. The Nasa's PC randomly choose number "${npcNumber}" , we add it to your number with the result of "${sum}" and is EVEN ! You win Mr. Kevin Spacey !`);
}
else if (!(isEven(sumNumbersVar)) && odd)
{
    alert(`You choose "${userChoose}" and give the number "${userNumber}" to us. The Nasa's PC randomly choose number "${npcNumber}" , we add it to your number with the result of "${sum}" and is ODD ! You win Mr. Kevin Spacey !`);
}
else
{
    alert(`You choose "${userChoose}" and give the number "${userNumber}" to us. The Nasa's PC randomly choose number "${npcNumber}" , we add it to your number with the result of "${sum}". Unlucky my friend, try again...`);
}

