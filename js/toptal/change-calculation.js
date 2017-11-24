/*

    A vending machine has the following denominations: 1c, 5c, 10c, 25c, 50c, and $1.
    Your task is to write a program that will be used in a vending machine to return change.
    Assume that the vending machine will always want to return the least number of coins or notes.
    Devise a function getChange(M, P) where M is how much money was inserted into the machine
    and P the price of the item selected, that returns an array of integers representing the number of
    each denomination to return.

    Example:
    getChange(5, 0.99) should return [1,0,0,0,0,4]

*/
var ChangeCalculation = /** @class */ (function () {
    function ChangeCalculation() {
    }
    ChangeCalculation.getChange = function (M, P) {
        var arrDenominations = [1, 5, 10, 25, 50, 100];
        var arrChangeBack = [0, 0, 0, 0, 0, 0];
        var change = (M - P) * 100;
        for (var i = arrDenominations.length - 1; i >= 0; i--) {
            var element = arrDenominations[i];
            if (change >= element) {
                arrChangeBack[i] = Math.floor(change / element);
                change = (change % element);
            }
        }
        return arrChangeBack;
    };
    return ChangeCalculation;
}());
var ChangeCalculationTest = /** @class */ (function () {
    function ChangeCalculationTest() {
        console.log('CHANGE CALCULATION');
        this.exec(5, 0.99);
        this.exec(3, 1);
        this.exec(10, 2.5);
    }
    ChangeCalculationTest.prototype.exec = function (M, P) {
        var result = ChangeCalculation.getChange(M, P);
        console.log('');
        console.log(M + ', ' + P);
        console.log('');
        console.log('=>', result);
        console.log('');
        console.log('--------------------------------------');
        console.log('');
    };
    return ChangeCalculationTest;
}());
new ChangeCalculationTest();
//# sourceMappingURL=change-calculation.js.map