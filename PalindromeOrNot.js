function isPalindrome(word){
    var start=0
    var end=word.length-1
    while(start<=end){
        if(word[start]!=word[end]){
            return false;
        }
        else{
            start=start+1
            end=end-1
        }
    }
    return true;
}
var word=prompt("Enter the word to check:")
if(isPalindrome(word)){
    console.log(word+" is a palindrome")
}
else{
    console.log(word+" is not a palindrome")
}

/*
Sample Output:
Enter the word to check:madam
madam is a palindrome

Enter the word to check:sowbarnika
sowbarnika is not a palindrome

*/
