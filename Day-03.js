// To reverse a number
function reverse(number){
    var t=number,rev=0,rem=0
    while(t>0){
        rem=t%10
        rev=rev*10+rem
        t=Math.floor(t/10)
    }
    console.log("The reverse of "+number+" is "+rev)
}
var number=prompt("Enter the number:")
reverse(number)

/*
Sample Output:
Enter the number:12345
The reverse of 12345 is 54321
*/
