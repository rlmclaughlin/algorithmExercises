// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    str = str.split('').reverse().join('')
    return str
}


//-----------------------version 2----------------------------------------------//
//function reverse(str) {
//    let arr = []
//    str = str.split('')
//    for(let i = str.length; i > 0; i--){
//        arr.push(str[i])
//    }
//    return arr.join('')
//}

//-------------------------version 3-------------------------------------------//
//function reverse(str){
//    let my = ''
//    for(let i of str){
//        my = i + my
//    }
//    return my
//}

//------------------------------version 4 (REDUCER)----------------------------//
//function reverse(str){
//    return str.reduce((reverse, char) => 
//        char + reverse
//    , '')                                             // <-----'' === reverse. '' is starting point. 
//}

module.exports = reverse;
