class Vehicle {
    constructor(manufacturer, numOfWheels, type) {
        this.manufacturer = manufacturer;
        this.numOfWheels = numOfWheels;
        this.type = type;
    }
    showVehicleInfo() {
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


class Sedan extends Vehicle {
    constructor(hasTruckBed, size, mpg) {
        super(hasTruckBed);
        this.size = size;
        this.mpg = mpg;
    }
    showSedanVehicleInfo() {
        return console.log(`Vehicle Size: ${this.size}\nMiles per Gallon: ${this.mpg} mpg`);
    };
};


class Motorcycle extends Vehicle {
    constructor(handleBarsSteeringWheel, numOfDoors) {
        super(numOfDoors);
        this.handleBarsSteeringWheel = handleBarsSteeringWheel;
    }
    showMotorcycleVehicleInfo() {
        return console.log(`Handlebars / Steering Wheel: ${this.handleBarsSteeringWheel}\n`)
    };
};


let vehicleOne = new Vehicle("Ford", 4, "car");
let vehicleOneTruck = new Truck(4, 4.5, false);
let vehicleOneSedan = new Sedan(false, "medium", 27);
let vehicleOneMotorcyle = new Motorcycle("steering wheel", 4);
vehicleOne.showVehicleInfo();
vehicleOneTruck.showTruckVehicleInfo();
vehicleOneSedan.showSedanVehicleInfo();
vehicleOneMotorcyle.showMotorcycleVehicleInfo();

let vehicleTwo = new Vehicle("Audi", 4, "sports car");
let vehicleTwoTruck = new Truck(4, 2, false);
let vehicleTwoSedan = new Sedan(false, "small", 38);
let vehicleTwoMotorcycle = new Motorcycle("steering wheel", 2);
vehicleTwo.showVehicleInfo();
vehicleTwoTruck.showTruckVehicleInfo();
vehicleTwoSedan.showSedanVehicleInfo();
vehicleTwoMotorcycle.showMotorcycleVehicleInfo();

let vehicleThree = new Vehicle("Harley-Davidson", 2, "motorcycle");
let vehicleThreeTruck = new Truck(2, 0, false);
let vehicleThreeSedan = new Sedan(false, "small", 50);
let vehicleThreeMotorcycle = new Motorcycle("handle bars", 0);
vehicleThree.showVehicleInfo();
vehicleThreeTruck.showTruckVehicleInfo();
vehicleThreeSedan.showSedanVehicleInfo();
vehicleThreeMotorcycle.showMotorcycleVehicleInfo();

let vehicleFour = new Vehicle("Dodge", 6, "truck");
let vehicleFourTruck = new Truck(6, 6, true);
let vehicleFourSedan = new Sedan(true, "medium", 25);
let vehicleFourMotorcycle = new Motorcycle("steering wheel", 6);
vehicleFour.showVehicleInfo();
vehicleFourTruck.showTruckVehicleInfo();
vehicleFourSedan.showSedanVehicleInfo();
vehicleFourMotorcycle.showMotorcycleVehicleInfo();

let vehicleFive = new Vehicle("Polaris", 3, "roadster");
let vehicleFiveTruck = new Truck(3, 0, false);
let vehicleFiveSedan = new Sedan(false, "small", 45);
let vehicleFiveMotorcyle = new Motorcycle("steering wheel", 0);
vehicleFive.showVehicleInfo();
vehicleFiveTruck.showTruckVehicleInfo();
vehicleFiveSedan.showSedanVehicleInfo();
vehicleFiveMotorcyle.showMotorcycleVehicleInfo();


