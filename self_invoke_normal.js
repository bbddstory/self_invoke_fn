document.write('NORMAL<br>');
document.write('======<br>');
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
            document.write(this.exeScope);
        })();

        // this inside the function refers to obj itself
        document.write(this.exeScope);
    }
};

window.exeScope = 'Execution scope: window<br>';

obj.fn();

// you can pass in an object as the execution scope
var scope = {
    foo: 'bar'
};

(function () {
    document.write(this.foo);
}).call(scope);

document.write('<br><br>');