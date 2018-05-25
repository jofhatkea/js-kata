# JS-KATA
## Week 21, Friday
### Fizzbuzz

Create a JavaScript program that loops through all the numbers from 1 to 100, and logs them to the console.
However, if the number is divisible by 3, the word `fizz` should be logged rather than the number.
And if the number is divisible by 5, the word `buzz` ... and if it is divisible by both 3 and 5, `fizzbuzz`.

This means that the output would look something like this:

* 1
* 2
* fizz
* 4
* buzz
* fizz
* 7
* 8
* fizz
* buzz
* 11
* fizz
* 13
* 14
* fizzbuzz
* 16

... and so on

### Needful info

To test if a number is divisible by something, use the *modulus* operator, written as `%` in JavaScript. See http://javascript.info/operators#remainder 

E.g. if you want to know if `value` is divisible by four, you would write:
```javascript
if( value % 4 === 0 ) {
    console.log(`${value} is divisible by 4`);
} else {
    console.log(`${value} isn't divisible by 4`);
}
```

### Useless info
The `Fizzbuzz` exercise is often used as a test when hiring programmers. This means that when you have solved this kata, you also have a better chance of getting hired! It also means that there are thousands of solutions on the web - please **don't** start looking, but build your own solution! It is the journey that is important, not the result!

