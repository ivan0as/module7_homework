const person = {
  name: "Ivan",
  city: "Moscow"
}

function keyObject(string, object) {
  let bool=false;
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      if (key == string) {
        bool = true;
      }
    }
  }
  console.log(bool);
}

title = prompt('Введите строку');

keyObject(title, person);