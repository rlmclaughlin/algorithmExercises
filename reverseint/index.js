// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


//-------------------Accounts for negative numbers-----------//

function reverseInt(n) {
    let reversal = n.toString().split('').reverse().join('')

    if(n < 0){
        return parseInt(reversal) * -1
    }
    return parseInt(reversal)
}
   
//---------------------------------Clean Version with Math.sign()----------------------------------//

//function reverseInt(n) {
//    let reversal = n.toString().split('').reverse().join('')
//        return parseInt(reversal) * Math.sign(n)   // math.sign() returns 1 or -1 depending on if n is a positive or negative number
//}

module.exports = reverseInt;
