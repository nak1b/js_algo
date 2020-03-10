## Multiple Pointers - isSubsequence

Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appears somewhere in the second string, without there order changing.

### Requirments
Time: O(n + m)
Space: O(1)

### Example
```
isSubsequence('hello', 'hello world') // true
isSubsequence('sing', 'sting) //true
isSubsequence('abc', 'abracadabra') //true
isSubsequence('abc', 'acb') //false (order matters)
```