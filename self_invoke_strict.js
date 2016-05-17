'use strict'

var obj = {
    exeScope: 'Execution scope: obj<br>'
    , fn: function () {
        // set this to the caller context's 'this' which is obj
        (function () {
            document.write(this.exeScope);
        }).call(this);

        // set this to 'window' or 'undefined' depend on the mode
        // in normal mode it's window, in strict mode it's 'undefined'
        (function () {
            // this line of code will cause an error in strict mode as follows
            // Uncaught TypeError: Cannot read property 'exeScope' of undefined
            // console must be open in order to see this error message
            document.write(this.exeScope);
        })();

        // this inside the function refers to obj itself
        document.write(this.exeScope);
    }
}

window.exeScope = 'Execution scope: obj<br>';

obj.fn();

/* Following is the result you'll see on the webpage

Execution scope: obj

*/