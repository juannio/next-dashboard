function sumar(num1, num2){
    return num1 + num2
}




test('adds 1 + 2 to equal 3', () => {

const expectedResult = 3;

expect(sumar(1,2)).toBe(expectedResult)

});
