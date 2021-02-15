class Vehicle {
    constructor(manufacturer, numOfWheels) {
        this.manufacturer = manufacturer;
        this.numOfWheels = numOfWheels;
    }
};

Vehicle.prototype.aboutVehicle = function() {
    console.log(`Vehicle Type: ${this.type}\nManufacturer: ${this.manufacturer}\nNumber of Wheels: ${this.numOfWheels}`);
};

let vehicleOne = new Vehicle("Ford", 4);
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