// To find the number of digits in a number
function CountDigits(number){
    var rem=0,count=0
    while(number>0){
        count=count+1
        number=Math.floor(number/10)
    }
    return count
}
var number=prompt("Enter the number:")
c=CountDigits(number)
console.log("The number of digits:"+c)

/*
Enter the number:23345
The number of digits:5
*/
