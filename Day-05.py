# To check the number is armstrong or not
num=int(input("Enter the number:"))
n=num
rem=0
rev=0
while(n>0):
    rem=n%10
    rev=rev+rem*rem*rem
    n=n//10
if num==rev:
    print(num,"is an armstrong number")
else:
    print(num,"is not an armstrong number")
'''
Sample Output:
Enter the number:153
153 is an armstrong number
'''
