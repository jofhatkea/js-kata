# JS-KATA
## Week 20, Tuesday
### Mockify this - mOcKIfy ThIs!
You have previously created a bit of code to create a "Spongebob mockified" version of a string. I.e. a version where upper or lowercase is completely random for each letter.

Your task now, is to create a function called `mockify` that receives a string, and returns a mocified version of that string.

The .html and .js files have been prepared for you - copy everything from materials to mysolution (`cp ./materials/* ./mysolution/`)

#### Testing
Call your function in a console.log, like 
`console.log( mockify('This is a test') );`
That should write something like `tHiS IS a tESt` with random upper and lower case letters.

#### Additional fun
When you get it working, try this for fun

1. Modify the function, so that it uses `this` as input-parameter, if nothing else is supplied (i.e. a default parameter)
2. In the console, write: `String.prototype.mockify = mockify;`
3. Now you will be able to mockify any string - try `"This is a test".mockify()` for instance.
4. You can also try `document.querySelector('h1').textContent = document.querySelector('h1').textContent.mockify()`

