## Self-invoking Function Explained
When you compile CoffeeScript into JavaScript, you'll see that all the code is encapsulated in a self-invoking function like this:  
>_(function(){  
&nbsp;&nbsp;&nbsp;&nbsp;// function body  
}).call(this)_  

However, the more well-known variant is in this format:  
>_(function(){  
&nbsp;&nbsp;&nbsp;&nbsp;// function body  
})()_  

The difference between these two is that, with the former you can constrain the execution scope of keyword "this" to the **parent scope** (or passing in whatever scope you want it to be, **in the provided example, the parent scope would be "obj"**). In this way the whole section of code is self-contained instead of latching on to global object. Whereas the latter points to window by default or 'undefined' in strict mode.

To see the code in action please visit the Plunker version: https://plnkr.co/edit/alCqh1ZCGXLYdSbPIAPo?p=info
