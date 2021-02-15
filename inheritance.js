class Vehicle {
    constructor(manufacturer, numOfWheels, type) {
        this.manufacturer = manufacturer;
        this.numOfWheels = numOfWheels;
        this.type = type;
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
        return console.log(`No. of Doors: ${this.numOfDoors}\nHas Truck Bed: ${this.hasTruckBed}`);
    };
};


let vehicleOne = new Vehicle("Ford", 4, "car");
let vehicleOneTruck = new Truck(4, 4.5, false);
vehicleOne.aboutVehicle();
vehicleOneTruck.showTruckVehicleInfo();

let vehicleTwo = new Vehicle("Audi", 4, "sports car");
let vehicleTwoTruck = new Truck(4, 2, false);
vehicleTwo.aboutVehicle();
vehicleTwoTruck.showTruckVehicleInfo();

let vehicleThree = new Vehicle("Harley-Davidson", 2, "motorcycle");
let vehicleThreeTruck = new Truck(2, 0, false);
vehicleThree.aboutVehicle();
vehicleThreeTruck.showTruckVehicleInfo();

let vehicleFour = new Vehicle("Dodge", 6, "truck");
let vehicleFourTruck = new Truck(6, 6, true);
vehicleFour.aboutVehicle();
vehicleFourTruck.showTruckVehicleInfo();

let vehicleFive = new Vehicle("Polaris", 3, "roadster");
let vehicleFiveTruck = new Truck(3, 0, false);
vehicleFive.aboutVehicle();
vehicleFiveTruck.showTruckVehicleInfo();


