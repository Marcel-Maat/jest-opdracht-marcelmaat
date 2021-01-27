
//2. importen


const multiplyDivide = require("./index").multiplyDivide;
// const { add, multiplyDivide } = require ("./index");

test('multiplyDevide() function should return multiply of 2 numbers divided by 1 number', () => {
    //ARRANGE
    const num1 = 10
    const num2 = 10
    const num3 = 100

    //ACT
    const result = multiplyDivide(num1, num2, num3)

    //ASSERT
    expect(result).toBe(1);
});