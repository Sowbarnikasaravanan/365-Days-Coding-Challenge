/*
Find the largest pair sum in an array of distinct integers.

Examples :

Input: arr[] = [12, 34, 10, 6, 40]
Output: 74
Explanation: Sum of 34 and 40 is the largest, i.e, 34 + 40 = 74.
Input: arr[] = [10, 20, 30]
Output: 50
Explanation: 20 + 30 = 50.
*/
class Solution {
    public static int pairsum(int[] arr) {
        // code here
        Arrays.sort(arr);
        int n=arr.length;
        return arr[n-1]+arr[n-2];
    }
}
