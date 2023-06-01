const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})


test("One dollar should be 127.70 yen", function(){
     expect(fromDollarToYen(3.5)).toBe(446.95); 
})


test("1 yen should be 0.0078 pound", function(){
    //3.5/0.0078
     expect(fromYenToPound(3.5)).toBe(0.027); 
})