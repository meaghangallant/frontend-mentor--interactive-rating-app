### To Do List

- [X] Center the app component in the center of the page
- [X] Figure out styling so there aren't height and width scroll bars to the main page...
- [] Create JS script to change styling for selected rating element 
- [] Create JS script that selects and deselects a rating element
- [] Create JS script that allows only *one* rating element to be selected at a time
- [] Create a JS script that changes the app state from rating to thank-you when submit button clicked
- [] Create a JS script that pushes user rating to the thank you state text

### What I Learned 

#### Lesson 1
That you can use negative values and extend past 100% when creating gradients (mind blown emoji here). I am so excited to have figured out this part and be able to replicate it from the imahe!! #veryproud

```CSS
#app-container {
  background: linear-gradient(180deg, hsla(213, 20%, 18%, 1) -50%, hsla(216, 12%, 8%, .5) 150%);
}
```

#### Lesson 2
CHECK YOUR SPELLING, CHECK YOUR SPELLING, CHECK YOUR SPELLING 
AND!!! >>> Check your letter casing!
ALSO!!!!!! >>> triple check you are using the correct name of the method/property/etc you are trying to use

shout out to me banging my head against a wall for an hour trying to figure out why my code wasn't working when I was consistently writing document.getElementsByClassName() as .getElementByClass() (happy tear emoji here)


#### Lesson 3
You should probablly save any/all code progress even -- if not ESPECIALLY -- code that isn't working (please see above lesson (happy tear emoji) )

#### Lesson 4 

- .querySelector() returns the first element from the DOM matching the query 
- .querySelectorAll() returns a static [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) of all elements matching the query 
  - query must match css selector so: ".class" and "#id" 
  - from NodeList MDN Web Docs:
    "Although NodeList is not an Array, it is possible to iterate over it with forEach(). It can also be converted to a real Array using Array.from()."
- .getElementsByClassName() returns a live [HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection) (an "array-like object") of all child elements with the specified class name


#### Lesson 5 

I HAVE SPENT HOURS AND HOURS BANGING MY HEAD TRYING TO GET THIS TO WORK AND ALL I HAD TO DO WAS MOVE THE SCRIPT TAG TO THE END OF THE DOCUMENT INSTEAD OF HAVING IT IN THE HEAD OF THE HTML DOC

FUUUUCCCKKKKK, thats annoying