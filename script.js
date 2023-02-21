// + 1)  Превратите массив чисел в длинную строку, состоящую из всех этих чисел.
// Пример: [1,2,3] => "1,2,3"

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.join());


// 2)Используя метод reduce, посчитайте сколько людей проголосовали.

// const voters = [
//     {name: 'Bob', age: 30, voted: true},
//     {name: 'Jake', age: 32, voted: true},
//     {name: 'Kate', age: 25, voted: false},
//     {name: 'Sam', age: 20, voted: false},
//     {name: 'Phil', age: 21, voted: true},
//     {name: 'Ed', age: 55, voted:true},
//     {name: 'Tami', age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];

// let trueVoters = voters.reduce((acc, cur) => {
//     if(cur.voted){  // проверка на true/false
//         acc++;      // счётчик, при каждом true +1
//     }
//     return acc;     // возвращаем acc
// }, 0);              // для старта с 0 
// console.log(trueVoters);


// + 3)Получив массив всех товаров из вашего списка желаний, прикиньте, сколько будет стоить  купить все сразу.

// const wishlist = [
//     { title: "Tesla Model S",           price: 90000 },
//     { title: "4 carat diamond ring",    price: 45000 },
//     { title: "Fancy hacky Sack",        price: 5 },
//     { title: "Gold fidgit spinner",     price: 2000 },
//     { title: "A second Tesla Model S",  price: 90000 },
// ];
// let totalPrice = 0;
// for(let i = 0; i < wishlist.length; i++){
//     totalPrice += wishlist[i].price; 
// }
// console.log(totalPrice);

// через reduce получаю NaN, что я упускаю?
// let totalPrice = wishlist.reduce((acc, cur) => acc.price + cur.price, 0);
// console.log(totalPrice);



// 4) У вас есть массив объектов, представляющих список клиентов с их заказами. Каждый объект имеет свойства name и orders, где orders - это массив строк, представляющих товары, которые заказал клиент. Ваша задача - создать новый массив объектов, где каждый объект имеет свойства name и totalOrders, где totalOrders - общее количество товаров, заказанных клиентом.


const clients = [
    {name: 'Mark', orders: ['Book', ' TV', 'PC','Kabel'] },
    {name: 'Mia', orders: ['Iphone', 'Watch', 'Headphones'] },
    {name: 'Bobby', orders: ['Sweater', 'Jeans', 'Hat', 'Socks', 'Jacket'] },
];

clients.forEach(products => {
    products.totalOrders = products.orders.length;
    delete products.orders;
});
console.log(clients);


// + 5)Создайте массив объектов со свойствами 'name' и 'age'. Вычислите количество совершенолетних и несовершеннолетних людей.

// const people = [
//     {name: 'Bob', age: 30},
//     {name: 'Jake', age: 32},
//     {name: 'Kate', age: 11},
//     {name: 'Sam', age: 15},
//     {name: 'Phil', age: 21},
//     {name: 'Ed', age: 55},
//     {name: 'Tami', age: 54},
//     {name: 'Mary', age: 16},
//     {name: 'Becky', age: 17},
//     {name: 'Joey', age: 41},
//     {name: 'Jeff', age: 30},
//     {name: 'Zack', age: 18}
// ];

// let olders = people.filter((years) => years.age >= 18)
// console.log(olders);

// let under = people.filter((years) => years.age < 18);
// console.log(under);


// + 6)Создайте массив объектов со свойствами 'name' и 'age'. Используя методы массива, создайте новый массив, содержащий только те объекты, возраст которых больше 30 лет.

// const people = [
//     {name: 'Bob', age: 30},
//     {name: 'Jake', age: 32},
//     {name: 'Kate', age: 25},
//     {name: 'Sam', age: 20},
//     {name: 'Phil', age: 21},
//     {name: 'Ed', age: 55},
//     {name: 'Tami', age: 54},
//     {name: 'Mary', age: 31},
//     {name: 'Becky', age: 43},
//     {name: 'Joey', age: 41},
//     {name: 'Jeff', age: 30},
//     {name: 'Zack', age: 19}
// ];

// let olders = people.filter((years) => years.age > 30)
// console.log(olders);

