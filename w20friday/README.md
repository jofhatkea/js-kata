# JS-KATA
## Week 20, Friday
### List of links
You have to create a nice looking HTML page with a list of links.
The links are given in the array `list_data` that could potentially come from a JSON source - but for now they are just included directly.

The `link` is the url to go to, the `description` is the text to display inside the link - see the HTML for an example.

#### Your tasks
__The .html and .js files have been prepared for you - copy everything from materials to mysolution (`cp ./materials/* ./mysolution/`)__

First: you **must** create a function called `createLi` that creates an `<li>`-element and returns it.

Then: write the `buildList` function so it loops through `list_data` and calls `createLi` for each item, and appends the returned `<li>` to `#thelist` 

Let `createLi` create the link, with the href and the content from `list_data` items.

#### Additional fun
When the user hovers over a link, it should display the domain in a small pop-up. Use the `title` attribute, as in the example.

Hint: Find the domain by looking between :// and / in the link.
