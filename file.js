/* 
Javascript exercises following this list:
https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php#EDITOR 
*/


/* 1. Write a JavaScript function that reverse a number. */

var number = 32243

function reverseNumber(number){
  var numberAsString = number.toString()
  var reversedNumber = []

  for ( i = numberAsString.length - 1 ; i >= 0 ; i-- ) {
    reversedNumber.push(numberAsString[i])
  }

  var reversedNumberAsString = reversedNumber.join('')

  return  reversedNumberAsString
}


/* 2. Write a JavaScript function that checks whether a passed string is palindrome or not? */

var word = 'madam'

checkIfPalindrome = word => {

  var wordBackwards = word.split('').reverse().join('')

  if ( word === wordBackwards ) {
    console.log(`${word} and ${wordBackwards} ARE equals so ${word} IS a palindrome.`)
  } else {
    console.log(`${word} and ${wordBackwards} are NOT equals so ${word} is NOT a palindrome.`)
  }

}


/* 3. Write a JavaScript function that generates all combinations of a string. */

var string = 'hola'

stringCombinations = string => {

  var stringToCombine = string.split('');
  var arr = [ stringToCombine[0] ];

  for ( i = 1 ; i < stringToCombine.length ; i++ ) {

    var shorterString = stringToCombine.slice(i)
    for ( j = 0 ; j < shorterString.length ; j++ ) {
      arr.push(arr[arr.length - 1] + shorterString[j])
    }

    arr.push(shorterString[0])

  }

  console.log(arr)

}


/* 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. */

var scrambled = 'cxaybz'

orderAlphabetically = scrambled => {
  return scrambled.split('').sort().join()
}


/* 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. */

var phrase = 'the quick brown fox'
var arrWithPhraseCapitalized = []

capitalizePhrase = phrase => {
  var phraseSeparated = phrase.split(' ')
  console.log(phraseSeparated)

  for ( i = 0 ; i < phraseSeparated.length ; i++ ) {
    
    arrWithPhraseCapitalized.push( phraseSeparated[i].charAt(0).toUpperCase() + phraseSeparated[i].slice(1) )
    console.log(arrWithPhraseCapitalized)
  }

  return arrWithPhraseCapitalized.join(' ')

}


/* 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. */

var strwithLongestWord = 'Web Development Tutorial'
var arrOfLengths = []

findLongestWord = strwithLongestWord => {
  var arrOfWords = strwithLongestWord.split(' ')
  console.log(arrOfWords)
  for ( i = 0 ; i < arrOfWords.length ; i++ ) {
    arrOfLengths.push(arrOfWords[i].length)
  }
  console.log(arrOfLengths)
  arrOfLengths.sort()
  for ( i = 0, j = 0 ; i < arrOfLengths.length ; i++, j++ ) {
    if ( arrOfWords[j].length == arrOfLengths[0] ){
      return arrOfWords[j]
    }
  }
}


/* 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. */

var strWithVowels = 'the quick brown fox'

countVowels = strWithVowels => {
  var arrWithStringSplit = strWithVowels.split('')
  console.log(arrWithStringSplit)
  var arrOfVowels = []
  for ( i = 0 ; i < arrWithStringSplit.length ; i++) {
    if ( arrWithStringSplit[i] == 'a' || arrWithStringSplit[i] == 'e' || arrWithStringSplit[i] == 'i' || arrWithStringSplit[i] == 'o' || arrWithStringSplit[i] == 'u' ) {
      arrOfVowels.push(arrWithStringSplit[i])
    }
  }
  console.log(arrOfVowels)
  return arrOfVowels.length
}


/* 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. */

var number = 9

checkIfPrime = number => {
  if ( number === 0 || number === 1 ) {
    return false
  } else if ( number === 2 ) {
    return true
  } else if ( number > 2 ) {
    for ( i = 2 ; i <= number ; i++ ) {
      if ( number % i === 0 ) {
        return false
      } else {
        return true
      }
    }
  } else {
    return false
  }
}


/* 9. Write a JavaScript function which accepts an argument and returns the type. */

var arg = ''

returnsType = arg => {
  return typeof arg
}


/* 10. Write a JavaScript function which returns the n rows by n columns identity matrix. */

var num = 3
var emptyArrRow = []
var matrix = []

getMatrix = num => {
  for ( i = 0 ; i < num ; i++ ) {
    emptyArrRow.push(0)
  }
  for ( i = 0; i < num ; i++ ) {
    matrix.push(emptyArrRow)
  }
  for ( i = 0 ; i < 1 ; i++ ) {
    for ( j = 0 ; j < matrix[i].length ; j++) {
      matrix[i + 1][j] += 1 
    }
  }
  
  console.log(matrix)
}

getMatrix(num)