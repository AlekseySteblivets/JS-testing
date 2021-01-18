// 18)// Станция по продаже ремонтных дроидов готова к запуску, осталось написать программное обеспечение для отдела продаж.

// Функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits) выполняет транзакцию по продаже дроидов и возвращает сообщение о результате операции. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// pricePerDroid - цена одного дроида;
// orderedQuantity - кол-во заказанных дроидов;
// customerCredits - сумма средств на счету клиента.
// Дополни её следующим функционалом:

// Объяви переменную totalPrice для хранения общей суммы заказа и присвой ей выражение расчёта этой суммы.
// Добавь проверку сможет ли клиент оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету клиента, запиши в переменную message строку 'Недостаточно средств на счету!';
// в противном случае, вычти сумму покупки со счёта клиента и запиши в переменную message сообщение: 'Вы купили <число> дроидов, на счету осталось <число> кредитов'.

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     // Пиши код ниже этой строки
//     let totalPrice = pricePerDroid * orderedQuantity;
    
//     if (totalPrice > customerCredits) 
//     {message = "Недостаточно средств на счету!";}
    
//     else {customerCredits -= totalPrice;
//     message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${customerCredits} кредитов`
//          }
    
//     // Пиши код выше этой строки
//     console.log(message);
//     return message;
//   }
//   makeTransaction(3000, 5, 23000);
//   makeTransaction(1000, 3, 15000);
//   makeTransaction(5000, 10, 8000);
//   makeTransaction(2000, 8, 10000);
//   makeTransaction(500, 10, 500);

// 2-6 Стартовый код
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// // Пиши код ниже этой строки
// fruits[1] = 'персик';
// fruits[3] = 'банан';
// console.log(fruits);

//2-7 Стартовый код
// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// // Пиши код ниже этой строки
// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);

// 2-8 Стартовый код
// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// // Пиши код ниже этой строки

// const lastElementIndex =  fruits.length - 1;
// const lastElement = fruits[lastElementIndex];


// console.log(lastElementIndex);
// console.log(lastElement);


//??? 2-9 Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины. Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.
// function getExtremeElements(array) {

//     return [array[0], array[array.length-1]];

//   }


//   getExtremeElements([1, 2, 3, 4, 5]);
//   getExtremeElements(['Земля', 'Марс', 'Венера']);
//   getExtremeElements(['яблоко', 'персик', 'груша', 'банан']);



// 2-10Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала в переменной words результат разделения строки message по разделителю delimeter - массив строк.

// function splitMessage(message, delimeter) {
//     let words;
//     // Пиши код ниже этой строки
//     words = message.split(delimeter);
    
//     console.log(words);
//     // Пиши код выше этой строки
//     return words;
//   }

//   splitMessage('Манго спешит на поезд', ' ');
//   splitMessage('Манго', '');
//   splitMessage('лучшее_за_неделю', '_');


// 2-11 Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.

// Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).

// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.
// function calculateEngravingPrice(message, pricePerWord) {
//     // Пиши код ниже этой строки
//     let madeMessageArroy = message.split(" ");
//     let lengthMessage =  madeMessageArroy.length;
//     let total = lengthMessage * pricePerWord;
//     console.log(total);
//     return total;
  
//     // Пиши код выше этой строки
//   }

//   calculateEngravingPrice('JavaScript у меня в крови', 10);
//   calculateEngravingPrice('JavaScript у меня в крови', 20);
//   calculateEngravingPrice('Веб-разработка это творческая работа', 40);
//   calculateEngravingPrice('Веб-разработка это творческая работа', 20);


// 2-12 Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimeter - строку.
// function makeStringFromArray(array, delimeter) {
//     let string;
//     // Пиши код ниже этой строки
//    string = array.join(delimeter);
   
//    console.log(string);
//     // Пиши код выше этой строки
//     return string;
//   }
  
//   makeStringFromArray(['Манго', 'спешит', 'на', 'поезд'], ' ');
//   makeStringFromArray(['М', 'а', 'н', 'г', 'о'], '');
//   makeStringFromArray(['лучшее', 'за', 'неделю'], '_');


// 2-13 Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.
// Значением параметра title будут строки, слова которых разделены только пробелами.
// Все символы slug должны быть в нижнем регистре.
// Все слова slug должна быть разделены тире.
// function slugify(title) {
//     // Пиши код ниже этой строки
// //    const normalizeTitle = title.toLowerCase();
// //    const makeArray = normalizeTitle.split(" ");
// //    const makeStringWithDash = makeArray.join("-");

// //    return makeStringWithDash;
//    return title = title.toLowerCase().split(" ").join("-");
   
//     // Пиши код выше этой строки
//   }
//   console.log(slugify('Массивы для новичков'));
//   console.log(slugify('Английский для разработчика'));
//   console.log(slugify('Десять секретов JavaScript'));
//   console.log(slugify('Как стать JUNIOR разработчиком за ДВЕ НЕДЕЛИ'));

// 2-15 Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.
// const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
// const newClients = ['Персик', 'Хьюстон'];

// const allClients = oldClients.concat(newClients); // Дополни эту строку
// console.log(allClients);



// 2-16Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.

// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов.
// В противном случае функция должна вернуть новый массив целиком.
// function makeArray(firstArray, secondArray, maxLength) {
//     // Пиши код ниже этой строки

//     const newArray = firstArray.concat(secondArray);
//     const lengthNewArray = newArray.length;
//     if (lengthNewArray > maxLength) {return newArray.slice(0,maxLength)};
//     return newArray.slice();
    
//     // Пиши код выше этой строки
//   }
//   console.log(makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3));
//   console.log(makeArray(['Манго', 'Поли', 'Хьюстон'], ['Аякс', 'Челси'], 4));
//   console.log(makeArray(['Манго'], ['Аякс', 'Челси', 'Поли', 'Хьюстон'], 3));
//   console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 2));
//   console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 4));
//   console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран', 'Венера'], 0));

// 2-17 Функция logNumbersInRange(start, end) логирует все целые числа в диапазоне от start до end включительно. Дополни тело функции так, чтобы она работала правильно.
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Дополни эту строку
//   console.log(i);
// }


// 2-18 Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа. Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.
// function calculateTotal(number) {
//     // Пиши код ниже этой строки
//   let totalAmount = 0;
//     for (let i = totalAmount; i <= number; i += 1) {
//     totalAmount += i;
//     }
//     return totalAmount;
      
//     // Пиши код выше этой строки
//   }
    
//     // Пиши код выше этой строки
  

// console.log(calculateTotal(1));
//   console.log(calculateTotal(3));
//   console.log(calculateTotal(7));
//   console.log(calculateTotal(18));
//   console.log(calculateTotal(24));
//   console.log(calculateTotal());  


// 2-19 Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

// for (let i = 0; i < fruits.length; i += 1) { // Дополни эту строку
//   const fruit = fruits[i]; // Дополни эту строку
//   console.log(fruit);
// }


// 2-20Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки
//   for (let i = 0; i < order.length; i += 1) {
   
//     total += order[i];}
//   // Пиши код выше этой строки
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice());


// ???2-21Напиши фукцнию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.
// function findLongestWord(string) {
//   // Пиши код ниже этой строки
// const newArroy = string.split(" ");
// let maxWord = '';
// for (let i = 0; i < newArroy.length; i += 1) {
//   if(newArroy[i].length > maxWord.length) {
//     maxWord = newArroy[i];
//   }
// }
//   return maxWord;
//   // Пиши код выше этой строки
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// console.log(findLongestWord('Google do a roll'));
// console.log(findLongestWord('May the force be with you'));


// 2-22Дополни код функции createArrayOfNumbers(min, nax) так, чтобы она возвращала массив всех целых чисел от значения min до max.
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Пиши код ниже этой строки
//   for (let i = min; i <= max; i += 1)
//   {numbers.push(i);}
//   // Пиши код выше этой строки
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));



// 2-23 Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).
// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
// const newArray = [];
// for (let i = 0; i < numbers.length; i += 1) {
//   if(numbers[i] > value) {
//     newArray.push(numbers[i]);
//   }
// }
// return newArray;
//   // Пиши код выше этой строки
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));



// 2-24 Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.

// Дополни код функции так, что если:

// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.
// function checkFruit(fruit) {
//   const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

//   return fruits.includes(fruit); // Дополни эту строку
  
// }
// console.log(checkFruit('слива'));
// console.log(checkFruit('мандарин'));
// console.log(checkFruit('груша'));
// console.log(checkFruit('Груша'));
// console.log(checkFruit('яблоко'));


// 2-25Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.
// function getCommonElements(array1, array2) {
//   // Пиши код ниже этой строки
// let newArray = [];
// for (let i = 0; i < array1.length; i += 1) {
//   if (array2.includes(array1[i])) {
//       newArray.push(array1[i])}
     
//   }
//   return newArray;
//   // Пиши код выше этой строки
// }
// console.log(getCommonElements([1, 2, 3], [2, 4])) ;
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])) ;
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));



// 2-26Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки
//   for (const itemOrder of order) {
//     total += itemOrder;}
//   // for (let i = 0; i < order.length; i += 1) {
//   //   total += order[i];
//   // }
//   // Пиши код выше этой строки
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([]));


// 2-27Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.
// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   const filteredNumbers = [];
// for (const number of numbers) {
// if (number > value) {
//   filteredNumbers.push(number);
// }
// }


//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   const number = numbers[i];

//   //   if (number > value) {
//   //     filteredNumbers.push(number);
//   //   }
//   // }

//   return filteredNumbers;
//   // Пиши код выше этой строки
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(ilterArray([12, 24, 8, 41, 76], 20));


// 2-28Вместо того, чтобы возвращать результат деления, операция по модулю (%) возвращает целочисленный остаток от деления двух чисел - делимого и делителя.
// Объявлена переменная a.
// Значение переменной a это число 0.
// Объявлена переменная b.
// Значение переменной b это число 1.
// Объявлена переменная c.
// Значение переменной c это число 3.
// Объявлена переменная d.
// Значение переменной d это число 5.
// Объявлена переменная e.
// Значение переменной e это число 2.
// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 3;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);



// 2-29Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка.
// function getEvenNumbers(start, end) {
//   // Пиши код ниже этой строки
// const newArray = [];

// for (let i = start; i <= end; i += 1) {
// if (i % 2 === 0) {newArray.push(i);}
// }
// return newArray;
  
//   // Пиши код выше этой строки
// }
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(etEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));


// 2-30Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);

https://github.com/goitacademy/javascript-homework/tree/master/homework-02


// 2-32 Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.
// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).
// function includes(array, value) {
//     // Пиши код ниже этой строки
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value) {return true;}
    
//   }
//   return false
  
    
//     // Пиши код выше этой строки
//   }
//   console.log(includes([1, 2, 3, 4, 5], 3));
//   console.log(includes([1, 2, 3, 4, 5], 17));
//   console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Юпитер'));
//   console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Уран'));
