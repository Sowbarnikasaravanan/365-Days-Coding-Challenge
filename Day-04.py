# To check the string is pangram
def IsPangram(s):
    alpha="abcdefghijklmnopqrstuvwxyz"
    s=s.lower()
    s=s.replace(" ","")
    for i in alpha:
        if i not in s:
            return "Not Pangram"
    return "Pangram"
s=input("Enter the string:")
print(IsPangram(s))

'''
Sample Output:
Enter the string:The five boxing wizards jump quickly
Pangram

Enter the string:I am Sowbarnika
Not Pangram
'''
