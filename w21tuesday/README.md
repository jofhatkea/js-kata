# JS-KATA
## Week 21, Tuesday
### Splitting text into separate spans
**The backstory**

Your co-worker has create a cool effect with text jumping in a wave. Take a look at the live HTML and CSS.
The problem is that it requires the text to be split into several `<span>` elements, very hard to do by hand. Also, is has a lot of hard-coded CSS, and only works for a single text at a time.

Your job is to build JavaScript that splits any given text into span-elements, and sets the animation-delay different for each one. Also it should work for any and all elements with the class `.jumping`, not just the #demo element.

### Your tasks
__As always, the .html, .css, and .js files have been prepared for you - copy everything from materials to mysolution (`cp ./materials/* ./mysolution/`)__

1. Look at how the #demo element works, note both the HMTL and the CSS.
2. Start building the `jumping_init` function. You might need additional helper-functions.
3. Start by selecting just the first `.jumping` element
4. Split the content into a span for every single letter
5. Note that spaces don't want to be in a span - figure out what to do with them
6. Set the animation-delay for every span - make sure to increment by 0.05 everytime - and remember that animation-delays are measured in seconds, `s`.
7. When you got the first line `This text also jumps` working, make the same code work on every `.jumping` element.

### Additional tasks

* For improved coolness, let each `.jumping` start with a random animation-delay, (but still 0.05 increment for each letter) so they don't all look synchronized.
* You could also make the increment a random number - maybe even from 0.05 to 0.5. But only random for each `.jumping`, not each letter in a line.
* If you really feel like it, you could add additional animations, so the letters jitter and rotate a bit while jumping.
