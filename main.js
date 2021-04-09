// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
// Оперативна память.
// Потужність процесора. (цифра від 0 до 1000)
// Назва.
// В кожного компютера має бути метод включання.
// ===
// Від базового компютрера треба реалізувати ноутбук.
// Він має нову властивість дюймаж монітора.
// У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
// ===
// Від ноутбука потрібно зробити ультрабук.
// Він має нову змінну ваги.
// При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
// ===
// Від базвого класу потрібно створити базовий ПК.
// В нього має бути новий метод запуску ігор.
// Кількість FPS визначається як потужність / опервтивку.
// Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
//
// Компютер можна апгрейдити.
// Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
// Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
// Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
// ===
// Від базового ПК необхідно зробити ігнорий ПК.
// Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
// При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно ивдати помилку,
// що на цьому відрі ігри не запускаються.

// class Pc{
//     constructor( ram, power , name){
//         this.name = name ;
//         this.power = power;
//         this.ram = ram;
//     }
//     powerOn() {
//         console.log(` ${this.name} is power ON`)
//     }
//     incresPower(value = 0){
//         const newPower = value;
//         const max = this.power*0.1;
//         this.power = newPower > max+this.power ? console.log(`Sorry max power is ${this.power+max}`) :this.power+newPower;
//
//     }
//     incresRam(value = 0) {
//         const newRam = value;
//         const max = this.ram;
//         this.ram = newRam > max ? console.log(`Sorry max RAM is ${max*2}`) : this.ram +value;
//         console.log(this.ram);
//     }
//     playGame(value = 'Tetris'){
//         const game = value;
//         this.fps = this.power/this.ram
//         console.log(`You are playing ${game} with ${this.fps} FPS`)
//     }
// }
// class RegularPc extends Pc{
//     constructor(ram, power , name) {
//         super(ram, power , name);
//     }
// }
// class GamePc extends Pc{
//     constructor(ram, power , name){
//         super(ram, power , name);
//     }
//     playGame(){
//         if(this.power < 500 || this.ram < 8 ){
//             console.log(`на цьому відрі ігри не запускаються`)
//             return
//         }
//         this.fps = 2*(this.power/this.ram);
//         this.power = this.power - ((this.power/100)*0.1);
//         console.log(`You are playing GTA V with ${this.fps} FPS`);
// }}
// let officePc = new Pc(4,500,'Office PC');
// let regulPc = new RegularPc(10,800,'Regular PC');
// let gamePc = new GamePc(8,500,'Game PC');
// class Laptop extends Pc{
//     constructor(ram, power , name, screenSize){
//     super(ram, power , name);
//     this.screenSize = screenSize;
//     this.bat = this.power/(this.screenSize * this.ram);
// }
// }
// let officeLaptop = new Laptop(4,500,'OfficeLaptop',17);
// class UltraBook extends Laptop{
//     constructor(ram, power , name, screenSize, weight){
//         super(ram, power , name, screenSize);
//         this.weight= weight;
//     }
//     powerOn(){
//         if(this.weight > 2 && this.bat < 4){
//             console.log(`low battery, please charging`);
//         } else{console.log(` ${this.name} is power ON`)}
//     }
// }
// let ultra = new UltraBook(4,200,'Ultrabook',14,2.5);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// function NewCar(model,manufacture,year,maxSpeed,vEngine){
//     this.model = model;
//     this.manufacture = manufacture;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.vEngine = vEngine;
//     this.drive = function(){console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);}
//     this.info = function (){ console.log(`Marka ${this.manufacture} model: ${this.model}, year of issue: ${this.year}
//     ,Max speed ${this.maxSpeed}, engine volume: ${vEngine}`)} ;
//     this.increaseMaxSpeed = function (newSpeed){
//         this.maxSpeed+=newSpeed;
//         console.log(`Max speed increased by ${newSpeed}, equal max speed is ${this.maxSpeed} `);
//     }
//     this.changeYear = function (newValue){
//         this.year = newValue;
//         console.log(this.year);
//     }
//     this.addDriver = function (driver){
//         this.driver = driver;
//         console.log(`New driver is ${this.driver.name}`)
//     }
// }
// let driver1 = {name:'Max',age:31}
// let bmwE90 = new NewCar('M3','BMW',2010,250,3.0);
// bmwE90.addDriver(driver1);
// console.log(bmwE90);
///////////////

// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
// class Car{
//     constructor(model,manufacture,year,maxSpeed,vEngine) {
//         this.model = model;
//         this.manufacture = manufacture;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.vEngine = vEngine;
//     }
//     drive() {console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);}
//     info (){ console.log(`Marka ${this.manufacture} model: ${this.model}, year of issue: ${this.year}
//     ,Max speed ${this.maxSpeed}, engine volume: ${vEngine}`)} ;
//     increaseMaxSpeed (newSpeed){
//         this.maxSpeed+=newSpeed;
//         console.log(`Max speed increased by ${newSpeed}, equal max speed is ${this.maxSpeed} `);
//     }
//     changeYear (newValue){
//         this.year = newValue;
//         console.log(this.year);
//     }
//     addDriver (driver){
//         this.driver = driver;
//         console.log(`New driver is ${this.driver.name}`);
//     }
// }
// let driver1 = {name:'Max',age:31}
// let bmwE90 = new Car('M3','BMW',2010,250,3.0);
// bmwE90.addDriver(driver1);
// console.log(bmwE90);
///

// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// // -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// class Girl {
//     constructor(name,age,footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }}
// class Prince {
//         constructor(name,age,shoeSize) {
//             this.name = name;
//             this.age = age;
//             this.shoeSize = shoeSize;
//         }
//         findGirl(array){
//             for (const arrayElement of array) {
//                if(arrayElement.footSize === prince.shoeSize) {
//                    console.log(`${arrayElement.name} is your destiny`)
//                }
//             }
//         }
// }
// const girls =[
//     new Girl('Masha',25,32),
//     new Girl('Dasha',25,33),
//     new Girl('Sasha',25,34),
//     new Girl('Natasha',25,35),
//     new Girl('Sveta',25,36),
//     new Girl('Tanya',25,37),
//     new Girl('Anya',25,38),
//     new Girl('Lena',25,39),
//     new Girl('Olya',25,40)
// ];
// const prince = new Prince('Vasilij',30,36);
// prince.findGirl(girls);

// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// function Girl(name,age,footSize){
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
// function Prince(name,age,shoeSize){
//     this.name = name;
//     this.age = age;
//     this.shoeSize = shoeSize;
//     this.search = function (array) {
//         for (const arrayElement of array) {
//             if(arrayElement.footSize === prince.shoeSize){
//                 console.log(`${arrayElement.name} is your destiny`);
//             }
//
//         }
//     }
// }
// const girls =[
//     new Girl('Masha',25,32),
//     new Girl('Dasha',25,33),
//     new Girl('Sasha',25,34),
//     new Girl('Natasha',25,35),
//     new Girl('Sveta',25,36),
//     new Girl('Tanya',25,37),
//     new Girl('Anya',25,38),
//     new Girl('Lena',25,39),
//     new Girl('Olya',25,40)
// ];
// const prince = new Prince('Jora',32,35);
// prince.search(girls);