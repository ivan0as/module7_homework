const person = {
  name: "Ivan",
  city: "Moscow"
}

function keyObject(object) {
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      console.log(key, object[key]);
    }
  }
}
keyObject(person);