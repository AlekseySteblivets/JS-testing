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
