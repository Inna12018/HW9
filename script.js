// Задание
//  Реализовать функцию, которая будет получать массив элементов и выводить их на страницу в виде списка. Задача должна быть реализована на языке javascript, без использования фреймворков и сторонних библиотек (типа Jquery).

// Технические требования:

// Создать функцию, которая будет принимать на вход массив и опциональный второй аргумент parent - DOM-элемент, к которому будет прикреплен список (по дефолту должен быть document.body).
// Каждый из элементов массива вывести на страницу в виде пункта списка;

// Примеры массивов, которые можно выводить на экран:
// ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];

// ["1", "2", "3", "sea", "user", 23];

// Можно взять любой другой массив.

// Необязательные задания продвинутой сложности:

// Добавьте обработку вложенных массивов. Если внутри массива одним из элементов будет еще один массив, выводить его как вложенный список.
// Пример такого массива:
// ["Kharkiv", "Kiev", ["Borispol", "Irpin"], "Odessa", "Lviv", "Dnieper"];

// Подсказка: используйте map для обхода массива и рекурсию, чтоб обработать вложенные массивы.
// Очистить страницу через 3 секунды. Показывать таймер обратного отсчета (только секунды) перед очищением страницы.


// task1

let ulElement = document.createElement('ul');
document.body.append(ulElement);

const arr = ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];

arr.forEach(element => {
    let  liElem = document.createElement('li'); 
    liElem.innerHTML +=`<li>${element + 1}</li>`;
    ulElement.append(liElem); 
});







