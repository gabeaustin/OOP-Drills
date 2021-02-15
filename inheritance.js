class Vehicle {
    constructor(manufacturer, numOfWheels, type) {
        this.manufacturer = manufacturer;
        this.numOfWheels = numOfWheels;
        this.type = type;
    };

    showVehicleInfo() {
        return console.log(`Vehicle Type: ${this.type}\nManufacturer: ${this.manufacturer}\nNumber of Wheels: ${this.numOfWheels}`);
    };   
};


class Truck extends Vehicle {
    constructor(numOfWheels, numOfDoors, hasTruckBed) {
        super(numOfWheels);
        this.numOfDoors = numOfDoors;
        this.hasTruckBed = hasTruckBed;
    };
};


class Sedan extends Vehicle {
    constructor(hasTruckBed, size, mpg) {
        super(hasTruckBed);
        this.size = size;
        this.mpg = mpg;
    }
};


class Motorcycle extends Vehicle {
    constructor(handleBarsSteeringWheel, numOfDoors) {
        super(numOfDoors);
        this.handleBarsSteeringWheel = handleBarsSteeringWheel;
    }
};

// Method Override
Vehicle.prototype.showVehicleInfo = function() {
    console.log(`The ${this.manufacturer} ${this.type} has ${this.numOfWheels} wheels and has a ${this.handleBarsSteeringWheel}.`);
    // console.log(`This vehicle has ${this.numOfDoors} number of doors and has a truck bed - ${this.hasTruckBed}.`);   
};


let vehicleOne = new Vehicle("Ford", 4, "car");
let vehicleOneTruck = new Truck(4, 4.5, false);
let vehicleOneSedan = new Sedan(false, "medium", 27);
let vehicleOneMotorcyle = new Motorcycle("steering wheel", 4);
// vehicleOne.showVehicleInfo();
vehicleOneTruck.showVehicleInfo();
vehicleOneSedan.showVehicleInfo();
vehicleOneMotorcyle.showVehicleInfo();
// vehicleOneTruck.showTruckVehicleInfo();
// vehicleOneSedan.showSedanVehicleInfo();
// vehicleOneMotorcyle.showMotorcycleVehicleInfo();

let vehicleTwo = new Vehicle("Audi", 4, "sports car");
let vehicleTwoTruck = new Truck(4, 2, false);
let vehicleTwoSedan = new Sedan(false, "small", 38);
let vehicleTwoMotorcycle = new Motorcycle("steering wheel", 2);
// vehicleTwo.showVehicleInfo();
// vehicleTwoTruck.showTruckVehicleInfo();
vehicleTwoTruck.showVehicleInfo();
vehicleTwoSedan.showVehicleInfo();
vehicleTwoMotorcycle.showVehicleInfo();
// vehicleTwoSedan.showSedanVehicleInfo();
// vehicleTwoMotorcycle.showMotorcycleVehicleInfo();

let vehicleThree = new Vehicle("Harley-Davidson", 2, "motorcycle");
let vehicleThreeTruck = new Truck(2, 0, false);
let vehicleThreeSedan = new Sedan(false, "small", 50);
let vehicleThreeMotorcycle = new Motorcycle("handle bars", 0);
vehicleThreeTruck.showVehicleInfo();
vehicleThreeSedan.showVehicleInfo();
vehicleThreeMotorcycle.showVehicleInfo();
// vehicleThree.showVehicleInfo();
// vehicleThreeTruck.showTruckVehicleInfo();
// vehicleThreeSedan.showSedanVehicleInfo();
// vehicleThreeMotorcycle.showMotorcycleVehicleInfo();

let vehicleFour = new Vehicle("Dodge", 6, "truck");
let vehicleFourTruck = new Truck(6, 6, true);
let vehicleFourSedan = new Sedan(true, "medium", 25);
let vehicleFourMotorcycle = new Motorcycle("steering wheel", 6);
vehicleFourTruck.showVehicleInfo();
vehicleFourSedan.showVehicleInfo();
vehicleFourMotorcycle.showVehicleInfo();
// vehicleFour.showVehicleInfo();
// vehicleFourTruck.showTruckVehicleInfo();
// vehicleFourSedan.showSedanVehicleInfo();
// vehicleFourMotorcycle.showMotorcycleVehicleInfo();

let vehicleFive = new Vehicle("Polaris", 3, "roadster");
let vehicleFiveTruck = new Truck(3, 0, false);
let vehicleFiveSedan = new Sedan(false, "small", 45);
let vehicleFiveMotorcyle = new Motorcycle("steering wheel", 0);
vehicleFiveTruck.showVehicleInfo();
vehicleFiveSedan.showVehicleInfo();
vehicleFiveMotorcycle.showVehicleInfo();
// vehicleFive.showVehicleInfo();
// vehicleFiveTruck.showTruckVehicleInfo();
// vehicleFiveSedan.showSedanVehicleInfo();
// vehicleFiveMotorcyle.showMotorcycleVehicleInfo();


