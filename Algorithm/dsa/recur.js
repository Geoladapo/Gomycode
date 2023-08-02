/*
Name: Is palindrome. 
Description: 
Test if a word is a palindrome. A word is a palindrome if only if it can be read from left to right or from right to left: gag; kayak; php; radar;....

Instructions:
Breakdown of the processing: we compare the characters located at the ends of the word:
if equality we test the rest of the word
if difference we stop
Stop condition: an empty word or a word containing a single character is a palindrome.
*/

// ALGORITHM
/**
 * 
 Here's the algorithm to check if a given string is a palindrome using recursion:

Algorithm: CheckPalindrome(s, start, end)

Input:

s: The input string to be checked for palindrome.
start: The starting index of the current substring to be checked.
end: The ending index of the current substring to be checked.


Output:

True if the substring s[start:end+1] is a palindrome, False otherwise.
Steps:

If start is greater than or equal to end, return True. This is the base case, where the substring has 0 or 1 character, and it is considered a palindrome by default.

If the character at index start is not equal to the character at index end, return False. This means the substring is not a palindrome.

Recur for the substring without the first and last characters by calling CheckPalindrome(s, start+1, end-1).

Return the result obtained from the recursive call.


Explanation:

The algorithm uses recursion to check if a given substring of the input string s is a palindrome. 
The start and end indices indicate the current portion of the string being checked. The algorithm follows these steps:

The base case is when the start index is greater than or equal to the end index. 
In this case, the substring has 0 or 1 character, and it is considered a palindrome by default. So, the function returns True.

Next, the algorithm compares the characters at the start and end indices. 
If they are not equal, the substring is not a palindrome, and the function returns False.

If the characters at start and end indices are equal, 
the algorithm calls itself recursively with the substring obtained by removing the first and last characters. 
This is done by incrementing the start index and decrementing the end index.

The result obtained from the recursive call is returned as the result of the current call.

The recursion continues until the base case is reached, or if a mismatch is found in the characters. 
If the recursion reaches the base case without any mismatches, it means the entire string is a palindrome, and the algorithm returns True. 
Otherwise, it returns False when it encounters a mismatch in characters during the recursion.
 */

// CODE

function isPalindrome(s, start, end) {
  // Base case: if start is greater than or equal to end, it's a palindrome
  if (start >= end) {
    return true;
  }

  // Check if the characters at start and end are the same
  if (s[start] !== s[end]) {
    return false;
  }

  // Recur for the substring without the first and last characters
  return isPalindrome(s, start + 1, end - 1);
}

// Helper function to check if a string is a palindrome
function checkPalindrome(s) {
  return isPalindrome(s, 0, s.length - 1);
}

// Test the function
const inputString = "radar";
if (checkPalindrome(inputString)) {
  console.log(`${inputString} is a palindrome.`);
} else {
  console.log(`${inputString} is not a palindrome.`);
}
