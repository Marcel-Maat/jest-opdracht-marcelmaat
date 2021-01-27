function multiplyDivide(num1, num2, num3) {
    console.log("INPUT", num1, num2, num3);
    const result = num1 * num2 / num3;
    console.log("RESULT", result);
    return result
};
multiplyDivide(10, 10, 100);

module.exports = {
    multiplyDivide: multiplyDivide,
}