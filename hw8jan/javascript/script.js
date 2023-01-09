//First level: функция isAbsoluteBalance принимает на вход строку
//и возвращает true, если в строке поровну символов a и не-а
//И символы "а" идут через один
//пример: isAbsoluteBalance("мама") -> true
//isAbsoluteBalance("папа") -> true
//isAbsoluteBalance("аааббб") -> false

function isAbsoluteBalance(str) {
    let aCount = 0;
    let oCount = 0;
    for (let i = 0; i < str.length; i+=2) {
        if (str[i] === "a") {
            aCount++;
        }
        if (str[i] === "o") {
            oCount++;
        }
    }
    return aCount === oCount;
}

console.log(isAbsoluteBalance("mama")); 
console.log(isAbsoluteBalance("papa")); 
console.log(isAbsoluteBalance("aaabbb"));  



//функция getDiagonal принимает стороны параллелипипеда a, b, c
//и возвращает диагональ этого параллелипипеда

function power(a, b, c) {                  
    const d2 = a * a + b * b + c * c;
    return Math.pow(d2, 1/2);
   
}

console.log(power(2, 3, 6)); 
console.log(power(2, 6, 8)); 



//функция maskWords принимает строку str и число num
//и заменяет num слов на соответствующее количество *
//начиная с конца. Пример console.log(maskWords("Мама мыла раму", 2))
//выведет Мама **** ****

function maskWords(str) {
    let result = "";
    let foundSpaces = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === " ") {
        foundSpaces++;
      }
       let letter;
       if (str[i] === " ") {
        letter = " ";
       } else if (foundSpaces) {
        letter = "*";
       } else {
        letter = str[i];
       }
       result = result + letter;
}
return result;
}
console.log(maskWords("Мама мыла раму", 2)); 



//функция countCats принимает на вход массив строк и возвращает
//количество строк, у которых есть подстрока "cat"
//пример countCats(["cat", "mama-cat", "papa-cat", "dog"]) -> 3

function countCats (arr) {   // rezolvat
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "cat") {
            count++
        }
    }
        return count;
}
console.log(countCats (["cat", "mama-cat", "papa-cat", "dog"])); 




