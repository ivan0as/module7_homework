class Device{ // Родительская функция с методами
  constructor(name, power) {
    this.name = name;
    this.power = power;
  }

  applianceOn () {
    console.log(`${this.name} работает. Мощность: ${this.power} Вт`);
  }
  applianceOff () {
    console.log(`${this.name} не работает`);
  }
}

// Функция для лампы
class Lamp extends Device { 
  constructor(name, power, price, color) {
    super(name, power);
    this.price = price;
    this.color = color;
  }
  characteristics() {
    console.log(`Лампа: "${this.name}"
    Мощность: ${this.power} Вт
    Цена: ${this.price} руб.
    Цвет: ${this.color}`);
  }
}

// Функция для компьютера
class Сomputer extends Device {
  constructor(name, power, price, cpu, ram, graphicsСard, hdd, ssd) {
    super(name, power);
    this.price = price;
    this.cpu = cpu;
    this.ram = ram;
    this.graphicsСard = graphicsСard;
    this.hdd = hdd;
    this.ssd = ssd;
  }
  characteristics() {
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


// Экземпляр лампы
let readingLamp = new Lamp("Настольный светильник Uniel TLD-571 Black LED", 8, 1450, "Черный");

// Экземпляр компьютера
let computerNotebook = new Сomputer("ПК HYPERPC Concep 2", 750, 524999, "Core i9-11900KF", 64, "GeForce RTX 3090", 4096, 1024);

readingLamp.characteristics(); // Вывод характеристик лампы
readingLamp.applianceOff(); // Выключение лампы
computerNotebook.characteristics(); // Вывод характеристик компьютера
computerNotebook.applianceOn(); // Включение компьютера