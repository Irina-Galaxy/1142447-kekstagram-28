const lengthString = (str, maxLength) => {
  if(str.length <= maxLength){
    return true;
  } else{
    return false;
  }
};
/*
lengthString('наша строка',7);
// Cтрока короче 20 символов
console.log(lengthString('проверяемая строка', 20)); // true
// Длина строки ровно 18 символов
console.log(lengthString('проверяемая строка', 18)); // true
// Строка длиннее 10 символов
console.log(lengthString('проверяемая строка', 10)); // false
*/

const checkPalindrome = (str) => {
  const newStr = str.toLowerCase();
  console.log(newStr);
  console.log(newStr.split('').reverse().join('').toLowerCase());
  return newStr === newStr.split('').reverse().join('');

}

// Строка является палиндромом
console.log(checkPalindrome('топот')); // true
// Несмотря на разный регистр, тоже палиндром
console.log(checkPalindrome('ДовОд')); // true
// Это не палиндром
console.log(checkPalindrome('Кекс')); // false

const findeNumbers = (str) => {
  if (str.match(/[0-9]+/gi)) {
    return Math.abs(str.match(/[0-9]+/gi).join(''));
  } else{
    return NaN;
  }
}
/*
console.log(findeNumbers('2023 год')); // 2023
console.log(findeNumbers('ECMAScript 2022')); // 2022
console.log(findeNumbers('1 кефир, 0.5 батона')); // 105
console.log(findeNumbers('агент 007')); // 7
console.log(findeNumbers('а я томат')); // NaN
*/

const getFileName = (strOriginal, minLength, additionalSymbol) => {
  if (strOriginal.length >= minLength) {
    return strOriginal;
  } else {
    const symbolsAmount = minLength - strOriginal.length;
    let resultString = strOriginal;

    for (let i = 0; i < symbolsAmount; i = i + 1) {
      if (resultString.length + additionalSymbol.length > minLength) {
        resultString = additionalSymbol.slice(0, minLength - resultString.length) + resultString;
      } else {
        resultString = additionalSymbol + resultString;
      }
    }

    return resultString;
  }
}

// Добавочный символ использован один раз
console.log(getFileName('1', 2, '0')); // '01'

// Добавочный символ использован три раза
console.log(getFileName('1', 4, '0')); // '0001'

// Добавочные символы обрезаны с конца
console.log(getFileName('q', 4, 'werty'));  // 'werq'

// Добавочные символы использованы полтора раза
console.log(getFileName('q', 4, 'we'));     // 'wweq'

// Добавочные символы не использованы, исходная строка не изменена
console.log(getFileName('qwerty', 4, '0')); // 'qwerty'







