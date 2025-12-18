import Sum from "../Sum"

test('Must give Sum of two numbers', () => { 
    const result = Sum(1,2)

    //Assertion
    expect(result).toBe(3)
 })