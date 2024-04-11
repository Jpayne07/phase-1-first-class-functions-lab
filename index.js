// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
console.log(drivers.slice(0,2));

const returnFirstTwoDrivers = function(drivers){
    return (drivers.slice(0,2))
}

const returnLastTwoDrivers = function(drivers){
    return (drivers.slice(2,4))
}



let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(fareMultiplier) {

    return function(fare) {
        return fare *fareMultiplier
    }
}


const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers (drivers,returnLastTwoDrivers){
    return returnLastTwoDrivers(drivers)
}