// Classes
// We could create a function and add methods on the function object using the prototype.
// In JS functions are objects - inherit the behaviour of object.
// Wnenever you create an object, the protype object is also created bihind the sceen.

// function Holiday(destination, days) {
//     this.destination = destination;
//     this.days = days;
// }

// // this info() method is added in above function
// Holiday.prototype.info = function() {
//     console.log(this.destination + ' | ' + this.days + ' days')
// };

// var nepal = new Holiday('Nepal', 30);
// // console.log(nepal.info());
// nepal.info()

// =====================================

// class in JS technically is function
// super class
class Holiday {
    constructor(destination, days) {
      this.destination = destination;
      this.days = days;
    }

    info() {
        console.log(`${this.destination} will take ${this.days} days.`);
    }
}

// const trip = new Holiday('Katmandu, Nepal', 30);
// console.log(trip.info());
// trip.info()

// sub class
class Expedition extends Holiday {
  constructor(destination, days, gear) {
    super(destination, days)
    this.gear = gear;
  }
  
  info() {
    super.info();
    console.log(`Bring your ${this.gear.join(' and your ')}`);
  }  
}

const tripWithGear = new Expedition('Everest', 30, ['Sunglasses', 'Flags', 'Camera'])
tripWithGear.info();

