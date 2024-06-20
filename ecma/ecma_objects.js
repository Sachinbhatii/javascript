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
        console.log('number 1 car: '+'audi');
        console.log('number 2 car: '+'audi8');

    },
    bmw() {
        console.log(this);
    },
    tata: this
}

console.log(carObjects.tata)
carObjects.bmw()
