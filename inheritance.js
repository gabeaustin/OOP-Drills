class Vehicle {
    constructor(manufacturer, numOfWheels) {
        this.manufacturer = manufacturer;
        this.numOfWheels = numOfWheels;
    }
    aboutVehicle() {
        return console.log(`Vehicle Type: ${this.type}\nManufacturer: ${this.manufacturer}\nNumber of Wheels: ${this.numOfWheels}`);
    };
};


class Truck extends Vehicle {
    constructor(numOfWheels, numOfDoors, hasTruckBed) {
        super(numOfWheels);
        this.numOfDoors = numOfDoors;
        this.hasTruckBed = hasTruckBed;
    }
    showTruckVehicleInfo() {
        return console.log(`No. of Doors: ${this.numOfDoors}\n${this.type} has Truck Bed: ${this.hasTruckBed}`);
    };
};


let vehicleOne = new Vehicle(4, "Ford", 4);
let vehicleOneTruck = new Truck(4, false);
vehicleOneTruck.showTruckVehicleInfo();
vehicleOne.type = "Car";

let vehicleTwo = new Vehicle("Audi", 4);
vehicleTwo.type = "Sports Car";
let vehicleThree = new Vehicle("Harley-Davidson", 2);
vehicleThree.type = "Motorcycle";
let vehicleFour = new Vehicle("Dodge", 6);
vehicleFour.type = "Truck";

vehicleOne.aboutVehicle();
vehicleTwo.aboutVehicle();
vehicleThree.aboutVehicle();
vehicleFour.aboutVehicle();


