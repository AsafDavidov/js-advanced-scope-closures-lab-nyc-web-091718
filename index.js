function produceDrivingRange(distance){
  return function(start,finish){
    const difference = Math.abs(parseInt(start) - parseInt(finish));
    if (difference>distance){
      return `${difference-distance} blocks out of range`
    }
    else{
      return `within range by ${distance-difference}`
    }
  };
}
function produceTipCalculator(tipPercent){
  return function(totalBill){
    return totalBill*tipPercent
  }
}
function createDriver(){
  let DriverId = 0;
  return class Driver{
    constructor(name){
      this.name = name;
      this.id = ++DriverId;
    }
  }
}
