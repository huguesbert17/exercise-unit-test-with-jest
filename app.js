
// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (valueIDollar) => {
    return valueIDollar * 127.7
}

const fromEuroToDollar = (valueInEuro) => {
    return valueInEuro * 1.2;
}

const fromYenToPound = (valueInYen) => {
    return parseFloat((valueInYen/128.1).toFixed(3))
}


// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };