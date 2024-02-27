//Palindrome:

//ask user to insert a word.
let userWord = prompt("Give me a word please ! ^^");
console.log(userWord);

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


