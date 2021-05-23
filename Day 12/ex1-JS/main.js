
var colors = require('colors');

console.log("Hello World!!!".green);


function Calculator(a, b) {
    this.a = a;
    this.b = b;
};

Calculator.prototype.add = function () {
    return this.a + this.b;
};

Calculator.prototype.subtract = function () {
    return this.a - this.b;
}
;
Calculator.prototype.multiply = function () {
    return this.a * this.b;
};


Calculator.prototype.log = function() {
    
    var add_str = "(add)      -> " + this.a + " + " + this.b + " = " + this.add();

    var multiply_str ="(multiply) -> " + this.a + " * " + this.b + "= " + this.multiply();
    
    var subtract_str = "(subtract) -> " + this.a + " - " + this.b + " = " + this.subtract();

    console.log(add_str.red);
    console.log(subtract_str.blue);
    console.log(multiply_str.cyan);
}


var cal1 = new Calculator(5, 10);
var cal2 = new Calculator(3, 7);
var cal3 = new Calculator(6, 8);

cal1.log();
/*

cal2.log();
cal3.log();


console.log("check the setTimeout function:")

setTimeout(     cal3.log.bind(cal3) , 1000);


*/