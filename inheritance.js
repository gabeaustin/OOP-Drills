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
    showSedanVehicleInfo(){
        return console.log(`Vehicle Size: ${this.size}\nMiles per Gallon: ${this.mpg} mpg`);
    };
};


let vehicleOne = new Vehicle("Ford", 4, "car");
let vehicleOneTruck = new Truck(4, 4.5, false);
let vehicleOneSedan = new Sedan(false, "medium", 27);
vehicleOne.showVehicleInfo();
vehicleOneTruck.showTruckVehicleInfo();
vehicleOneSedan.showSedanVehicleInfo();

let vehicleTwo = new Vehicle("Audi", 4, "sports car");
let vehicleTwoTruck = new Truck(4, 2, false);
let vehicleTwoSedan = new Sedan(false, "small", 38);
vehicleTwo.showVehicleInfo();
vehicleTwoTruck.showTruckVehicleInfo();
vehicleTwoSedan.showSedanVehicleInfo();

let vehicleThree = new Vehicle("Harley-Davidson", 2, "motorcycle");
let vehicleThreeTruck = new Truck(2, 0, false);
let vehicleThreeSedan = new Sedan(false, "small", 50);
vehicleThree.showVehicleInfo();
vehicleThreeTruck.showTruckVehicleInfo();
vehicleThreeSedan.showSedanVehicleInfo();

let vehicleFour = new Vehicle("Dodge", 6, "truck");
let vehicleFourTruck = new Truck(6, 6, true);
let vehicleFourSedan = new Sedan(true, "medium", 25);
vehicleFour.showVehicleInfo();
vehicleFourTruck.showTruckVehicleInfo();
vehicleFourSedan.showSedanVehicleInfo();

let vehicleFive = new Vehicle("Polaris", 3, "roadster");
let vehicleFiveTruck = new Truck(3, 0, false);
let vehicleFiveSedan = new Sedan(false, "small", 45);
vehicleFive.showVehicleInfo();
vehicleFiveTruck.showTruckVehicleInfo();
vehicleFiveSedan.showSedanVehicleInfo();


