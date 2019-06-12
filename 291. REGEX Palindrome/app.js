function checkPalindrome(str){
    let tempStr = str.match(/[a-z]+/ig)
    console.log(tempStr);

    return first === second;
}

console.log(checkPalindrome("Was it a car or a car I saw"));
// true
console.log(checkPalindrome("Red -rum-, sir,-is-murder"));
// true
console.log(checkPalindrome("I got up early this morning"));
// false