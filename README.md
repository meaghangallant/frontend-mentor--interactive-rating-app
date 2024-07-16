# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

## My process

### Built with

- HTML
- CSS
- Javascript

### What I Learned 

#### Lesson 1

That you can use negative values and extend past 100% when creating gradients (mind blown emoji here). I am so excited to have figured out this part and be able to replicate it from the image!! #veryproud

```CSS
#app-container {
  background: linear-gradient(180deg, hsla(213, 20%, 18%, 1) -50%, hsla(216, 12%, 8%, .5) 150%);
}
```

#### Lesson 2

CHECK YOUR SPELLING, CHECK YOUR SPELLING, CHECK YOUR SPELLING 

ALSO!!!!!! >>> triple check you are using the correct name of the method/property/etc you are trying to use

Shout out to me banging my head against a wall for an hour trying to figure out why my code wasn't working when I was consistently writing .getElementByClass() instead of .getElementsByClassName() (happy tear emoji here)


#### Lesson 3

You should probablly save any/all code progress even if code that isn't working  

#### Lesson 4 

- .querySelector() returns the first element from the DOM matching the query 
- .querySelectorAll() returns a static [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) of all elements matching the query 
  - query must match css selector so: ".class" and "#id" 
  - from NodeList MDN Web Docs:
    "Although NodeList is not an Array, it is possible to iterate over it with forEach(). It can also be converted to a real Array using Array.from()."
- .getElementsByClassName() returns a live [HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection) (an "array-like object") of all child elements with the specified class name


#### Lesson 5 

If the JS script is in the head HTML it will load first and therefore run before any of the page elements are created 
Putting the script at the end of the document means all the page elements are created and **then** the script runs and can act on those elements

#### Lesson 6

This line creates an **OBJECT** containing all rating elements : 
``` javascript
let ratingElements = document.getElementsByClassName("rating");
```

And thus, it will output an error if you try to use it with .forEach like so:
``` javascript 
ratingElements.forEach(rating => { })
```

>>> This is because .forEach can only take an **ARRAY** 

Also, this line returns as **UNDEFINED**:
```javascript 
let rate1 = document.getElementsByClassName('rating')[0];
```