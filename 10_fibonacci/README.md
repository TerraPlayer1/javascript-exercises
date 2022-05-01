# Exercise 10 - Fibonacci

Create a function that returns a specific member of the Fibonacci sequence:

> A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.

```javascript
fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)
fibonacci(6) // returns 8
```
<!-- PSEUDO CODE -->
take a=1, b=1
add 1 to array
for (length)
c = a + b

if (i)
  a += c
  i = 0
  else
  b += c
  i = 1
b += c

add c to array

