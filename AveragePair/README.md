## Multiple Pointers - Find Average Pair

Write a function called averagePair. Given sorted array of integers and target average. Determine if there is a pair of values in the array where the average of the pair equals the target average. THere may be more than one pair that matches the average target.

### Bonus
Time: O(n)
Space: O(1)

### Example
```
averagePair([], 2) // false
averagePair([1, 2, 3], 2.5) //true
averagePair([1, 3, 4, 5, 6, 7, 10, 12, 19], 8) //true
averagePair([-1, 0, 3, 4, 5, 6], 4.1) //false
```