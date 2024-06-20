const demoObj = {
    name: 'pradeep',
    walk: function () {
        console.log(this);
    }
}

// demoObj.walk()

const walk = demoObj.walk.bind(demoObj.walk)

const carObjects = {
    audi() {
        console.log('car : '+'audi');
    },
    bmw() {
        console.log(this);
    },
    tata: this
}

console.log(carObjects.tata)
carObjects.bmw()
