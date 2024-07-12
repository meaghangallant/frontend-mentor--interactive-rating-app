# Project Notes

## NOTE 01 _______________________________________________________________________________

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

--- KEY TAKEAWAYS -------------------------------------------------
 * using .getElementsByClassName is NOT the way to go here

-------------------------------------------------------------------

## NOTE 02 _______________________________________________________________________________


--- KEY TAKEAWAYS -------------------------------------------------
 * 

-------------------------------------------------------------------