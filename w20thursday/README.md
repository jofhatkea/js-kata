# JS-KATA
## Week 20, Thursday
### CSS Variables and JavaScript
You have chosen a monochromatic color theme for your webpage - so that the background is dark and the text if bright, but with the same hue.

However - you would like to change the colors dynamically, make them all a green or orange tint, without having to write new CSS for every single hue that exists. So you've figured out that you can use a CSS variable for the hue, and then use HSL() colors for the colors - take a look at the `style.css`, especially the color-classes.

Now you just need to modify the hue (the --basecolor) with JavaScript.

### Your tasks
__The .html and .js files have been prepared for you - copy everything from materials to mysolution (`cp ./materials/* ./mysolution/`)__

1. Create a list of base-hues/colors, and display them in the `#colorselector`
2. Make the colornames clickable 
3. Store the basecolor-value in the clickable element somehow - maybe with a `data-` attribute. See https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
4. Read the basecolor-value from the clicked element
5. Write the basecolor-value to the CSS. See https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables - remember that the CSS-variables are defined in the `documentElement``
6. Enjoy the magic!

Maybe you want to try changing the CSS variables with JavaScript from the console, before anything else.

### Additional tasks

You also want a list of CSS-variables that defines each color, just like in the `.color` classes.

Create CSS-variables for:
* color-bright
* color-brighter
* color-mid
* color-darker
* color-dark

When done, the Colors with Names section should look just like the top section
