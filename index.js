// Step 1: Define returnFirstTwoDrivers
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2); // Returns the first two drivers
};

// Step 2: Define returnLastTwoDrivers
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2); // Returns the last two drivers
};

// Step 3: Define selectingDrivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Step 4: Define createFareMultiplier
const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier; // Multiplies the fare by the given multiplier
    };
};

// Step 5: Define fareDoubler
const fareDoubler = createFareMultiplier(2); // Doubles the fare

// Step 6: Define fareTripler
const fareTripler = createFareMultiplier(3); // Triples the fare

// Step 7: Define selectDifferentDrivers
const selectDifferentDrivers = function(drivers, selectionFunction) {
    return selectionFunction(drivers); // Applies the given selection function to the drivers array
};

// Test and output the results AFTER all functions are defined
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

console.log("First two drivers:", returnFirstTwoDrivers(drivers)); // ['Antonia', 'Nuru']
console.log("Last two drivers:", returnLastTwoDrivers(drivers)); // ['Amari', 'Mo']
console.log("Selecting first two drivers:", selectingDrivers[0](drivers)); // ['Antonia', 'Nuru']
console.log("Selecting last two drivers:", selectingDrivers[1](drivers)); // ['Amari', 'Mo']
console.log("Fare doubled (10):", fareDoubler(10)); // 20
console.log("Fare tripled (10):", fareTripler(10)); // 30
console.log("Selected drivers (first two):", selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // ['Antonia', 'Nuru']
console.log("Selected drivers (last two):", selectDifferentDrivers(drivers, returnLastTwoDrivers)); // ['Amari', 'Mo']
