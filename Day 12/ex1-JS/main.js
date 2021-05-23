
var colors = require('colors');
console.log("\nHello World!!!\n".green);


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

    console.log(this)
    console.log(add_str.red);
    console.log(subtract_str.blue);
    console.log(multiply_str.cyan);
    console.log()
}

var cal1 = new Calculator(5, 10);
var cal2 = new Calculator(3, 7);
var cal3 = new Calculator(6, 8);


console.log('cal1');
cal1.log();

console.log('cal2');
cal2.log();

console.log("check the setTimeout function:")
setTimeout(     cal3.log.bind(cal3) , 1000);


