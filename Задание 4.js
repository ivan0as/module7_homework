function Device(name, power) { // Родительская функция с методами
  this.name = name;
  this.power = power;

  this.applianceOn = function() {
    console.log(`${this.name} работает. Мощность: ${this.power} Вт`);
  }
  this.applianceOff = function() {
    console.log(`${this.name} не работает`);
  }
}

// Функция для лампы
function Lamp(name, power, price, color) { 
  this.name = name;
  this.power = power;
  this.price = price;
  this.color = color;
  this.characteristics = function () {
    console.log(`Лампа: "${this.name}"
    Мощность: ${this.power} Вт
    Цена: ${this.price} руб.
    Цвет: ${this.color}`);
  }
}

// Функция для компьютера
function Сomputer(name, power, price, cpu, ram, graphicsСard, hdd, ssd) { 
  this.name = name;
  this.power = power;
  this.price = price;
  this.cpu = cpu;
  this.ram = ram;
  this.graphicsСard = graphicsСard;
  this.hdd = hdd;
  this.ssd = ssd;
  this.characteristics = function () {
    console.log(`Компьютер: "${this.name}"
    Мощность: ${this.power} Вт
    Цена: ${this.price} руб.
    Процессор: ${this.cpu}
    ОЗУ: ${this.ram} Гб
    Видеокарта: ${this.graphicsСard}
    Жёсткий диск: ${this.hdd} Гб
    Твердотельный накопитель: ${this.ssd} Гб`);
  }
}

// Делегирующую связь [[Prototype]] для лампы
Lamp.prototype = new Device();

// Делегирующую связь [[Prototype]] для компьютера
Сomputer.prototype = new Device();  

// Экземпляр лампы
let readingLamp = new Lamp("Настольный светильник Uniel TLD-571 Black LED", 8, 1450, "Черный");

// Экземпляр компьютера
let computerNotebook = new Сomputer("ПК HYPERPC Concep 2", 750, 524999, "Core i9-11900KF", 64, "GeForce RTX 3090", 4096, 1024);

readingLamp.characteristics(); // Вывод характеристик лампы
readingLamp.applianceOff(); // Выключение лампы
computerNotebook.characteristics(); // Вывод характеристик компьютера
computerNotebook.applianceOn(); // Включение компьютера