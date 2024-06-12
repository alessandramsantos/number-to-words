// expecting a number between 0 and 999,999

const numberToWord = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
}

function lessThan100(number) {
    const multipleOfTens = Math.floor(number / 10) * 10
    const remainders = number % 10
    return remainders ? `${numberToWord[multipleOfTens]} ${numberToWord[remainders]}` : `${numberToWord[multipleOfTens]}`
}

function convertNumberToWords(number) {
    if(number === 0) {
        return "zero";
    }

    if(number <= 20) {
        return numberToWord[number]
    }

    if(number < 100) {
        return lessThan100(number)
    }

    if(number < 1000) {
        const multipleOfHundreds = Math.floor(number / 100)
        const remainders = number % 100
        const getTheHundres = lessThan100(remainders)
        return remainders ? `${numberToWord[multipleOfHundreds]} hundred ${getTheHundres}` : `${numberToWord[multipleOfHundreds]} hundred`
    }
}

module.exports = { convertNumberToWords };